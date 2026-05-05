import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
    @IsString()
    @IsNotEmpty({ message: "Name must no be empty" })
    @MinLength(3, { message: "Name must be at least 3 character" })
    full_name: string;

    @IsEmail()
    @IsNotEmpty({ message: "Email must not be empty" })
    email: string;

    @IsString({ message: "Phone number must not be empty" })
    @IsNotEmpty({ message: "Phone number must not be empty" })
    phone_number: string;

    @IsString({ message: "Password must be string" })
    @IsNotEmpty({ message: "Password must not be empty" })
    @MinLength(8, { message: 'Password must be at least 8 characters' })
    password: string;

    @IsEnum(['rider', 'driver'], { message: 'Role must be either rider or driver' })
    @IsNotEmpty()
    role: 'rider' | 'driver';
}