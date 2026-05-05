'use client';

export function RiderView() {
    return (
        <div className="absolute top-24 left-4 sm:left-8 z-40 w-full max-w-[380px] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden pointer-events-auto animate-fade-in-up">

            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to?</h2>

                <div className="relative flex flex-col gap-3">

                    <div className="absolute left-[11px] top-6 bottom-6 w-0.5 bg-gray-200 z-0"></div>

                    <div className="relative z-10 flex items-center gap-4 group">
                        <div className="w-6 flex justify-center">
                            <div className="w-2.5 h-2.5 bg-black rounded-full shadow-[0_0_0_4px_white]"></div>
                        </div>
                        <input
                            type="text"
                            placeholder="Current Location"
                            className="flex-1 bg-gray-50 px-4 py-3 rounded-xl text-sm font-medium text-gray-900 border border-transparent focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                        />
                    </div>

                    <div className="relative z-10 flex items-center gap-4 group">
                        <div className="w-6 flex justify-center">
                            <div className="w-2.5 h-2.5 bg-[#FFCC00] rounded-sm shadow-[0_0_0_4px_white]"></div>
                        </div>
                        <input
                            type="text"
                            placeholder="Search destination..."
                            className="flex-1 bg-gray-100 px-4 py-3 rounded-xl text-sm font-medium text-gray-900 border border-transparent hover:bg-gray-200 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                        />
                    </div>
                </div>

                <button className="w-full mt-6 bg-black text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors">
                    Find Ride
                </button>
            </div>

            <div className="bg-gray-50 p-4 border-t border-gray-100 flex gap-2 overflow-x-auto hide-scrollbar">
                {['Home', 'Work', 'Airport'].map((place) => (
                    <button key={place} className="flex-shrink-0 bg-white px-4 py-2 rounded-full text-xs font-semibold text-gray-700 border border-gray-200 shadow-sm hover:border-black transition-colors">
                        {place}
                    </button>
                ))}
            </div>
        </div>
    );
}