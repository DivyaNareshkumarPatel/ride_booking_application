import { create } from 'zustand';

export type RideStatus = 'idle' | 'requested' | 'accepted' | 'arrived' | 'ongoing' | 'completed' | 'cancelled';

interface RideState {
    rideId: string | null;
    status: RideStatus;
    pickup: { address: string, coords: [number, number] } | null;
    destination: { address: string, coords: [number, number] } | null;
    otp: string | null;
    estimatedFare: number | null;
    driverName: string | null;
    riderName: string | null;
    driverLocation: [number, number] | null;
    
    // Driver side
    incomingRequest: any | null;

    setPickup: (pickup: { address: string, coords: [number, number] } | null) => void;
    setDestination: (destination: { address: string, coords: [number, number] } | null) => void;
    setRideId: (id: string | null) => void;
    setStatus: (status: RideStatus) => void;
    setOtp: (otp: string | null) => void;
    setEstimatedFare: (fare: number | null) => void;
    setIncomingRequest: (request: any | null) => void;
    setDriverName: (name: string | null) => void;
    setRiderName: (name: string | null) => void;
    setDriverLocation: (location: [number, number] | null) => void;
    initializeRide: (data: any) => void;
    resetRide: () => void;
}

export const useRideStore = create<RideState>((set) => ({
    rideId: null,
    status: 'idle',
    pickup: null,
    destination: null,
    otp: null,
    estimatedFare: null,
    incomingRequest: null,
    driverName: null,
    riderName: null,
    driverLocation: null,

    setPickup: (pickup) => set({ pickup }),
    setDestination: (destination) => set({ destination }),
    setRideId: (rideId) => set({ rideId }),
    setStatus: (status) => set({ status }),
    setOtp: (otp) => set({ otp }),
    setEstimatedFare: (estimatedFare) => set({ estimatedFare }),
    setIncomingRequest: (incomingRequest) => set({ incomingRequest }),
    setDriverName: (driverName) => set({ driverName }),
    setRiderName: (riderName) => set({ riderName }),
    setDriverLocation: (driverLocation) => set({ driverLocation }),
    initializeRide: (data) => set({
        rideId: data.id,
        status: data.status,
        pickup: data.pickup,
        destination: data.destination,
        otp: data.otp,
        estimatedFare: data.estimated_fare,
        driverName: data.driverName,
        riderName: data.riderName
    }),
    resetRide: () => set({
        rideId: null,
        status: 'idle',
        pickup: null,
        destination: null,
        otp: null,
        estimatedFare: null,
        incomingRequest: null,
        driverName: null,
        riderName: null,
        driverLocation: null
    }),
}));
