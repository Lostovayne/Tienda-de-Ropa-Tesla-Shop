"use client";

import { useState } from "react";
import { registerUser } from "@/actions";
import { cn } from "@/lib/twMerge";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInput = {
  name: string;
  email: string;
  password: string;
};

type RegisterResponse = {
  message: string;
  user?: undefined | { id: string; name: string; email: string };
  ok: boolean;
};

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setErrorMessage("");
    const { name, email, password } = data;
    //server actions
    const resp: RegisterResponse = await registerUser(name, email, password);
    if (!resp.ok) {
      setErrorMessage(resp.message);
    }

    console.log(resp);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Nombre completo</label>
      <input
        className={cn("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.name?.type === "required",
        })}
        type="text"
        autoFocus
        {...register("name", { required: true })}
      />

      <label htmlFor="email">Correo electrónico</label>
      <input
        className={cn("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.email?.type === "required",
        })}
        type="email"
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />

      <label htmlFor="email">Contraseña</label>
      <input
        className={cn("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.password?.type === "required",
        })}
        type="password"
        {...register("password", {
          required: true,
        })}
      />

      <span className="text-red-500 bg-red-200/60 text-center font-medium rounded-lg leading-8  mb-2">{errorMessage}</span>

      <button className="btn-primary">Crear Cuenta</button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Ingresar
      </Link>
    </form>
  );
};
