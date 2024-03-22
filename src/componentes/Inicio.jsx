import React from "react";
import imgHeader from "../assets/img webp/Servicios/cabecera-home.webp";
import "../index.css";
import { TarjetaServicios } from "./componentes-paginas/TarjetaServicios";
import imgServicios from "../assets/icons8-agenda-100.png";
import imgTalleres from "../assets/icons8-taller-80.png";
import imgVelas from "../assets/icons8-vela-64.png";
import cartelBombones from "../assets/img webp/Velas/velas navidad/bombones/cartel-bombones.webp";
import imgBombones1 from "../assets/img webp/Velas/velas navidad/bombones/velas-bombones1.webp";
import imgBombones2 from "../assets/img webp/Velas/velas navidad/bombones/velas-bombones2.webp";
import logoWeb from "../assets/logomedicina.png";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

export const Inicio = () => {
  const backgroundImg = imgHeader;

  return (
    <div>
      <header
        className="relative max-w-screen-lg h-96 m-auto mt-6 rounded-lg pt-4"
        style={{
          backgroundImage: `url('${backgroundImg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="relative text-white text-3xl font-semibold md:text-4xl text-center z-10">
          Medicina tradicional china
        </h1>
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
      </header>
      <main>
        <section className="max-w-3xl mb-10 p-6 md:p-0 min-h-96 mx-auto mt-20">
          <article>
            <h2 className="md:text-2xl text-xl text-center font-bold mb-4">
              ¿Que es la medicina tradicional china?
            </h2>
            <p className="md:text-lg text-justify font-semibold">
              La Medicina China Tradicional (MCT) es un sistema médico con
              raíces milenarias que se originó en China. Se basa en el concepto
              de Qi, la energía vital, y busca mantener un equilibrio de esta
              energía en el cuerpo para promover la salud y prevenir
              enfermedades. Los métodos más conocidos de la MCT son la
              acupuntura y la fitoterapia. La acupuntura implica la inserción de
              agujas en puntos específicos del cuerpo para restaurar el flujo de
              energía, mientras que la fitoterapia utiliza plantas y hierbas
              medicinales. La MCT se caracteriza por un enfoque holístico que
              considera cuerpo, mente y espíritu como interconectados. A menudo
              se utiliza como complemento o alternativa a la medicina
              occidental.
            </p>
          </article>
        </section>

        <section className="bg-[#A5856B] pt-8 pb-12 min-h-[600px]">
          <h2 className="text-center font-bold text-white text-5xl mt-8 mb-20">
            ¿Como te podemos ayudar?
          </h2>
          <div className="flex flex-wrap gap-16 md:gap-8 justify-center">
            <TarjetaServicios
              img={imgServicios}
              titulo="Servicios"
              texto="Acupuntura, Tarot canalizador, Masaje descontracturante y relajante, Reiki, Biomagnetismo…"
              enlace="/servicios"
            />
            <TarjetaServicios
              img={imgTalleres}
              titulo="Talleres"
              texto="Taller de meditación, Cumpleaños/ Despedidas holisticos, Tarot grupal…"
              enlace="/talleres"
            />
            <TarjetaServicios
              img={imgVelas}
              titulo="Velas"
              texto="Velas personalizadas, y exclusivas para ti, hechas de manera artesanal."
              enlace="/velas"
            />
          </div>
        </section>
        <section className="p-8">
          <h2 className="text-6xl font-bold text-center mb-10">
            Bombones Aromáticos
          </h2>
          <div className="flex flex-wrap gap-10 md:w-3/5 md:mx-auto">
            <picture className="md:w-2/5 w-full">
              <img
                className="rounded-lg md:min-w-[300px] md:min-h-[400px]"
                src={cartelBombones}
              ></img>
            </picture>
            <aside className="md:w-2/4 md:h-[700px]">
              <p className="text-xl mb-12 md:min-h-[300px]">
                ¡Descubre la magia en cada llama con nuestros Bombones
                Aromáticos Artesanales! Sumérgete en fragancias cautivadoras.
                Elige calidad con ceras premium y mechas sin plomo para una
                experiencia de quemado impecable. Transforma tu espacio, crea
                atmósferas encantadoras y haz de cada momento una experiencia
                sensorial única con nuestras Velas Aromáticas Artesanales.
                ¡Ilumina tu vida con la mezcla perfecta de arte y aroma!
              </p>
              <div className="flex flex-wrap gap-10 justify-center h-96">
                <picture className="w-2/5 max-h-14">
                  <img className="rounded-xl" src={imgBombones1}></img>
                </picture>
                <picture className="w-2/5 max-h-14 mb-16">
                  <img className="rounded-xl" src={imgBombones2}></img>
                </picture>
                <Link
                  to="/contacto"
                  className="bg-[#A5856B] border-2 w-36 h-12 rounded-lg text-white leading-10 text-center text- drop-shadow-xl hover:scale-110 hover:duration-1000"
                >
                  Consigue la tuya!!
                </Link>
              </div>
            </aside>
          </div>
        </section>
        <section className="bg-[#A5856B] pt-14 pb-14">
          <h2 className="text-6xl font-bold text-center">
            ¿Que opinan nuestros clientes?
          </h2>
          <div className="border-2 w-40 mx-auto mt-10"></div>
          <div className="mt-12 md:mt-24 p-4 flex flex-wrap gap-8 justify-center">
            <div className="bg-[#282828] min-w-[350px] md:max-w-[350px] text-xl leading-loose text-white w-1/4 h-[400px] p-10 rounded-lg">
              <p>
                "No nos conocemos pero tú lectura de Tarot Canalizador Online te
                diría que me ha dejado sin palabras para decir lo que he
                sentido. Gracias y mil veces gracias por que has dado en el
                clavo con todo."
              </p>
              <span className="text-center block mt-4">
                <em>Marta López</em>
              </span>
            </div>
            <div className="bg-[#282828] min-w-[350px] md:max-w-[350px] text-xl leading-loose text-white w-1/4 h-[510px] p-10 rounded-lg">
              <p>
                "Desde que hicimos domingo el primer día del taller de amor
                propio voy con la energía a tope, estoy que ni yo misma me
                reconozco, situaciones que me hubiesen generado mucho estrés
                ahora lo estoy llevándo super bien, así que significa que vamos
                por buen camino."
              </p>
              <span className="text-center block mt-4">
                <em>Noelia Martínez</em>
              </span>
            </div>
            <div className="bg-[#282828] min-w-[350px] md:max-w-[350px] text-xl leading-loose text-white w-1/4 h-[400px] p-10 rounded-lg">
              <p>
                "Oye bonita, la Novia está muy contenta, muy muy contenta de lo
                que hicimos ayer, yo estoy muy agusto y lo que hicimos nos
                pareció precioso! Nos encantó y nos quedamos muy tiernas."
              </p>
              <span className="text-center block mt-4">
                <em>Eva Soriano</em>
              </span>
            </div>
          </div>
        </section>
        <section>
          <img className="mx-auto w-60 mt-14" src={logoWeb}></img>
          <p className="text-center text-lg font-bold my-2">
            Únete a la familia!
          </p>
          <div className="flex justify-center mb-12">
            <SocialIcon
              bgColor="#A5856B"
              url="https://www.instagram.com/medicina.tradicionalchina/"
            />
          </div>
        </section>
      </main>
    </div>
  );
};
