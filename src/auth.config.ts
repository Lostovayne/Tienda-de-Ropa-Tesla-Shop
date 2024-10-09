import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";
import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

export const authConfig: NextAuthConfig = {
  trustHost: true,

  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isCheckout = !!nextUrl.pathname.startsWith("/checkout");

      if (isCheckout) {
        if (isLoggedIn) return true;
        return Response.redirect(new URL("/auth/login", nextUrl));
      }

      return true;
    },

    jwt: ({ token, user }) => {
      if (user) {
        token.data = user;
      }
      return token;
    },

    session: ({ session, token, user }) => {
      session.user = token.data as any;
      return session;
    },
  },

  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (!parsedCredentials) return null;

        const { email, password } = parsedCredentials.data!;

        // Buscar el correo
        const user = await prisma.user.findUnique({
          where: { email: email.toLowerCase() },
        });

        // retornar null dará en invalid credentials en la función SigIn!
        if (!user) return null;

        // Comparar las contraseñas
        if (!bcryptjs.compareSync(password, user.password)) return null;

        // Retornar el usuario sin el password
        const { password: pass, ...rest } = user;
        return rest;
      },
    }),
  ],
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
