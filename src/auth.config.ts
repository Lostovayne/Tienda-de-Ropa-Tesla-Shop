import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: "/auth/login",
        newUser: "/auth/new-account",
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (!parsedCredentials) return null;

                const { email, password } = parsedCredentials.data!;

                console.log({ email, password });

                // Buscar el correo

                // Comparar las contraseñas

                // Retornar el usuario

                return null;
            },
        }),
    ],
};

export const { signIn, signOut, auth } = NextAuth(authConfig);
