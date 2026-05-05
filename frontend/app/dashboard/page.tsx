'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { Navbar } from '@/app/dashboard/Navbar';
import { RiderView } from '@/app/dashboard/RiderView';
import { DriverView } from '@/app/dashboard/DriverView';

export default function DashboardPage() {
    const router = useRouter();
    const token = useAuthStore((state) => state.token);
    const role = useAuthStore((state) => state.role);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (!token) {
            router.push('/auth/login');
        }
    }, [token, router]);

    if (!mounted || !token) return null;

    return (
        <div className="relative w-full h-screen bg-[#e5e5e5] overflow-hidden">

            <Navbar />

            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />
                <p className="text-gray-400 font-bold text-2xl tracking-widest uppercase">
                    Map Integration Pending
                </p>
            </div>
            {role === 'rider' ? <RiderView /> : <DriverView />}

        </div>
    );
}