'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRideStore } from '@/store/useRideStore';
import { requestRideApi, cancelRideApi } from '@/api/rides.api';
import axios from 'axios';

interface Suggestion {
    display_name: string;
    lat: string;
    lon: string;
    place_id: number;
}

export function RiderView() {
    const {
        pickup, destination, status, otp, rideId, estimatedFare, driverName,
        setPickup, setDestination, setStatus, setRideId, setOtp, setEstimatedFare, resetRide
    } = useRideStore();

    const [pickupQuery, setPickupQuery] = useState(pickup?.address || '');
    const [destQuery, setDestQuery] = useState(destination?.address || '');
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [activeInput, setActiveInput] = useState<'pickup' | 'destination' | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchSuggestions = useCallback(async (query: string) => {
        if (query.length < 3) {
            setSuggestions([]);
            return;
        }
        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
                params: {
                    q: query,
                    format: 'json',
                    addressdetails: 1,
                    limit: 5
                }
            });
            setSuggestions(response.data);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (activeInput === 'pickup') fetchSuggestions(pickupQuery);
            if (activeInput === 'destination') fetchSuggestions(destQuery);
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [pickupQuery, destQuery, activeInput, fetchSuggestions]);

    const handleSelectSuggestion = (suggestion: Suggestion) => {
        const coords: [number, number] = [parseFloat(suggestion.lat), parseFloat(suggestion.lon)];
        if (activeInput === 'pickup') {
            setPickup({ address: suggestion.display_name, coords });
            setPickupQuery(suggestion.display_name);
        } else {
            setDestination({ address: suggestion.display_name, coords });
            setDestQuery(suggestion.display_name);
        }
        setSuggestions([]);
        setActiveInput(null);
    };

    const handleGetCurrentLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await axios.get(`https://nominatim.openstreetmap.org/reverse`, {
                        params: {
                            lat: latitude,
                            lon: longitude,
                            format: 'json'
                        }
                    });
                    const address = response.data.display_name;
                    setPickup({ address, coords: [latitude, longitude] });
                    setPickupQuery(address);
                } catch (error) {
                    console.error('Error reverse geocoding:', error);
                    setPickup({ address: 'Current Location', coords: [latitude, longitude] });
                    setPickupQuery('Current Location');
                }
            });
        }
    };

    const handleRequestRide = async () => {
        if (!pickup || !destination) return;
        setLoading(true);
        setError(null);
        try {
            const res = await requestRideApi({
                pickup_lat: pickup.coords[0],
                pickup_lng: pickup.coords[1],
                dropoff_lat: destination.coords[0],
                dropoff_lng: destination.coords[1],
                pickup_address: pickup.address,
                dropoff_address: destination.address
            });
            setRideId(res.rideId);
            setEstimatedFare(res.estimatedFare);
            setStatus('requested');
        } catch (err: any) {
            setError(err.message || 'Failed to request ride');
        } finally {
            setLoading(false);
        }
    };

    const handleCancelRide = async () => {
        if (!rideId) return;
        try {
            await cancelRideApi(rideId);
            resetRide();
            setPickupQuery('');
            setDestQuery('');
        } catch (err: any) {
            setError(err.message || 'Failed to cancel ride');
        }
    };

    if (status !== 'idle' && status !== 'cancelled') {
        return (
            <div className="absolute top-24 left-4 sm:left-8 z-40 w-full max-w-[420px] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-6 pointer-events-auto">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 capitalize">
                            {status === 'ongoing' ? 'Ride Started' : status.replace('_', ' ')}
                        </h2>
                        <p className="text-sm text-gray-500">
                            {status === 'requested' && 'Finding nearby drivers...'}
                            {status === 'accepted' && `${driverName || 'Driver'} is on the way`}
                            {status === 'arrived' && `${driverName || 'Driver'} has arrived at pickup`}
                            {status === 'ongoing' && 'Enjoy your ride!'}
                            {status === 'completed' && 'You have reached your destination'}
                        </p>
                    </div>
                    {estimatedFare && (
                        <div className="text-right">
                            <p className="text-xs text-gray-400 font-medium">ESTIMATED FARE</p>
                            <p className="text-lg font-bold text-green-600">₹{estimatedFare}</p>
                        </div>
                    )}
                </div>

                <div className="space-y-4 mb-6">
                    <div className="flex gap-3">
                        <div className="w-5 flex flex-col items-center">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            <div className="w-0.5 flex-1 bg-gray-100 my-1"></div>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-gray-400 font-medium uppercase">Pickup</p>
                            <p className="text-sm font-medium text-gray-700 truncate">{pickup?.address}</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-5 flex justify-center">
                            <div className="w-2 h-2 bg-[#FFCC00] rounded-sm"></div>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-gray-400 font-medium uppercase">Destination</p>
                            <p className="text-sm font-medium text-gray-700 truncate">{destination?.address}</p>
                        </div>
                    </div>
                </div>

                {otp && status !== 'ongoing' && status !== 'completed' && (
                    <div className="bg-gray-50 rounded-2xl p-4 mb-6 text-center border border-dashed border-gray-200">
                        <p className="text-xs text-gray-500 font-medium uppercase mb-1">Share OTP with driver</p>
                        <p className="text-3xl font-black tracking-[0.5em] text-black">{otp}</p>
                    </div>
                )}

                {status === 'completed' ? (
                    <button
                        onClick={resetRide}
                        className="w-full bg-black text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
                    >
                        Done
                    </button>
                ) : (
                    <button
                        onClick={handleCancelRide}
                        className="w-full bg-red-50 text-red-600 py-3.5 rounded-xl text-sm font-semibold hover:bg-red-100 transition-colors"
                    >
                        Cancel Ride
                    </button>
                )}
            </div>
        );
    }

    return (
        <div className="absolute top-24 left-4 sm:left-8 z-40 w-full max-w-[420px] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 overflow-visible pointer-events-auto animate-fade-in-up">

            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to?</h2>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-600 text-xs rounded-xl border border-red-100">
                        {error}
                    </div>
                )}

                <div className="relative flex flex-col gap-3">

                    <div className="absolute left-[11px] top-6 bottom-6 w-0.5 bg-gray-100 z-0"></div>

                    <div className="relative z-10 flex items-center gap-4 group">
                        <div className="w-6 flex justify-center">
                            <div className="w-2.5 h-2.5 bg-black rounded-full shadow-[0_0_0_4px_white]"></div>
                        </div>
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Current Location"
                                value={pickupQuery}
                                onFocus={() => setActiveInput('pickup')}
                                onChange={(e) => setPickupQuery(e.target.value)}
                                className="w-full bg-gray-50 px-4 py-3 rounded-xl text-sm font-medium text-gray-900 border border-transparent focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                            />
                            {!pickup && (
                                <button
                                    onClick={handleGetCurrentLocation}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-600 hover:text-blue-700"
                                >
                                    Current
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="relative z-10 flex items-center gap-4 group">
                        <div className="w-6 flex justify-center">
                            <div className="w-2.5 h-2.5 bg-[#FFCC00] rounded-sm shadow-[0_0_0_4px_white]"></div>
                        </div>
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Search destination..."
                                value={destQuery}
                                onFocus={() => setActiveInput('destination')}
                                onChange={(e) => setDestQuery(e.target.value)}
                                className="w-full bg-gray-100 px-4 py-3 rounded-xl text-sm font-medium text-gray-900 border border-transparent hover:bg-gray-200 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                            />
                        </div>
                    </div>

                    {suggestions.length > 0 && activeInput && (
                        <div className="absolute top-full left-10 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 max-h-60 overflow-y-auto">
                            {suggestions.map((s) => (
                                <button
                                    key={s.place_id}
                                    onClick={() => handleSelectSuggestion(s)}
                                    className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors"
                                >
                                    <p className="font-semibold text-gray-900 truncate">{s.display_name.split(',')[0]}</p>
                                    <p className="text-gray-500 text-xs truncate">{s.display_name}</p>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <button
                    disabled={!pickup || !destination || loading}
                    onClick={handleRequestRide}
                    className="w-full mt-6 bg-black text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {loading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
                    {loading ? 'Requesting...' : 'Find Ride'}
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
