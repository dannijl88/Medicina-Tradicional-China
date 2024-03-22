import React from "react";
import PropTypes from "prop-types";

export const TarjetasCatalogo = ({ img, titulo, texto }) => {
  return (
    <article className="flex flex-wrap gap-4 mb-6 w-full">
      <div className="h-full w-[35%]">
        <img className="rounded-lg w-40 h-36" src={img}></img>
      </div>
      <div className=" w-[60%] text-white">
        <h4 className="text-lg font-semibold mb-2">{titulo}</h4>
        <p>{texto}</p>
      </div>
    </article>
  );
};

TarjetasCatalogo.propTypes = {
  img: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};
