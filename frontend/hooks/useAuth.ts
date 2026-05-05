import { useMutation } from '@tanstack/react-query';
import { loginApi, registerApi } from '@/api/auth.api';
import { useAuthStore } from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';

export const useLogin = () => {
    const setAuth = useAuthStore((state) => state.setAuth);
    const router = useRouter();

    return useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            setAuth(data.access_token, data.userId, data.role);
            router.push('/dashboard');
        },
    });
};

export const useRegister = () => {
    const setAuth = useAuthStore((state) => state.setAuth);
    const router = useRouter();

    return useMutation({
        mutationFn: registerApi,
        onSuccess: (data, variables) => {
            setAuth(data.access_token, data.userId, data.role);
            router.push('/dashboard');
        },
    });
};