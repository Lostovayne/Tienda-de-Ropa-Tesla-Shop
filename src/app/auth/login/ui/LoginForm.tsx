"use client";

import { authenticate } from "@/actions";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export const LoginForm = () => {
  const [state, dispatch] = useFormState(authenticate, undefined);

  const [isLoading, setisLoading] = useState(false);

  if(isLoading) {
    console.log({ state });
  }

  useEffect(() => {
    setisLoading(true);
  }, []);

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

      <button type="submit" className="cursor-pointer btn-primary">
        Ingresar
      </button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-gray-500 border-t"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-gray-500 border-t"></div>
      </div>

      <Link
        href="/auth/new-account"
        className="text-center cursor-pointer btn-secondary"
      >
        Crear una nueva cuenta
      </Link>
    </form>
  );
};
