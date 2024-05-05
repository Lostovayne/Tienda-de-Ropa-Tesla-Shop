"use server";
import { signIn } from "@/auth.config";
import { sleep } from "@/utils";
import { AuthError } from "next-auth";

// ...

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    // await sleep(2);
    await signIn("credentials", Object.fromEntries(formData));
  } catch (error) {
    // if (error instanceof AuthError) {
    //   switch (error.type) {
    //     case "CredentialsSignin":
    //       return "Credenciales incorrectas.";
    //     default:
    //       return "Parece que ocurrio un error o algo salio mal.";
    //   }
    // }
    return "CredentialsSignin";

    throw error;
  }
}
