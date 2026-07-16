import bcrypt from "bcryptjs";
import { db } from "@/lib/prisma";

async function seedAdmin() {
  const adminEmail = "admin@theject.mz";
  const adminPassword = "evolurelabs25";

  const existente = await db.user.findUnique({ where: { email: adminEmail } });
  if (existente) {
    console.log("Admin já existe, a saltar.");
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

async function seedFounderComProjectosVerificados() {
  const founderEmail = "founder@theject.mz";
  const founderPassword = "founder2025";

  let founder = await db.user.findUnique({ where: { email: founderEmail } });

  if (!founder) {
    const passwordHash = await bcrypt.hash(founderPassword, 12);
    founder = await db.user.create({
      data: {
        name: "Amélia Machava",
        email: founderEmail,
        passwordHash,
        role: "founder",
        kycStatus: "aprovado",
        telefone: "+258 84 123 4567",
      },
    });
    console.log(`Founder criado: ${founderEmail} / ${founderPassword}`);
  } else {
    console.log("Founder já existe, a saltar criação de utilizador.");
  }

  const projectosVerificados = [
    {
      seccao: "em_alta" as const,
      titulo: "Kudumba Foods",
      descricao:
        "Produção e distribuição de snacks à base de amendoim e castanha de caju, vendidos em mais de 40 pontos de venda em Maputo e Matola.",
      categoria: "Alimentação",
      sector: "Agroindústria",
      localizacao: "Maputo",
      nivelVerificacao: "verificado" as const,
      estado: "publicado" as const,
    },
    {
      seccao: "em_funcionamento" as const,
      titulo: "Mova Logística",
      descricao:
        "Serviço de entregas last-mile para lojas online e restaurantes na cidade de Maputo, com frota própria de motociclos.",
      categoria: "Logística",
      sector: "Transportes",
      localizacao: "Maputo",
      nivelVerificacao: "verificado" as const,
      estado: "publicado" as const,
    },
  ];

  for (const dados of projectosVerificados) {
    const existente = await db.project.findFirst({
      where: { titulo: dados.titulo, ownerId: founder.id },
    });
    if (existente) {
      console.log(`Projecto "${dados.titulo}" já existe, a saltar.`);
      continue;
    }

    await db.project.create({
      data: { ...dados, ownerId: founder.id },
    });
    console.log(`Projecto verificado criado: ${dados.titulo}`);
  }
}

async function main() {
  await seedAdmin();
  await seedFounderComProjectosVerificados();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
