import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) { }

    async register(data: RegisterDto) {
        const existingUser = await this.prisma.users.findFirst({
            where: {
                OR: [{ email: data.email }, { phone_number: data.phone_number }],
            },
        });

        if (existingUser) {
            throw new ConflictException('Email or phone number already in use');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);

        const user = await this.prisma.$transaction(async (tx) => {
            const newUser = await tx.users.create({
                data: {
                    full_name: data.full_name,
                    email: data.email,
                    phone_number: data.phone_number,
                    password_hash: hashedPassword,
                    role: data.role,
                },
            });

            if (newUser.role === 'driver') {
                await tx.drivers.create({
                    data: { id: newUser.id },
                });
            }

            return newUser;
        });
        return this.generateToken(user.id, user.role as string);
    }

    async login(data: LoginDto) {
        const user = await this.prisma.users.findUnique({
            where: { email: data.email },
        });

        if (!user) throw new UnauthorizedException('Invalid credentials');

        const isPasswordValid = await bcrypt.compare(data.password, user.password_hash);
        if (!isPasswordValid) throw new UnauthorizedException('Invalid credentials');
        return this.generateToken(user.id, user.role as string);
    }

    private generateToken(userId: string, role: string) {
        const payload = { sub: userId, role };
        return {
            access_token: this.jwtService.sign(payload),
            user: { id: userId, role },
        };
    }
}