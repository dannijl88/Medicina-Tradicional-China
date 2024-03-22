import React from "react";
import { TarjetasCatalogo } from "./componentes-paginas/TarjetasCatalogo";
import vela from "../assets/img webp/Velas/18€-60g-h10a-h10p.webp";
import vela1 from "../assets/img webp/Velas/20€-70g-h16a-h10p.webp";
import vela2 from "../assets/img webp/Velas/catalogo/IMG-20240123-WA0008.webp";
import vela3 from "../assets/img webp/Velas/catalogo/Imagen de WhatsApp 2024-01-24 a las 19.14.13_9047bc38.webp";
import vela4 from "../assets/img webp/Velas/catalogo/Imagen de WhatsApp 2024-01-24 a las 19.14.43_a2b3fc20.webp";
import vela5 from "../assets/img webp/Velas/catalogo/Imagen de WhatsApp 2024-01-24 a las 19.14.59_0b999aea.webp";
import vela6 from "../assets/img webp/Velas/catalogo/IMG-20240124-WA0006.webp";
import vela7 from "../assets/img webp/Velas/catalogo/IMG-20240124-WA0009.webp";
import vela8 from "../assets/img webp/Velas/catalogo/Imagen de WhatsApp 2024-01-24 a las 19.14.59_0b999aea.webp";
import vela9 from "../assets/img webp/Velas/catalogo/Imagen de WhatsApp 2024-01-24 a las 19.14.13_9047bc38.webp";
import vela10 from "../assets/img webp/Velas/18€-60g-h10a-h10p.webp";
import vela11 from "../assets/img webp/Velas/20€-70g-h16a-h10p.webp";
import { Link } from "react-router-dom";

export const Velas = () => {
  return (
    <section className="mb-20 p-2">
      <h1 className="text-5xl font-bold text-center my-20">
        Velas aromáticas artesanales
      </h1>
      <article className="max-w-[1200px] bg-[#A38369] p-4 rounded-lg mx-auto">
        <div className="bg-[#DFC6B1] text-lg font-semibold p-8 mt-10 max-w-[600px] mx-auto rounded-lg shadow-xl">
          <p className="mb-6">
            Están hechas con Cera de Soja por lo que no tienen ningún peligro de
            toxicidad para tú salud. No solo es una vela decorativa si no que
            está hecha ÚNICA y EXCLUSIVAMENTE para la persona.
          </p>
          <p>
            Utilizando la AROMATERAPIA y la FITOTERAPIA para trabajar las
            emociones con aromas: bloqueos, cansancio, estrés , ansiedad,
            frustración, dándote ánimo , aclarando pensamiento, ayudándote con
            tu salud, despejando caminos, limpiando negatividad, atrayendo
            abundancia, limpieza energética, sanación… entre otras muchas
            funciones.
          </p>
        </div>
        <article>
          <h3 className="text-4xl text-white text-center my-20 font-bold">
            Catálogo
          </h3>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="md:w-2/5">
              <TarjetasCatalogo
                titulo="Vela personalizada 50gr - 18€"
                texto="Creada exclusivamente para las necesidades o preferencias de una persona en particular"
                img={vela}
              />
              <TarjetasCatalogo
                titulo="Vela personalizada 50gr - 18€"
                texto="Creada exclusivamente para las necesidades o preferencias de una persona en particular"
                img={vela1}
              />
              <TarjetasCatalogo
                titulo="Vela personalizada 50gr - 18€"
                texto="Creada exclusivamente para las necesidades o preferencias de una persona en particular"
                img={vela2}
              />
              <TarjetasCatalogo
                titulo="Vela personalizada 50gr - 18€"
                texto="Creada exclusivamente para las necesidades o preferencias de una persona en particular"
                img={vela3}
              />
              <TarjetasCatalogo
                titulo="Vela personalizada 50gr - 18€"
                texto="Creada exclusivamente para las necesidades o preferencias de una persona en particular"
                img={vela4}
              />
              <TarjetasCatalogo
                titulo="Vela personalizada 50gr - 18€"
                texto="Creada exclusivamente para las necesidades o preferencias de una persona en particular"
                img={vela5}
              />
            </div>
            <div className="md:w-2/5">
              <TarjetasCatalogo
                titulo="Vela personalizada 50gr - 18€"
                texto="Creada exclusivamente para las necesidades o preferencias de una persona en particular"
                img={vela6}
              />
              <TarjetasCatalogo
                titulo="Vela personalizada 50gr - 18€"
                texto="Creada exclusivamente para las necesidades o preferencias de una persona en particular"
                img={vela7}
              />
              <TarjetasCatalogo
                titulo="Vela personalizada 50gr - 18€"
                texto="Creada exclusivamente para las necesidades o preferencias de una persona en particular"
                img={vela8}
              />
              <TarjetasCatalogo
                titulo="Vela personalizada 50gr - 18€"
                texto="Creada exclusivamente para las necesidades o preferencias de una persona en particular"
                img={vela9}
              />
              <TarjetasCatalogo
                titulo="Vela personalizada 50gr - 18€"
                texto="Creada exclusivamente para las necesidades o preferencias de una persona en particular"
                img={vela10}
              />
              <TarjetasCatalogo
                titulo="Vela personalizada 50gr - 18€"
                texto="Creada exclusivamente para las necesidades o preferencias de una persona en particular"
                img={vela11}
              />
            </div>
          </div>
          <Link
            to="/contacto"
            className="w-40 bg-[#CC9955] hover:bg-[#DFC6B1] hover:text-black duration-100 rounded-md text-white font-semibold p-2 shadow-lg block mx-auto my-6"
          >
            Consigue la tuya!!
          </Link>
        </article>
      </article>
    </section>
  );
};
