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

    async findPendingRidesNearLocation(lat: number, lng: number, radiusKm: number = 50) {
        const rides: any = await this.prisma.$queryRaw`
            SELECT id, pickup_address, dropoff_address, estimated_fare, 
            ST_Distance(pickup_location, ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326)::geography) as distance
            FROM rides
            WHERE status = 'requested'
            AND ST_DWithin(pickup_location, ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326)::geography, ${radiusKm * 1000})
            ORDER BY distance ASC
            LIMIT 5
        `;
        return rides;
    }

    async findActiveRideByDriver(driverId: string) {
        const rides: any = await this.prisma.$queryRaw`
            SELECT id, rider_id, status FROM rides 
            WHERE driver_id = CAST(${driverId} AS UUID) 
            AND status IN ('accepted', 'arrived', 'ongoing')
            LIMIT 1
        `;
        return rides.length > 0 ? rides[0] : null;
    }

    async getActiveRide(userId: string, role: string) {
        const query = role === 'rider'
            ? this.prisma.$queryRaw`
                SELECT r.id, r.status, r.rider_id, r.driver_id, r.otp, r.estimated_fare, r.pickup_address, r.dropoff_address,
                ST_X(r.pickup_location::geometry) AS pickup_lng, ST_Y(r.pickup_location::geometry) AS pickup_lat,
                ST_X(r.dropoff_location::geometry) AS dropoff_lng, ST_Y(r.dropoff_location::geometry) AS dropoff_lat,
                u.full_name as driver_name
                FROM rides r
                LEFT JOIN users u ON r.driver_id = u.id
                WHERE r.rider_id = CAST(${userId} AS UUID) 
                AND r.status NOT IN ('completed', 'cancelled')
                ORDER BY r.requested_at DESC LIMIT 1`
            : this.prisma.$queryRaw`
                SELECT r.id, r.status, r.rider_id, r.driver_id, r.otp, r.estimated_fare, r.pickup_address, r.dropoff_address,
                ST_X(r.pickup_location::geometry) AS pickup_lng, ST_Y(r.pickup_location::geometry) AS pickup_lat,
                ST_X(r.dropoff_location::geometry) AS dropoff_lng, ST_Y(r.dropoff_location::geometry) AS dropoff_lat,
                u.full_name as rider_name
                FROM rides r
                LEFT JOIN users u ON r.rider_id = u.id
                WHERE r.driver_id = CAST(${userId} AS UUID) 
                AND r.status NOT IN ('completed', 'cancelled')
                ORDER BY r.requested_at DESC LIMIT 1`;

        const rides: any = await query;
        if (rides.length === 0) return null;

        const ride = rides[0];
        return {
            ...ride,
            pickup: {
                address: ride.pickup_address,
                coords: [ride.pickup_lat, ride.pickup_lng]
            },
            destination: {
                address: ride.dropoff_address,
                coords: [ride.dropoff_lat, ride.dropoff_lng]
            },
            driverName: ride.driver_name,
            riderName: ride.rider_name
        };
    }

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
        ST_SetSRID(ST_MakePoint(${dto.pickup_lng}, ${dto.pickup_lat}), 4326)::geography,
        ST_SetSRID(ST_MakePoint(${dto.dropoff_lng}, ${dto.dropoff_lat}), 4326)::geography,
        ${otp}
      ) RETURNING id, status, estimated_fare;
    `;
        const newRideId = ride[0].id;

        const nearbyDrivers: any[] = await this.locationService.findNearbyDrivers(
            dto.pickup_lat,
            dto.pickup_lng,
            50 // Increased to 50km for better reliability during testing
        );

        if (nearbyDrivers.length === 0) {
            await this.prisma.$executeRaw`UPDATE rides SET status = 'cancelled' WHERE id = CAST(${newRideId} AS UUID)`;
            throw new NotFoundException('No drivers available in your area right now.');
        }

        // Filter and ping up to 10 drivers who are NOT on an active ride
        let pingedCount = 0;
        for (const driverData of nearbyDrivers) {
            if (pingedCount >= 10) break;

            try {
                const driverId = typeof driverData[0] === 'string' ? driverData[0] : driverData[0].toString();
                
                // Check if driver is already on a ride
                const activeRide = await this.findActiveRideByDriver(driverId);
                if (activeRide) {
                    console.log(`Driver ${driverId} is already on an active ride, skipping.`);
                    continue;
                }

                this.gateway.notifyDriver(driverId, {
                    rideId: newRideId,
                    pickup_address: dto.pickup_address,
                    dropoff_address: dto.dropoff_address,
                    estimatedFare: estimatedFare,
                    distanceToPickup: driverData[1]
                });
                pingedCount++;
            } catch (err) {
                console.error(`Error processing driver ${driverData[0]}:`, err);
                continue;
            }
        }

        if (pingedCount === 0) {
            await this.prisma.$executeRaw`UPDATE rides SET status = 'cancelled' WHERE id = CAST(${newRideId} AS UUID)`;
            throw new NotFoundException('All nearby drivers are currently busy.');
        }

        return {
            message: 'Ride requested successfully. Searching for drivers...',
            rideId: newRideId,
            estimatedFare,
            driversPinged: pingedCount
        };
    }

    async acceptRide(driverId: string, rideId: string) {
        const affectedRows = await this.prisma.$executeRaw`
      UPDATE rides 
      SET driver_id = CAST(${driverId} AS UUID), 
          status = 'accepted',
          accepted_at = NOW()
      WHERE id = CAST(${rideId} AS UUID) 
        AND status = 'requested';
    `;

        if (affectedRows === 0) {
            throw new ConflictException('Ride is no longer available.');
        }
        const rideDetails: any = await this.prisma.$queryRaw`
      SELECT r.id, r.rider_id, r.pickup_address, r.dropoff_address, r.estimated_fare, r.otp, u.full_name as driver_name
      FROM rides r
      JOIN users u ON u.id = CAST(${driverId} AS UUID)
      WHERE r.id = CAST(${rideId} AS UUID);
    `;
        const ride = rideDetails[0];

        this.gateway.notifyRider(ride.rider_id, {
            rideId,
            status: 'accepted',
            driverId: driverId,
            driverName: ride.driver_name,
            otp: ride.otp,
            message: 'Your driver is on the way!'
        });

        return { message: 'You have successfully claimed this ride.', rideId };
    }

    async updateRideStatus(rideId: string, driverId: string, newStatus: string) {
        const updated = await this.prisma.$executeRaw`
      UPDATE rides 
      SET status = ${newStatus},
          accepted_at = CASE WHEN ${newStatus} IN ('accepted', 'arrived', 'ongoing', 'completed') AND accepted_at IS NULL THEN NOW() ELSE accepted_at END,
          ended_at = CASE WHEN ${newStatus} = 'completed' THEN NOW() ELSE ended_at END
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
            rideId,
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

        const storedOtp = ride.otp ? ride.otp.toString().trim() : '';
        const inputOtp = otpInput ? otpInput.toString().trim() : '';

        if (!storedOtp || storedOtp !== inputOtp) {
            throw new UnauthorizedException('Invalid OTP. Cannot start ride.');
        }
        await this.prisma.$executeRaw`
      UPDATE rides 
      SET status = 'ongoing', 
          started_at = NOW(),
          accepted_at = CASE WHEN accepted_at IS NULL THEN NOW() ELSE accepted_at END
      WHERE id = CAST(${rideId} AS UUID);
    `;

        this.gateway.notifyRider(ride.rider_id, {
            rideId,
            status: 'ongoing',
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

        if (ride.status === 'ongoing' || ride.status === 'completed' || ride.status === 'cancelled') {
            throw new ConflictException(`Cannot cancel a ride that is ${ride.status}`);
        }
        if (role === 'rider' && ride.rider_id !== userId) throw new UnauthorizedException();
        if (role === 'driver' && ride.driver_id !== userId) throw new UnauthorizedException();

        await this.prisma.$executeRaw`
      UPDATE rides SET status = 'cancelled', cancelled_at = NOW() WHERE id = CAST(${rideId} AS UUID);
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
