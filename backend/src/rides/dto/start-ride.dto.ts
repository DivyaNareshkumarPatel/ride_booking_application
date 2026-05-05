import { IsString, Length } from 'class-validator';

export class StartRideDto {
    @IsString()
    @Length(4, 4, { message: 'OTP must be exactly 4 digits' })
    otp: string;
}