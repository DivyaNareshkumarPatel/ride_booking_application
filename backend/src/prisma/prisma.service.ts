import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        const connectionString = process.env.DATABASE_URL;
        if (!connectionString) {
            throw new Error('DATABASE_URL environment variable is not set');
        }
        console.log('🔌 Connecting to DB with URL:', connectionString);
        const pool = new Pool({
            connectionString,
            ssl: {
                rejectUnauthorized: false,
            },
        });
        const adapter = new PrismaPg(pool);
        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
        console.log('📦 Successfully connected to PostgreSQL via Prisma 7 Adapter');
    }
}