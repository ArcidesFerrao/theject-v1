import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { db } from "@/lib/prisma";
import { BloqueioKyc } from "@/components/BloqueioKyc";
import { FormularioEmAlta } from "@/components/FormularioEmAlta";

export default async function PublicarEmAltaPage() {
  const session = await auth();
  if (!session?.user) redirect("/entrar");

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: { kycStatus: true },
  });

  if (user?.kycStatus !== "aprovado") {
    return <BloqueioKyc kycStatus={user?.kycStatus ?? "nao_iniciado"} />;
  }

  return <FormularioEmAlta />;
}
