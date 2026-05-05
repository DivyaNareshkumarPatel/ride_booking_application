import { create } from 'zustand';

interface AuthState {
    token: string | null;
    userId: string | null;
    role: 'rider' | 'driver' | null;
    setAuth: (token: string, userId: string, role: 'rider' | 'driver') => void;
    logout: () => void;
}

const getLocalStorageItem = (key: string) => {
    if (typeof window === 'undefined') return null;
    const value = localStorage.getItem(key);
    return value === 'undefined' ? null : value;
};

export const useAuthStore = create<AuthState>((set) => ({
    token: getLocalStorageItem('token'),
    userId: getLocalStorageItem('userId'),
    role: getLocalStorageItem('role') as any,

    setAuth: (token, userId, role) => {
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('role', role);
        set({ token, userId, role });
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('role');
        set({ token: null, userId: null, role: null });
    },
}));