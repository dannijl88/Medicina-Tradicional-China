import React, { useState } from "react";
import { Routes, Route, Link, BrowserRouter, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
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

const NavLinks = () => {
  return (
    <>
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
    </>
  );
};

export const RouterPrincipal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#DFC6B1]">
      <BrowserRouter>
        {/* Header */}
        <nav
          id="nav"
          className="bg-[#C3A58C] md:h-14 px-10 flex flex-wrap justify-between items-center"
        >
          <img src={logoWeb} />
          <ul className="hidden md:flex text-white text-xl font-bold gap-6">
            <NavLinks />
          </ul>
          <span className="bg-[#CC9955] hover:bg-[#A5856B] duration-100 rounded-md text-white text-center font-semibold p-1 w-24 shadow-lg">
            <Link to="/Contacto">Reservar</Link>
          </span>

          <div className="md:hidden block mx-auto">
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </nav>
        {isOpen && (
          <ul className="md:hidden flex flex-col basis-full items-center z-[20] text-white bg-[#C3A58C] font-semibold text-lg">
            <NavLinks />
          </ul>
        )}

        {/* Rutas */}
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
        <footer className="bg-[#C3A58C] md:h-16 px-6 flex flex-wrap items-center">
          <div className="md:ml-10 mx-auto my-4">
            <img src={logoWeb}></img>
          </div>
          <ul className="flex flex-wrap mx-20 md:mx-0 md:mr-6 gap-2 md:gap-6 mr-10 text-white text-xl font-bold">
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
