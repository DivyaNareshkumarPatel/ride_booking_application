import { Controller, Post } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
    constructor(private readonly locationService: LocationService) { }

    @Post('seed-dummy-drivers')
    async seedDrivers() {
        const drivers = [
            { id: 'd61a62da-c40d-43d5-9d39-353ae5fb205f', lat: 23.1950, lng: 72.6300 },
            { id: '22222222-2222-4222-8222-222222222222', lat: 23.2000, lng: 72.6350 },
            { id: '33333333-3333-4333-8333-333333333333', lat: 23.2156, lng: 72.6369 },
            { id: '44444444-4444-4444-8444-444444444444', lat: 23.0225, lng: 72.5714 }
        ];

        for (const driver of drivers) {
            await this.locationService.updateDriverLocation(driver.id, driver.lat, driver.lng);
        }

        return {
            message: 'Dummy drivers injected into Redis successfully!',
            inserted: drivers.length
        };
    }
}