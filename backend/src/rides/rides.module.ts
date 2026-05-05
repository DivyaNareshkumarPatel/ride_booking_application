import { Module } from '@nestjs/common';
import { RidesController } from './rides.controller';
import { RidesService } from './rides.service';
import { FareService } from './fare.service';
import { RidesGateway } from './rides.gateway';
import { LocationModule } from '../location/location.module';

@Module({
  imports: [LocationModule],
  controllers: [RidesController],
  providers: [RidesService, FareService, RidesGateway],
})
export class RidesModule { }