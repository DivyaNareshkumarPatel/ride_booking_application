import { Injectable, Inject } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class LocationService {
    constructor(@Inject('REDIS_CLIENT') private readonly redis: Redis) { }

    private readonly DRIVER_LOC_KEY = 'drivers:locations';

    async updateDriverLocation(driverId: string, lat: number, lng: number) {
        await this.redis.geoadd(this.DRIVER_LOC_KEY, lng, lat, driverId);
    }

    async findNearbyDrivers(lat: number, lng: number, radiusKm: number = 5) {
        return await this.redis.geosearch(
            this.DRIVER_LOC_KEY,
            'FROMLONLAT', lng, lat,
            'BYRADIUS', radiusKm, 'km',
            'WITHDIST',
            'ASC'
        );
    }

    async removeDriverLocation(driverId: string) {
        await this.redis.zrem(this.DRIVER_LOC_KEY, driverId);
    }
}