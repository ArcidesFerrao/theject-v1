import "dotenv/config"
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL || "",
})
// Evita criar múltiplas instâncias do PrismaClient em dev (hot reload do Next.js)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =  globalForPrisma.prisma ??
  new PrismaClient({adapter});

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}

