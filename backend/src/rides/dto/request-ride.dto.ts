import { IsNumber, IsString, Min, Max, IsNotEmpty } from 'class-validator';

export class RequestRideDto {
    @IsNumber() @Min(-90) @Max(90)
    pickup_lat: number;

    @IsNumber() @Min(-180) @Max(180)
    pickup_lng: number;

    @IsNumber() @Min(-90) @Max(90)
    dropoff_lat: number;

    @IsNumber() @Min(-180) @Max(180)
    dropoff_lng: number;

    @IsString() @IsNotEmpty()
    pickup_address: string;

    @IsString() @IsNotEmpty()
    dropoff_address: string;
}