'use client';

import React, { createContext, useContext, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { useAuthStore } from '@/store/useAuthStore';
import { useRideStore, RideStatus } from '@/store/useRideStore';

const SocketContext = createContext<Socket | null>(null);

export const useSocket = () => useContext(SocketContext);

export function SocketProvider({ children }: { children: React.ReactNode }) {
    const { token, userId, role } = useAuthStore();
    const { setStatus, setOtp, setIncomingRequest, setRideId, setDriverName, setRiderName, setDriverLocation } = useRideStore();
    const socketRef = useRef<Socket | null>(null);

    useEffect(() => {
        if (token && userId && !socketRef.current) {
            const socket = io(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000', {
                query: { userId, role },
                auth: { token }
            });

            socket.on('connect', () => {
                console.log('Socket connected:', socket.id);
            });

            socket.on('newRideRequest', (data) => {
                console.log('New ride request received:', data);
                setIncomingRequest(data);
            });

            socket.on('rideUpdate', (data) => {
                console.log('Ride update received:', data);
                if (data.status) setStatus(data.status as RideStatus);
                if (data.otp) setOtp(data.otp);
                if (data.rideId) setRideId(data.rideId);
                if (data.driverName) setDriverName(data.driverName);
                if (data.riderName) setRiderName(data.riderName);
            });

            socket.on('driverLocationUpdate', (data) => {
                console.log('Driver location update:', data);
                setDriverLocation([data.lat, data.lng]);
            });

            socketRef.current = socket;
        }

        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
                socketRef.current = null;
            }
        };
    }, [token, userId, role, setStatus, setOtp, setIncomingRequest, setRideId, setDriverName, setRiderName, setDriverLocation]);

    return (
        <SocketContext.Provider value={socketRef.current}>
            {children}
        </SocketContext.Provider>
    );
}
