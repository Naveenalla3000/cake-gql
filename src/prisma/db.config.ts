import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const connectDb = async () => {
    await prisma.$connect();
    console.log('Database connected');
};

const disconnectDb = async () => {
    await prisma.$disconnect();
    console.log('Database disconnected');
};

export { prisma, connectDb, disconnectDb };
