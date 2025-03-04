import React from "react";
import { Link } from "react-router-dom";

export const PaginaError = () => {
  return (
    <div>
      <main className="grid h-screen place-items-center bg-[#DFC6B1] px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-black">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Página no encontrada
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Lo sentimos, no encontramos la página que estas buscando.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/inicio"
              className="rounded-md bg-[#A38369] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#A38356] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Volver a inicio
            </Link>
            <Link
              to="/contacto"
              className="text-sm font-semibold text-gray-900"
            >
              Reportar errores <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
