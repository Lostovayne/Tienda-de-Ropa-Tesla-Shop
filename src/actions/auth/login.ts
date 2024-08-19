"use server";
import { signIn } from "@/auth.config";

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn("credentials", {
      redirect: false,
      ...Object.fromEntries(formData),
    });

    return "Success";
  } catch (error) {
    if ((error as any).type === "CredentialsSignin") {
      return "Credentials SignIn";
    }

    return "UnknownError.";
  }
}

// Opcion 2 para manejar el login

export const login = async (email: string, password: string) => {
  try {
    await signIn("credentials", {
      email,
      password,
    });
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error al iniciar sesión",
    };
  }
};
