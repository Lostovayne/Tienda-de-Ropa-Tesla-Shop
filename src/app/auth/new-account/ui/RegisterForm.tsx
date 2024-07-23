"use client";

import { cn } from "@/lib/twMerge";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInput = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const { name, email, password } = data;
    console.log({ name, email, password });

    //server actions
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      {/* {errors.name?.type === "required" && (
        <p className="text-red-500">El nombre es obligatorio</p>
      )} */}

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
