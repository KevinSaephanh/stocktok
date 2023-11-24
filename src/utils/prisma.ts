import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient = global.prisma || new PrismaClient();
const isProd = process.env.NODE_ENV === 'production';

if (isProd) global.prisma = prisma;
export default prisma;
