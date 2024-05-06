"use server";
import { signIn } from "@/auth.config";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    // await sleep(2);
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
