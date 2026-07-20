import Link from "next/link";
import { db } from "@/lib/prisma";
import { SECCOES } from "@/lib/seccoes";
import { ProjectCard } from "@/components/ProjectCard";

const DESTAQUES_POR_SECCAO = 3;

export default async function HomePage() {
  const seccoesComProjectos = await Promise.all(
    SECCOES.map(async (seccao) => {
      const projectos = await db.project.findMany({
        where: { seccao: seccao.slug, estado: "publicado" },
        include: { owner: { select: { name: true } } },
        orderBy: { criadoEm: "desc" },
        take: DESTAQUES_POR_SECCAO,
      });
      return { ...seccao, projectos };
    })
  );

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold">TheJect</h1>
        <p className="mt-1 text-gray-600">
          O jornal de negócios digitais de Moçambique — lançamentos, ideias e empresas em
          destaque.
        </p>
      </header>

      <div className="flex flex-col gap-12">
        {seccoesComProjectos.map((seccao) => (
          <section key={seccao.slug}>
            <div className="mb-4 flex items-end justify-between">
              <div>
                <h2 className="text-xl font-semibold">{seccao.label}</h2>
                <p className="text-sm text-gray-500">{seccao.descricao}</p>
              </div>
              <Link
                href={`/seccao/${seccao.slug}`}
                className="text-sm font-medium text-[#1D9E75]"
              >
                Ver tudo →
              </Link>
            </div>

            {seccao.projectos.length === 0 ? (
              <p className="text-sm text-gray-400">Ainda sem publicações nesta secção.</p>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {seccao.projectos.map((projecto) => (
                  <ProjectCard key={projecto.id} projecto={projecto} />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
