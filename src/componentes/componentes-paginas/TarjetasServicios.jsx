import React from "react";

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
    <div className="bg-[#A5856B] max-w-[1200px] mx-auto mb-20 flex flex-wrap gap-28 p-4 rounded-lg">
      <div className=" w-2/5 ">
        <img className="rounded-lg min-w-[400px] min-h-[400px]" src={img}></img>
      </div>
      <div className="w-2/5 ">
        <h2 className="text-4xl text-white font-bold text-center">{titulo}</h2>
        <p className="text-white text-xl font-semibold my-4">{texto}</p>
        <ul className="text-xl text-white font-semibold">
          <li>{precio}</li>
          <li>{precio1}</li>
          <li>{precio2}</li>
          <li>{precio3}</li>
          <li>{precio4}</li>
        </ul>
        <button className="w-28 h-10 bg-[#825725] rounded-md shadow-xl block mx-auto mt-6">
          Reservar
        </button>
      </div>
    </div>
  );
};
