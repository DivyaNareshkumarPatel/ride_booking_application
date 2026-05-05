import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { LocationService } from '../location/location.service';
import { PrismaService } from '../prisma/prisma.service';

@WebSocketGateway({ cors: { origin: '*' } })
export class RidesGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    constructor(
        private readonly locationService: LocationService,
        private readonly prisma: PrismaService,
    ) { }

    private getClientData(client: Socket) {
        const query = client.handshake.query;
        const auth = client.handshake.auth;

        const userId = (query.userId || auth.userId) as string | string[];
        const role = (query.role || auth.role) as string | string[];

        return {
            userId: Array.isArray(userId) ? userId[0] : userId,
            role: Array.isArray(role) ? role[0] : role,
        };
    }

    handleConnection(client: Socket) {
        const { userId } = this.getClientData(client);
        if (userId) {
            client.join(userId);
            console.log(`User ${userId} joined room ${userId}`);
        }
    }

    async handleDisconnect(client: Socket) {
        const { userId, role } = this.getClientData(client);

        if (role === 'driver' && userId) {
            await this.locationService.removeDriverLocation(userId);
            console.log(`Driver ${userId} disconnected and removed from locations`);
        }
    }

    @SubscribeMessage('goOffline')
    async handleGoOffline(@ConnectedSocket() client: Socket) {
        const { userId, role } = this.getClientData(client);
        if (role === 'driver' && userId) {
            await this.locationService.removeDriverLocation(userId);
            console.log(`Driver ${userId} went offline manually`);
        }
    }

    @SubscribeMessage('updateLocation')
    async handleLocationUpdate(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { lat: number, lng: number }
    ) {
        const { userId, role } = this.getClientData(client);

        if (role === 'driver' && userId) {
            await this.locationService.updateDriverLocation(userId, data.lat, data.lng);

            // 1. Check if driver is on an active ride
            const activeRides: any = await this.prisma.$queryRaw`
                SELECT rider_id FROM rides 
                WHERE driver_id = CAST(${userId} AS UUID) 
                AND status IN ('accepted', 'arrived', 'ongoing')
                LIMIT 1
            `;
            
            if (activeRides.length > 0) {
                this.server.to(activeRides[0].rider_id).emit('driverLocationUpdate', {
                    lat: data.lat,
                    lng: data.lng
                });
            } else {
                // 2. If not on a ride, check for any "requested" rides nearby (within 50km)
                // We only do this if the driver doesn't have an incoming request already shown
                // or we can just send it and let the frontend handle it.
                const pendingRides: any = await this.prisma.$queryRaw`
                    SELECT id, pickup_address, dropoff_address, estimated_fare,
                    ST_Distance(pickup_location, ST_SetSRID(ST_MakePoint(${data.lng}, ${data.lat}), 4326)::geography) as distance
                    FROM rides
                    WHERE status = 'requested'
                    AND ST_DWithin(pickup_location, ST_SetSRID(ST_MakePoint(${data.lng}, ${data.lat}), 4326)::geography, 50000)
                    ORDER BY distance ASC
                    LIMIT 1
                `;

                if (pendingRides.length > 0) {
                    const ride = pendingRides[0];
                    this.notifyDriver(userId, {
                        rideId: ride.id,
                        pickup_address: ride.pickup_address,
                        dropoff_address: ride.dropoff_address,
                        estimatedFare: ride.estimated_fare,
                        distanceToPickup: ride.distance
                    });
                }
            }
        }
    }

    notifyDriver(driverId: string, rideData: any) {
        this.server.to(driverId).emit('newRideRequest', rideData);
    }

    notifyRider(riderId: string, eventData: any) {
        this.server.to(riderId).emit('rideUpdate', eventData);
    }
}