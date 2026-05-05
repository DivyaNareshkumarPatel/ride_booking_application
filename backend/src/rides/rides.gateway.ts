import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { LocationService } from '../location/location.service';

@WebSocketGateway({ cors: { origin: '*' } })
export class RidesGateway {
    @WebSocketServer()
    server: Server;

    constructor(private readonly locationService: LocationService) { }

    @SubscribeMessage('updateLocation')
    async handleLocationUpdate(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { lat: number, lng: number }
    ) {
        const userId = client.handshake.query.userId as string;
        const role = client.handshake.query.role as string;

        if (role === 'driver' && userId) {
            await this.locationService.updateDriverLocation(userId, data.lat, data.lng);
        }
    }

    notifyDriver(driverId: string, rideData: any) {
        this.server.to(driverId).emit('newRideRequest', rideData);
    }

    notifyRider(riderId: string, eventData: any) {
        this.server.to(riderId).emit('rideUpdate', eventData);
    }
}