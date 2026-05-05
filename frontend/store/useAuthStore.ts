import { create } from 'zustand';

interface AuthState {
    token: string | null;
    userId: string | null;
    role: 'rider' | 'driver' | null;
    setAuth: (token: string, userId: string, role: 'rider' | 'driver') => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
    userId: typeof window !== 'undefined' ? localStorage.getItem('userId') : null,
    role: typeof window !== 'undefined' ? localStorage.getItem('role') as any : null,

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