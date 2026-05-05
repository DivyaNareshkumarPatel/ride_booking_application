import { apiClient } from './apiClient';

export const getActiveRideApi = async () => {
    const { data } = await apiClient.get('/rides/active');
    return data;
};

export const requestRideApi = async (rideData: any) => {
    const { data } = await apiClient.post('/rides/request', rideData);
    return data;
};

export const acceptRideApi = async (rideId: string) => {
    const { data } = await apiClient.post(`/rides/${rideId}/accept`);
    return data;
};

export const arriveRideApi = async (rideId: string) => {
    const { data } = await apiClient.post(`/rides/${rideId}/arrive`);
    return data;
};

export const startRideApi = async (rideId: string, otp: string) => {
    const { data } = await apiClient.post(`/rides/${rideId}/start`, { otp });
    return data;
};

export const completeRideApi = async (rideId: string) => {
    const { data } = await apiClient.post(`/rides/${rideId}/complete`);
    return data;
};

export const cancelRideApi = async (rideId: string) => {
    const { data } = await apiClient.post(`/rides/${rideId}/cancel`);
    return data;
};
