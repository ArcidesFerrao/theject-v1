import Link from "next/link";
import type { Project } from "@/generated/prisma/client";

type ProjectoComDono = Project & {
  owner: { name: string | null };
};

export function ProjectCard({ projecto }: { projecto: ProjectoComDono }) {
  return (
    <Link
      href={`/projectos/${projecto.id}`}
      className="block rounded border p-4 transition hover:border-[#1D9E75]"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium uppercase text-gray-400">
          {projecto.categoria}
        </span>
        {projecto.nivelVerificacao === "verificado" && (
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
            Verificado
          </span>
        )}
      </div>

      <h3 className="mt-1 font-semibold">{projecto.titulo}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-gray-600">{projecto.descricao}</p>

      <p className="mt-3 text-xs text-gray-400">
        {projecto.owner.name ?? "Fundador"} · {projecto.localizacao}
      </p>
    </Link>
  );
}
