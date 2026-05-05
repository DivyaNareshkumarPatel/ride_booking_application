'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useAuthStore } from '@/store/useAuthStore';
import { useRideStore } from '@/store/useRideStore';
import { Navbar } from '@/app/dashboard/Navbar';
import { RiderView } from '@/app/dashboard/RiderView';
import { DriverView } from '@/app/dashboard/DriverView';
import { getActiveRideApi } from '@/api/rides.api';

const Map = dynamic(() => import('@/app/dashboard/Map'), { 
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-100 animate-pulse flex items-center justify-center">Loading Map...</div>
});

export default function DashboardPage() {
    const router = useRouter();
    const token = useAuthStore((state) => state.token);
    const role = useAuthStore((state) => state.role);
    const { pickup, destination, initializeRide, driverLocation, status } = useRideStore();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (!token || !role) {
            router.push('/auth/login');
            return;
        }

        const fetchActiveRide = async () => {
            try {
                const activeRide = await getActiveRideApi();
                if (activeRide) {
                    initializeRide(activeRide);
                }
            } catch (error) {
                console.error('Failed to fetch active ride:', error);
            }
        };

        fetchActiveRide();
    }, [token, role, router, initializeRide]);

    if (!mounted || !token || !role) return null;

    return (
        <div className="relative w-full h-screen bg-[#e5e5e5] overflow-hidden">

            <Navbar />

            <div className="absolute inset-0 z-0">
                <Map 
                    pickup={pickup?.coords} 
                    destination={destination?.coords} 
                    driverLocation={driverLocation}
                    status={status}
                />
            </div>
            
            {role === 'rider' ? <RiderView /> : <DriverView />}

        </div>
    );
}
