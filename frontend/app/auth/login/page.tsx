'use client';

import { useState } from 'react';
import { useLogin } from '@/hooks/useAuth';
import { AuthLayout } from '@/app/auth/AuthLayout';
import { InputField } from '@/app/auth/InputField';
import { SubmitButton } from '@/app/auth/SubmitButton';

export default function LoginPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { mutate: login, isPending, error } = useLogin();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(formData);
    };

    return (
        <AuthLayout
            title="Welcome back"
            footerText="Don't have an account?"
            footerLinkText="Sign up"
            footerHref="/auth/signup"
        >
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                {error && (
                    <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">
                        {error.message}
                    </div>
                )}

                <div className="space-y-4">
                    <InputField
                        type="email"
                        required
                        placeholder="Email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <InputField
                        type="password"
                        required
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>

                <SubmitButton
                    isPending={isPending}
                    loadingText="Signing in..."
                    text="Sign In"
                />
            </form>
        </AuthLayout>
    );
}