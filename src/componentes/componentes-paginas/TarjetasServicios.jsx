import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const TarjetasServicios = ({
  titulo,
  texto,
  precio,
  precio1,
  precio2,
  precio3,
  precio4,
  img,
}) => {
  return (
    <div className="bg-[#A5856B] max-w-[1100px] mx-auto mb-20 flex flex-wrap  md:gap-28 gap-12 p-4 rounded-lg">
      <div className="md:w-2/5 ">
        <img
          className="rounded-lg w-full h-full md:min-w-[400px] min-h-[400px]"
          src={img}
        ></img>
      </div>
      <div className="md:w-2/5 flex flex-wrap flex-col justify-between">
        <h2 className="md:text-4xl text-3xl text-white font-bold text-center">
          {titulo}
        </h2>
        <p className="text-white md:text-xl text-lg font-semibold my-4">
          {texto}
        </p>
        <ul className="md:text-xl text-lg text-white font-semibold">
          <li>{precio}</li>
          <li>{precio1}</li>
          <li>{precio2}</li>
          <li>{precio3}</li>
          <li>{precio4}</li>
        </ul>
        <div className="flex justify-center">
          <Link
            to="/contacto"
            className="w-32 text-center bg-[#CC9955] hover:bg-[#DFC6B1] hover:text-black duration-100 rounded-md text-white font-semibold p-2 shadow-lg my-6"
          >
            Reservar
          </Link>
        </div>
      </div>
    </div>
  );
};

TarjetasServicios.propTypes = {
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  precio: PropTypes.string.isRequired,
  precio1: PropTypes.string,
  precio2: PropTypes.string,
  precio3: PropTypes.string,
  precio4: PropTypes.string,
  img: PropTypes.string.isRequired,
};
