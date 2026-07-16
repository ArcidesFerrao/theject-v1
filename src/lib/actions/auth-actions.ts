"use server";

import bcrypt from "bcryptjs";
import { z } from "zod";
import { db } from "@/lib/prisma";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

const registoSchema = z.object({
  name: z.string().min(2, "Nome demasiado curto"),
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "A password deve ter pelo menos 8 caracteres"),
});

export type RegistoState = {
  error?: string;
  fieldErrors?: Record<string, string>;
  success?: boolean;
};

/**
 * Regista um novo utilizador (role "reader" por defeito — secção 4/11 do guia:
 * qualquer pessoa pode navegar sem KYC; só precisa de conta para reagir/guardar
 * favoritos/assinar newsletter. A promoção a "founder" + KYC acontece só quando
 * o utilizador tenta publicar um projecto.)
 */
export async function registarUtilizador(
  _prevState: RegistoState,
  formData: FormData
): Promise<RegistoState> {
  const parsed = registoSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      fieldErrors[String(issue.path[0])] = issue.message;
    }
    return { fieldErrors };
  }

  const { name, email, password } = parsed.data;

  const existente = await db.user.findUnique({ where: { email } });
  if (existente) {
    return { error: "Já existe uma conta com este email." };
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await db.user.create({
    data: { name, email, passwordHash, role: "reader" },
  });

  try {
    await signIn("credentials", { email, password, redirectTo: "/" });
  } catch (err) {
    if (err instanceof AuthError) {
      return { error: "Conta criada, mas falhou o login automático. Tenta entrar." };
    }
    throw err;
  }

  return { success: true };
}

export type LoginState = { error?: string };

export async function loginComCredenciais(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/",
    });
    return {};
  } catch (err) {
    if (err instanceof AuthError) {
      return { error: "Email ou password incorrectos." };
    }
    throw err;
  }
}

/**
 * Promove um "reader" a "founder" e marca o KYC como pendente.
 * Chamar isto no início do fluxo "Publicar Projecto" (ecrã 6 do guia),
 * antes de mostrar o formulário de KYC/checklist.
 */
export async function iniciarFluxoDeFounder(userId: string) {
  await db.user.update({
    where: { id: userId },
    data: {
      role: "founder",
      kycStatus: "pendente",
    },
  });
}
