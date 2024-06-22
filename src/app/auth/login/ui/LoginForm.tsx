"use client";

import { authenticate } from "@/actions";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { IoInformationCircleOutline } from "react-icons/io5";

export const LoginForm = () => {
  const [state, dispatch] = useFormState(authenticate, undefined);
  const [isLoading, setisLoading] = useState(false);
  // const router = useRouter();

  // if (isLoading) {
  //   console.log({ state });
  // }

  useEffect(() => {
    setisLoading(true);
  }, []);

  useEffect(() => {
    if (state === "Success") {
      // router.push("/");
      window.location.href = "/";
    }
  }, [state]);

  if (!isLoading) return null;

  return (
    <form action={dispatch} className="flex flex-col">
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="bg-gray-200 mb-5 px-5 py-2 border rounded"
        type="email"
        name="email"
      />

      <label htmlFor="password">Contraseña</label>
      <input
        className="bg-gray-200 mb-5 px-5 py-2 border rounded"
        type="password"
        name="password"
      />

      {/* Errors */}
      <div
        className="flex h-8 items-center space-x-1 mb-1"
        aria-label="polite"
        aria-atomic="true"
      >
        {state === "Credentials SignIn" && (
          <div className="bg-rose-100/70 w-full flex items-center justify-center py-2 ">
            <IoInformationCircleOutline className="text-rose-500 text-xl mr-1" />
            <p className="text-sm font-medium text-rose-500">Credenciales incorrectas</p>
          </div>
        )}
      </div>

      <LoginButton />

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-gray-500 border-t"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-gray-500 border-t"></div>
      </div>

      <Link href="/auth/new-account" className="text-center cursor-pointer btn-secondary">
        Crear una nueva cuenta
      </Link>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="cursor-pointer btn-primary
      disabled:bg-gray-300
      disabled:opacity-65 
      "
    >
      Ingresar
    </button>
  );
}
