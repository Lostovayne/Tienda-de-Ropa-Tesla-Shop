import { titleFont } from "@/config/fonts";
import { LoginForm } from "./ui/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col pt-32 sm:pt-52 min-h-screen">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Iniciar Sesión</h1>
      <LoginForm />
    </div>
  );
}
