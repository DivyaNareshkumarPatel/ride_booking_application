import Link from 'next/link';
import { ReactNode } from 'react';

interface AuthLayoutProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
    footerText: string;
    footerLinkText: string;
    footerHref: string;
}

export function AuthLayout({ title, subtitle, children, footerText, footerLinkText, footerHref }: AuthLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-white font-sans text-gray-900">

            {/* LEFT SIDE - Bold, Bright Yellow */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#FFCC00] relative overflow-hidden flex-col justify-between p-12 lg:p-24">

                {/* Subtle dot grid pattern for a tech feel without being dark */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}
                />

                {/* Top Logo */}
                <div className="relative z-10 flex items-center gap-3">
                    <div className="h-10 w-10 bg-black text-white flex items-center justify-center rounded-lg shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-black">RideCore</span>
                </div>

                {/* Big Typography */}
                <div className="relative z-10">
                    <h1 className="text-5xl xl:text-6xl font-bold tracking-tight leading-[1.05] text-black mb-6">
                        Get there. <br />
                        <span className="text-white drop-shadow-sm">Simply.</span>
                    </h1>
                    <p className="text-lg text-black/80 font-medium max-w-sm">
                        Experience the fastest matching engine and seamless rides across the city.
                    </p>
                </div>

                {/* Abstract graphic at the bottom */}
                <div className="relative z-10 mt-12 w-full max-w-md">
                    {/* A sleek, minimalist route line graphic */}
                    <svg viewBox="0 0 400 150" className="w-full h-full text-black opacity-20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M 20 100 Q 100 20 200 80 T 380 40" />
                        <circle cx="20" cy="100" r="8" fill="currentColor" />
                        <circle cx="380" cy="40" r="8" fill="currentColor" />
                    </svg>
                </div>
            </div>

            {/* RIGHT SIDE - Borderless, Minimalist Form */}
            <div className="flex-1 flex items-center justify-center p-6 sm:p-12 lg:p-24 relative z-10 bg-white">

                {/* Smooth slide-up fade */}
                <div className="max-w-[400px] w-full animate-fade-in-up">

                    {/* Mobile Logo */}
                    <div className="lg:hidden mb-10 flex items-center gap-3">
                        <div className="h-10 w-10 bg-[#FFCC00] text-black flex items-center justify-center rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-black">RideCore</span>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-3xl font-bold tracking-tight text-black mb-2">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-gray-500 text-sm">{subtitle}</p>
                        )}
                    </div>

                    {children}

                    <div className="mt-10 pt-6 border-t border-gray-100">
                        <p className="text-center text-sm text-gray-500">
                            {footerText}{' '}
                            <Link href={footerHref} className="font-semibold text-black hover:text-[#FFCC00] transition-colors duration-200">
                                {footerLinkText}
                            </Link>
                        </p>
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.5s ease-out forwards;
          }
        `}} />
            </div>
        </div>
    );
}