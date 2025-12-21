/**
 *@Prisma singleton for Next.js
 * We attach PrismaClient to the global object to prevent creating
 * multiple instances during hot reloads in development, which can
 * exhaust database connections.
 */

import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient({} as any);

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
