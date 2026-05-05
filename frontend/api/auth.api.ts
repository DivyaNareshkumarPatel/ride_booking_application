import { apiClient } from './apiClient';

export const loginApi = async (credentials: any) => {
    const { data } = await apiClient.post('/auth/login', credentials, { skipAuth: true });
    return data;
};

export const registerApi = async (credentials: any) => {
    const { data } = await apiClient.post('/auth/register', credentials, { skipAuth: true });
    return data;
};