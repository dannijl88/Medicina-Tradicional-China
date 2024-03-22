import React from "react";
import { Routes, Route, Link, BrowserRouter, NavLink } from "react-router-dom";
import { Inicio } from "../componentes/Inicio";
import { Servicios } from "../componentes/Servicios";
import { Velas } from "../componentes/Velas";
import { Talleres } from "../componentes/Talleres";
import { Contacto } from "../componentes/Contacto";
import { PaginaError } from "../componentes/PaginaError";
import { Cookies } from "../componentes/Cookies";
import { Legal } from "../componentes/Legal";
import { Privacidad } from "../componentes/Privacidad";
import logoWeb from "../assets/logomedicina.png";
import flecha from "../assets/icons8-flecha-arriba-50.png";

export const RouterPrincipal = () => {
  return (
    <div className="bg-[#DFC6B1]">
      <BrowserRouter>
        {/* Barra de navegación */}
        <nav
          id="nav"
          className="bg-[#C3A58C] h-14 px-10 flex flex-wrap justify-between items-center"
        >
          <img src={logoWeb} />
          <ul className="text-white text-xl font-bold flex gap-6">
            <li>
              <NavLink
                to="/Inicio"
                className={({ isActive }) => (isActive ? "text-[#997860]" : "")}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Servicios"
                className={({ isActive }) => (isActive ? "text-[#997860]" : "")}
              >
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Velas"
                className={({ isActive }) => (isActive ? "text-[#997860]" : "")}
              >
                Velas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Talleres"
                className={({ isActive }) => (isActive ? "text-[#997860]" : "")}
              >
                Talleres
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contacto"
                className={({ isActive }) => (isActive ? "text-[#997860]" : "")}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
          <button className="bg-[#A5856B] rounded-md text-white p-1 w-24 shadow-md">
            Reservar
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/velas" element={<Velas />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/politica-de-cookies" element={<Cookies />} />
          <Route path="/aviso-legal" element={<Legal />} />
          <Route path="/politica-de-privacidad" element={<Privacidad />} />
          <Route path="*" element={<PaginaError />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-[#C3A58C] h-14 px-10 flex flex-wrap justify-between items-center">
          <div className="ml-10">
            <img src={logoWeb}></img>
          </div>
          <ul className="flex gap-6 mr-10 text-white text-xl font-bold">
            <li>
              <NavLink
                to="/politica-de-cookies"
                className={({ isActive }) => (isActive ? "text-[#997860]" : "")}
              >
                Política de Cookies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aviso-legal"
                className={({ isActive }) => (isActive ? "text-[#997860]" : "")}
              >
                Aviso legal
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/politica-de-privacidad"
                className={({ isActive }) => (isActive ? "text-[#997860]" : "")}
              >
                Política de privacidad
              </NavLink>
            </li>
          </ul>
          <div>
            <a href="#nav">
              <img src={flecha}></img>
            </a>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
};
