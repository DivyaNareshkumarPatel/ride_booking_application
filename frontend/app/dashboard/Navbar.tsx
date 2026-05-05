'use client';

import { useAuthStore } from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';

export function Navbar() {
    const logout = useAuthStore((state) => state.logout);
    const role = useAuthStore((state) => state.role);
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    return (
        <nav className="absolute top-0 left-0 w-full z-50 p-4 pointer-events-none">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl shadow-sm border border-gray-100 pointer-events-auto">
                    <div className="h-8 w-8 bg-[#FFCC00] text-black flex items-center justify-center rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
                    </div>
                    <span className="text-lg font-bold tracking-tight text-black">RideCore</span>
                    <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-500 text-xs font-semibold rounded-md uppercase tracking-wider">
                        {role}
                    </span>
                </div>
                <div className="pointer-events-auto">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl shadow-sm border border-gray-100 text-sm font-semibold text-gray-700 hover:text-black hover:bg-gray-50 transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                        Sign Out
                    </button>
                </div>

            </div>
        </nav>
    );
}