import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

// Usa só a config "leve" (Edge-safe) — ver comentário em auth.config.ts
const { auth }= NextAuth(authConfig);

export const proxy = auth;

export const config = {
  // Corre em todas as rotas excepto assets estáticos e a própria API do NextAuth
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
