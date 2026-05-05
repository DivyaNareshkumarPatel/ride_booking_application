'use client';

import { useState } from 'react';
import { useRegister } from '@/hooks/useAuth';
import { AuthLayout } from '@/app/auth/AuthLayout';
import { InputField } from '@/app/auth/InputField';
import { SubmitButton } from '@/app/auth/SubmitButton';

export default function SignupPage() {
    const [formData, setFormData] = useState({
        full_name: '',
        phone_number: '',
        email: '',
        password: '',
        role: 'rider'
    });

    const { mutate: register, isPending, error } = useRegister();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        register(formData);
    };

    return (
        <AuthLayout
            title="Create your account"
            subtitle="Join the next-generation mobility platform."
            footerText="Already have an account?"
            footerLinkText="Log in"
            footerHref="/auth/login"
        >
            <form className="space-y-6" onSubmit={handleSubmit}>

                {error && (
                    <div className="text-red-600 text-sm font-medium bg-red-50 p-4 rounded-xl border border-red-100 leading-relaxed">
                        {error.message}
                    </div>
                )}

                <div className="bg-gray-100 p-1 rounded-xl flex mb-6">
                    <label className={`flex-1 text-center py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 ${formData.role === 'rider'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-gray-500 hover:text-black'
                        }`}>
                        <input
                            type="radio" name="role" value="rider"
                            checked={formData.role === 'rider'}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            className="hidden"
                        />
                        I'm a Rider
                    </label>

                    <label className={`flex-1 text-center py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 ${formData.role === 'driver'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-gray-500 hover:text-black'
                        }`}>
                        <input
                            type="radio" name="role" value="driver"
                            checked={formData.role === 'driver'}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            className="hidden"
                        />
                        I'm a Driver
                    </label>
                </div>

                <div className="space-y-4">
                    <InputField
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    />
                    <InputField
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone_number}
                        onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                    />
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

                <div className="pt-2">
                    <SubmitButton
                        isPending={isPending}
                        loadingText="Creating account..."
                        text="Sign Up"
                    />
                </div>
            </form>
        </AuthLayout>
    );
}