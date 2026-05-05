'use client';

import { useState } from 'react';

export function DriverView() {
    const [isOnline, setIsOnline] = useState(false);

    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-sm px-4 pointer-events-auto">
            <div className="bg-white p-2 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-col items-center">

                <div className="p-4 text-center">
                    <h2 className="text-xl font-bold text-gray-900">
                        {isOnline ? "You're Online" : "You're Offline"}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1 font-medium">
                        {isOnline ? "Waiting for ride requests..." : "Go online to start earning"}
                    </p>
                </div>

                <button
                    onClick={() => setIsOnline(!isOnline)}
                    className={`w-full py-4 rounded-2xl text-lg font-bold transition-all duration-300 ${isOnline
                            ? 'bg-red-500 text-white hover:bg-red-600 shadow-md'
                            : 'bg-[#FFCC00] text-black hover:bg-[#e6b800] shadow-md hover:-translate-y-0.5'
                        }`}
                >
                    {isOnline ? 'GO OFFLINE' : 'GO ONLINE'}
                </button>
            </div>
        </div>
    );
}