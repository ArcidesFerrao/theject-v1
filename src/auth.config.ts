import type { NextAuthConfig } from "next-auth";

/**
 * Configuração "leve" — usada pelo middleware (Edge Runtime).
 * NÃO importar Prisma/bcrypt aqui: o Edge Runtime não suporta Node APIs
 * como fs/net, que o Prisma Client e o bcryptjs usam internamente.
 * A configuração completa (com os providers e o adapter) está em src/auth.ts.
 */
export const authConfig = {
  pages: {
    signIn: "/entrar",
  },
  session: {
    // Obrigatório usar "jwt" porque o Credentials provider não é compatível
    // com sessões guardadas na base de dados (database sessions).
    strategy: "jwt",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const role = auth?.user?.role;

      const isDashboard = nextUrl.pathname.startsWith("/dashboard");
      const isAdmin = nextUrl.pathname.startsWith("/admin");
      const isPublicar = nextUrl.pathname.startsWith("/publicar");

      if (isAdmin) {
        return isLoggedIn && role === "admin";
      }

      if (isDashboard || isPublicar) {
        // Qualquer utilizador autenticado pode aceder; a lógica de
        // "só founder pode publicar" fica ao nível da página/acção,
        // porque um reader pode querer ver o seu próprio dashboard
        // de assinatura de newsletter, por exemplo.
        return isLoggedIn;
      }

      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.kycStatus = user.kycStatus;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.role = token.role as "reader" | "founder" | "admin";
        session.user.kycStatus = token.kycStatus as string;
      }
      return session;
    },
  },
  providers: [], // preenchido em src/auth.ts
} satisfies NextAuthConfig;
