import { notFound } from "next/navigation";
import { db } from "@/lib/prisma";
import { SECCOES, seccaoValida } from "@/lib/seccoes";
import { ProjectCard } from "@/components/ProjectCard";

export default async function SeccaoPage({
  params,
}: {
  params: Promise<{ seccao: string }>;
}) {
  const { seccao: slug } = await params;
  if (!seccaoValida(slug)) notFound();

  const seccao = SECCOES.find((s) => s.slug === slug)!;

  const projectos = await db.project.findMany({
    where: { seccao: slug, estado: "publicado" },
    include: { owner: { select: { name: true } } },
    orderBy: { criadoEm: "desc" },
  });

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-2xl font-semibold">{seccao.label}</h1>
      <p className="mt-1 text-gray-600">{seccao.descricao}</p>

      {projectos.length === 0 ? (
        <p className="mt-8 text-sm text-gray-400">Ainda sem publicações nesta secção.</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {projectos.map((projecto) => (
            <ProjectCard key={projecto.id} projecto={projecto} />
          ))}
        </div>
      )}
    </main>
  );
}
