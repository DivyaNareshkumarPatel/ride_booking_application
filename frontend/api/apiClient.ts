import axios, { InternalAxiosRequestConfig, AxiosRequestConfig } from "axios";

declare module "axios" {
    export interface AxiosRequestConfig {
        skipAuth?: boolean;
    }
    export interface InternalAxiosRequestConfig {
        skipAuth?: boolean;
        _retried?: boolean;
    }
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const apiClient = axios.create({
    baseURL: BASE_URL,
});

apiClient.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        if (config.skipAuth) {
            return config;
        }

        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers["Authorization"] = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.data?.message) {
            const messageData = error.response.data.message;
            error.message = Array.isArray(messageData)
                ? messageData.join(" • ")
                : String(messageData);
        }
        const originalRequest = error.config;
        const isAuthError = error.response?.status === 401 || error.response?.status === 403;
        const messageData = error.response?.data?.message;
        const stringifiedMessage = Array.isArray(messageData) ? messageData.join(" ") : String(messageData || "");
        const sessionExpired = stringifiedMessage.toLowerCase().includes("expired");

        if (isAuthError && !originalRequest._retried && !sessionExpired) {
            originalRequest._retried = true;

            try {
                const { useAuthStore } = await import("@/store/useAuthStore");
                const currentToken = useAuthStore.getState().token;
            } catch (refreshError) {
                console.error("Failed to refresh user permissions:", refreshError);
                const { useAuthStore } = await import("@/store/useAuthStore");
                useAuthStore.getState().logout();
            }
        } else if (isAuthError && sessionExpired) {
            const { useAuthStore } = await import("@/store/useAuthStore");
            useAuthStore.getState().logout();

            if (typeof window !== "undefined") {
                window.location.href = "/login";
            }
        }

        return Promise.reject(error);
    }
);