import { PrismaClient } from "@prisma/client";

const InitPrismaClient = () => {
    return new PrismaClient();
}

declare global{
    var prisma:ReturnType<typeof InitPrismaClient> | undefined 
}

export const prisma = globalThis.prisma ?? InitPrismaClient();

if (process.env.NODE_ENV != "production") {
    globalThis.prisma = prisma
}