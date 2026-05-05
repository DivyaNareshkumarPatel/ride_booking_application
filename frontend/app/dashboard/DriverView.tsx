'use client';

import { useState, useEffect } from 'react';
import { useRideStore } from '@/store/useRideStore';
import { useSocket } from '@/context/SocketProvider';
import { acceptRideApi, arriveRideApi, startRideApi, completeRideApi, cancelRideApi } from '@/api/rides.api';

export function DriverView() {
    const [isOnline, setIsOnline] = useState(false);
    const [otpInput, setOtpInput] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const socket = useSocket();
    const { 
        incomingRequest, status, rideId, riderName,
        setIncomingRequest, setStatus, setRideId, resetRide 
    } = useRideStore();

    // Location update effect
    useEffect(() => {
        let watchId: number;
        if (isOnline && socket) {
            if ("geolocation" in navigator) {
                // Get initial position immediately
                navigator.geolocation.getCurrentPosition((pos) => {
                    socket.emit('updateLocation', {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                    });
                }, (err) => console.warn('Initial geolocation error:', err.message));

                watchId = navigator.geolocation.watchPosition((pos) => {
                    socket.emit('updateLocation', {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                    });
                }, (err) => {
                    console.warn('Geolocation watch error:', err.message);
                }, {
                    enableHighAccuracy: true,
                    maximumAge: 0,
                    timeout: 5000
                });
            }
        }
        return () => {
            if (watchId) navigator.geolocation.clearWatch(watchId);
        };
    }, [isOnline, socket]);

    const handleAccept = async () => {
        if (!incomingRequest) return;
        setLoading(true);
        try {
            await acceptRideApi(incomingRequest.rideId);
            setRideId(incomingRequest.rideId);
            setStatus('accepted');
            setIncomingRequest(null);
        } catch (err: any) {
            setError(err.message || 'Failed to accept ride');
        } finally {
            setLoading(false);
        }
    };

    const handleArrive = async () => {
        if (!rideId) return;
        try {
            await arriveRideApi(rideId);
            setStatus('arrived');
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleStartRide = async () => {
        if (!rideId || !otpInput) return;
        try {
            await startRideApi(rideId, otpInput);
            setStatus('ongoing');
            setOtpInput('');
            setError(null);
        } catch (err: any) {
            setError(err.message || 'Invalid OTP');
        }
    };

    const handleComplete = async () => {
        if (!rideId) return;
        try {
            await completeRideApi(rideId);
            resetRide();
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleCancel = async () => {
        if (!rideId) return;
        try {
            await cancelRideApi(rideId);
            resetRide();
        } catch (err: any) {
            setError(err.message);
        }
    };

    // Incoming Request Modal/Overlay
    if (incomingRequest && status === 'idle') {
        return (
            <div className="absolute inset-x-0 bottom-8 z-50 flex justify-center px-4">
                <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl border-4 border-[#FFCC00] p-6 animate-bounce-short">
                    <div className="flex justify-between items-center mb-4">
                        <span className="bg-black text-[#FFCC00] px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">New Request</span>
                        <span className="text-xl font-bold text-green-600">₹{incomingRequest.estimatedFare}</span>
                    </div>
                    <div className="space-y-3 mb-6">
                        <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">From</p>
                            <p className="text-sm font-semibold text-gray-800 truncate">{incomingRequest.pickup_address}</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">To</p>
                            <p className="text-sm font-semibold text-gray-800 truncate">{incomingRequest.dropoff_address}</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button 
                            onClick={() => setIncomingRequest(null)}
                            className="flex-1 py-3 text-sm font-bold text-gray-500 hover:bg-gray-100 rounded-xl transition-colors"
                        >
                            Decline
                        </button>
                        <button 
                            onClick={handleAccept}
                            disabled={loading}
                            className="flex-[2] bg-black text-white py-3 rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-black/20"
                        >
                            {loading ? 'Accepting...' : 'ACCEPT RIDE'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Active Ride View
    if (status !== 'idle' && status !== 'cancelled') {
        return (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-sm px-4 pointer-events-auto">
                <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100">
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-900 capitalize">
                            {status === 'ongoing' ? 'Ride Started' : status.replace('_', ' ')}
                        </h2>
                        <p className="text-sm text-gray-500 font-medium">
                            {status === 'accepted' && `Drive to ${riderName || 'Rider'}'s location`}
                            {status === 'arrived' && `Ask ${riderName || 'Rider'} for OTP`}
                            {status === 'ongoing' && `Driving ${riderName || 'Rider'} to destination`}
                        </p>
                    </div>

                    {error && <p className="text-red-500 text-xs mb-4 bg-red-50 p-2 rounded-lg">{error}</p>}

                    {status === 'accepted' && (
                        <button onClick={handleArrive} className="w-full bg-black text-white py-4 rounded-2xl text-lg font-bold hover:bg-gray-800 transition-all">
                            I HAVE ARRIVED
                        </button>
                    )}

                    {status === 'arrived' && (
                        <div className="space-y-4">
                            <input 
                                type="text"
                                placeholder="Enter OTP"
                                value={otpInput}
                                onChange={(e) => setOtpInput(e.target.value)}
                                className="w-full bg-gray-50 px-4 py-4 rounded-2xl text-center text-2xl font-black tracking-[0.5em] border-2 border-gray-100 focus:border-[#FFCC00] outline-none"
                            />
                            <button onClick={handleStartRide} className="w-full bg-[#FFCC00] text-black py-4 rounded-2xl text-lg font-bold hover:bg-[#e6b800] transition-all">
                                VERIFY & START TRIP
                            </button>
                        </div>
                    )}

                    {status === 'ongoing' && (
                        <button onClick={handleComplete} className="w-full bg-green-600 text-white py-4 rounded-2xl text-lg font-bold hover:bg-green-700 transition-all">
                            COMPLETE TRIP
                        </button>
                    )}

                    <button onClick={handleCancel} className="w-full mt-4 text-gray-400 text-sm font-semibold hover:text-red-500">
                        Cancel Trip
                    </button>
                </div>
            </div>
        );
    }

    const toggleOnline = () => {
        const newOnline = !isOnline;
        setIsOnline(newOnline);
        if (!newOnline && socket) {
            socket.emit('goOffline');
        }
    };

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
                    onClick={toggleOnline}
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
