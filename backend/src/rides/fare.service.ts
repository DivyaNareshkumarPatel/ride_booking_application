import { Injectable } from '@nestjs/common';

@Injectable()
export class FareService {
    private readonly BASE_FARE = 50;
    private readonly PER_KM_RATE = 12;

    calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
        const R = 6371;
        const dLat = this.deg2rad(lat2 - lat1);
        const dLon = this.deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    private deg2rad(deg: number): number {
        return deg * (Math.PI / 180);
    }

    calculateFare(distanceKm: number, surgeMultiplier: number = 1.0): number {
        const calculatedFare = this.BASE_FARE + (distanceKm * this.PER_KM_RATE);
        return Math.round((calculatedFare * surgeMultiplier) * 100) / 100;
    }
}