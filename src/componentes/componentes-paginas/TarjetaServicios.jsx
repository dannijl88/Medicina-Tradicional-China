import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const TarjetaServicios = ({ img, titulo, texto, enlace }) => {
  return (
    <article className="flex flex-wrap p-2 pb-6 flex-col items-center justify-between gap-4 w-60 h-80 border-2 rounded-lg bg-[#DFC6B1] shadow-lg">
      <div className="w-20 h-20 rounded-xl mt-[-40px] bg-white">
        <img className="w-14 h-14 mx-auto mt-2" src={img}></img>
      </div>
      <h3 className="text-2xl font-bold text-center">{titulo}</h3>
      <div className="border-2 border-white w-20 h-1"></div>
      <p className="text-center">{texto}</p>
      <Link
        to={enlace}
        className="bg-[#A5856B] rounded-md p-2 text-white border-2 shadow-lg"
      >
        Más información
      </Link>
    </article>
  );
};

TarjetaServicios.propTypes = {
  img: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  enlace: PropTypes.string.isRequired,
};
