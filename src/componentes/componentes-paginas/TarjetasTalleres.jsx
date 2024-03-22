import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const TarjetasTalleres = ({ img, titulo, texto }) => {
  return (
    <article className="md:max-w-[1100px] md:mx-auto flex flex-wrap justify-center gap-20 bg-[#A38369] p-4 rounded-lg mb-20">
      <picture className="md:w-[45%] border-2">
        <img className="rounded-lg md:h-full" src={img}></img>
      </picture>
      <div className="flex flex-col justify-between md:w-[45%] text-white">
        <div>
          <h2 className="text-3xl font-semibold text-center mb-4">{titulo}</h2>
          <p>{texto}</p>
        </div>
        <div>
          <Link
            to="/contacto"
            className="w-40 bg-[#CC9955] hover:bg-[#DFC6B1] hover:text-black duration-100 rounded-md text-white font-semibold p-2 shadow-lg block mx-auto mt-6"
          >
            Más información
          </Link>
        </div>
      </div>
    </article>
  );
};

TarjetasTalleres.propTypes = {
  img: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};
