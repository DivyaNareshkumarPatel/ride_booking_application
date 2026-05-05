import { Controller, Post, Body, UseGuards, Request, Param, UnauthorizedException } from '@nestjs/common';
import { RidesService } from './rides.service';
import { RequestRideDto } from './dto/request-ride.dto';
import { AuthGuard } from '../auth/auth.guard';
import { StartRideDto } from './dto/start-ride.dto';

@Controller('rides')
export class RidesController {
    constructor(private readonly ridesService: RidesService) { }

    @UseGuards(AuthGuard)
    @Post('request')
    async requestRide(@Request() req, @Body() dto: RequestRideDto) {
        const riderId = req.user.sub;
        return this.ridesService.requestRide(riderId, dto);
    }

    @UseGuards(AuthGuard)
    @Post(':id/accept')
    async acceptRide(@Request() req, @Param('id') rideId: string) {
        const driverId = req.user.sub;

        if (req.user.role !== 'driver') {
            throw new UnauthorizedException('Only drivers can accept rides.');
        }

        return this.ridesService.acceptRide(driverId, rideId);
    }

    @UseGuards(AuthGuard)
    @Post(':id/arrive')
    async driverArrived(@Request() req, @Param('id') rideId: string) {
        return this.ridesService.updateRideStatus(rideId, req.user.sub, 'arrived');
    }


    @UseGuards(AuthGuard)
    @Post(':id/complete')
    async completeRide(@Request() req, @Param('id') rideId: string) {
        return this.ridesService.completeRide(rideId, req.user.sub);
    }

    @UseGuards(AuthGuard)
    @Post(':id/start')
    async startRide(@Request() req, @Param('id') rideId: string, @Body() dto: StartRideDto) {
        return this.ridesService.startRideWithOtp(rideId, req.user.sub, dto.otp);
    }

    @UseGuards(AuthGuard)
    @Post(':id/cancel')
    async cancelRide(@Request() req, @Param('id') rideId: string) {
        return this.ridesService.cancelRide(rideId, req.user.sub, req.user.role);
    }
}