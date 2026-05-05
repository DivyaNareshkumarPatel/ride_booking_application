import { Injectable, NotFoundException, ConflictException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LocationService } from '../location/location.service';
import { FareService } from './fare.service';
import { RidesGateway } from './rides.gateway';
import { RequestRideDto } from './dto/request-ride.dto';

@Injectable()
export class RidesService {
    constructor(
        private prisma: PrismaService,
        private locationService: LocationService,
        private fareService: FareService,
        private gateway: RidesGateway,
    ) { }

    async requestRide(riderId: string, dto: RequestRideDto) {
        const distanceKm = this.fareService.calculateDistance(
            dto.pickup_lat, dto.pickup_lng,
            dto.dropoff_lat, dto.dropoff_lng
        );
        const estimatedFare = this.fareService.calculateFare(distanceKm);
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        const ride: any = await this.prisma.$queryRaw`
      INSERT INTO rides (
        rider_id, status, estimated_fare, pickup_address, dropoff_address, 
        pickup_location, dropoff_location, otp
      ) VALUES (
        CAST(${riderId} AS UUID), 'requested', ${estimatedFare}, ${dto.pickup_address}, ${dto.dropoff_address},
        ST_SetSRID(ST_MakePoint(${dto.pickup_lng}, ${dto.pickup_lat}), 4326),
        ST_SetSRID(ST_MakePoint(${dto.dropoff_lng}, ${dto.dropoff_lat}), 4326),
        ${otp}
      ) RETURNING id, status, estimated_fare;
    `;
        const newRideId = ride[0].id;

        const nearbyDrivers = await this.locationService.findNearbyDrivers(
            dto.pickup_lat,
            dto.pickup_lng,
            5
        );

        if (nearbyDrivers.length === 0) {
            await this.prisma.$queryRaw`UPDATE rides SET status = 'cancelled' WHERE id = CAST(${newRideId} AS UUID)`;
            throw new NotFoundException('No drivers available in your area right now.');
        }

        const topDrivers = nearbyDrivers.slice(0, 3);

        topDrivers.forEach((driverData: any) => {
            const driverId = driverData[0] as string;
            this.gateway.notifyDriver(driverId, {
                rideId: newRideId,
                pickup_address: dto.pickup_address,
                dropoff_address: dto.dropoff_address,
                estimatedFare: estimatedFare,
                distanceToPickup: driverData[1]
            });
        });

        return {
            message: 'Ride requested successfully. Searching for drivers...',
            rideId: newRideId,
            estimatedFare,
            driversPinged: topDrivers.length
        };
    }

    async acceptRide(driverId: string, rideId: string) {
        const affectedRows = await this.prisma.$executeRaw`
      UPDATE rides 
      SET driver_id = CAST(${driverId} AS UUID), 
          status = 'accepted' 
      WHERE id = CAST(${rideId} AS UUID) 
        AND status = 'requested';
    `;

        if (affectedRows === 0) {
            throw new ConflictException('Ride is no longer available.');
        }
        const rideDetails: any = await this.prisma.$queryRaw`
      SELECT id, rider_id, pickup_address, dropoff_address, estimated_fare, otp 
      FROM rides WHERE id = CAST(${rideId} AS UUID);
    `;
        const ride = rideDetails[0];

        this.gateway.notifyRider(ride.rider_id, {
            status: 'accepted',
            driverId: driverId,
            otp: ride.otp,
            message: 'Your driver is on the way!'
        });

        return { message: 'You have successfully claimed this ride.', rideId };
    }
    async updateRideStatus(rideId: string, driverId: string, newStatus: string) {
        const updated = await this.prisma.$executeRaw`
      UPDATE rides 
      SET status = ${newStatus} 
      WHERE id = CAST(${rideId} AS UUID) 
        AND driver_id = CAST(${driverId} AS UUID);
    `;

        if (updated === 0) {
            throw new ConflictException('Unauthorized or invalid ride ID.');
        }

        const ride: any = await this.prisma.$queryRaw`
      SELECT rider_id FROM rides WHERE id = CAST(${rideId} AS UUID);
    `;
        this.gateway.notifyRider(ride[0].rider_id, {
            status: newStatus,
            message: `Ride status updated to: ${newStatus}`,
        });

        return { message: `Ride marked as ${newStatus}` };
    }

    async completeRide(rideId: string, driverId: string) {
        await this.updateRideStatus(rideId, driverId, 'completed');

        const dropoffData: any = await this.prisma.$queryRaw`
      SELECT ST_X(dropoff_location::geometry) AS lng, ST_Y(dropoff_location::geometry) AS lat 
      FROM rides WHERE id = CAST(${rideId} AS UUID);
    `;

        if (dropoffData.length > 0) {
            await this.locationService.updateDriverLocation(
                driverId,
                dropoffData[0].lat,
                dropoffData[0].lng
            );
        }

        return { message: 'Ride completed successfully. You are back online.' };
    }
    async startRideWithOtp(rideId: string, driverId: string, otpInput: string) {
        const rideDetails: any = await this.prisma.$queryRaw`
      SELECT otp, rider_id, status FROM rides 
      WHERE id = CAST(${rideId} AS UUID) AND driver_id = CAST(${driverId} AS UUID);
    `;

        if (rideDetails.length === 0) throw new NotFoundException('Ride not found or unauthorized.');

        const ride = rideDetails[0];

        if (ride.status !== 'arrived' && ride.status !== 'accepted') {
            throw new ConflictException('Ride must be accepted or arrived before starting.');
        }

        if (ride.otp !== otpInput) {
            throw new UnauthorizedException('Invalid OTP. Cannot start ride.');
        }
        await this.prisma.$queryRaw`
      UPDATE rides SET status = 'in_progress' WHERE id = CAST(${rideId} AS UUID);
    `;

        this.gateway.notifyRider(ride.rider_id, {
            status: 'in_progress',
            message: 'OTP Verified. Your ride has started!'
        });

        return { message: 'Ride started successfully.' };
    }

    async cancelRide(rideId: string, userId: string, role: string) {
        const rideDetails: any = await this.prisma.$queryRaw`
      SELECT rider_id, driver_id, status, 
             ST_X(pickup_location::geometry) AS lng, ST_Y(pickup_location::geometry) AS lat
      FROM rides WHERE id = CAST(${rideId} AS UUID);
    `;

        if (rideDetails.length === 0) throw new NotFoundException('Ride not found.');
        const ride = rideDetails[0];

        if (ride.status === 'in_progress' || ride.status === 'completed' || ride.status === 'cancelled') {
            throw new ConflictException(`Cannot cancel a ride that is ${ride.status}`);
        }
        if (role === 'rider' && ride.rider_id !== userId) throw new UnauthorizedException();
        if (role === 'driver' && ride.driver_id !== userId) throw new UnauthorizedException();

        await this.prisma.$queryRaw`
      UPDATE rides SET status = 'cancelled' WHERE id = CAST(${rideId} AS UUID);
    `;

        if (role === 'rider' && ride.driver_id) {
            await this.locationService.updateDriverLocation(ride.driver_id, ride.lat, ride.lng);
            this.gateway.notifyDriver(ride.driver_id, { status: 'cancelled', message: 'The rider cancelled the trip.' });
        }
        else if (role === 'driver') {
            this.gateway.notifyRider(ride.rider_id, { status: 'cancelled', message: 'The driver cancelled the trip. Please request a new ride.' });
        }

        return { message: 'Ride cancelled successfully.' };
    }
}