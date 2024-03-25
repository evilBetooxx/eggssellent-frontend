"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <div className="absolute top-0 left-0 p-4 text-white text-4xl">
        Eggssellent
      </div>
      <div
        className="min-h-screen flex justify-center items-center"
        style={{
          backgroundImage: `url("/FONDO EGG.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="flex flex-col md:flex-row p-8 rounded-lg shadow-md md:space-x-8"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", marginTop: "-200px" }}
        >
          <form className="w-full md:w-1/2 max-w-md">
            <h1 className="text-white text-2xl mb-4">Registrate</h1>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Nombre:
              </label>
              <input
                type="text"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "Nombre inválido",
                  },
                })}
                className="w-full border border-gray-300 p-2 rounded-lg text-black"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                placeholder="Tu nombre"
              />
              {errors.firstName && (
                <p className="text-red-500">Nombre invalido</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Apellido:
              </label>
              <input
                type="text"
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Nombre inválido",
                  },
                })}
                className="w-full border border-gray-300 p-2 rounded-lg text-black"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                placeholder="Tu apellido"
              />
              {errors.lastName && (
                <p className="text-red-500">Apellido invalido</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Correo:
              </label>
              <input
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email requerido",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email invalido",
                  },
                })}
                className="w-full border border-gray-300 p-2 rounded-lg text-black"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                placeholder="atencion@eggssellent.com"
              />
              {errors.email && <p className="text-red-500">Correo invalido</p>}
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Contraseña:
              </label>
              <input
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Contraseña inválida",
                  },
                })}
                className="w-full border border-gray-300 p-2 rounded-lg text-black"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                placeholder="*********"
              />
              {errors.password && (
                <p className="text-red-500">Contraseña inválida</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-teal-800 hover:bg-teal-950 font-bold py-2 px-4 rounded text-white"
            >
              Entrar
            </button>
            <div className="mt-4 text-center">
              <span className="text-white">
                ¿Ya tienes una cuenta? <br />{" "}
              </span>
              <Link href="/login" className="text-white  font-bold">
                Inicia sesión
              </Link>
            </div>
          </form>

          <div className="md:w-1/2 text-white flex justify-center items-center">
            <p className="text-3xl font-bold">
              Eggssellent,
              <br />
              más que una
              <br />
              incubadora ...
              <br />
              ¡Cuidando cada
              <br />
              paso del proceso!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
