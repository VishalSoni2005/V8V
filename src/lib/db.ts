/**
 *@Prisma singleton for Next.js
 * We attach PrismaClient to the global object to prevent creating
 * multiple instances during hot reloads in development, which can
 * exhaust database connections.
 */
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
