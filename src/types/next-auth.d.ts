import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "reader" | "founder" | "admin";
      kycStatus: string;
    } & DefaultSession["user"];
  }

  interface User {
    role: "reader" | "founder" | "admin";
    kycStatus: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: "reader" | "founder" | "admin";
    kycStatus: string;
  }
}
