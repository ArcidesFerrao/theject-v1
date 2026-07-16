// import { PrismaClient } from "@/generated/prisma/client";
import bcrypt from "bcryptjs";
import { db } from "@/lib/prisma";
// const prisma = new PrismaClient();

async function main() {
  const adminEmail = "admin@thejeect.mz";
  const adminPassword = "Admin12345!"; // trocar depois do primeiro login

  const existente = await db.user.findUnique({ where: { email: adminEmail } });
  if (existente) {
    console.log("Admin já existe, a saltar seed.");
    return;
  }

  const passwordHash = await bcrypt.hash(adminPassword, 12);

  await db.user.create({
    data: {
      name: "Admin TheJect",
      email: adminEmail,
      passwordHash,
      role: "admin",
      kycStatus: "aprovado",
    },
  });

  console.log(`Admin criado: ${adminEmail} / ${adminPassword}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
