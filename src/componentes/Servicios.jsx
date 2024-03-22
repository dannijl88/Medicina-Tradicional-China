import React from "react";
import { TarjetasServicios } from "./componentes-paginas/TarjetasServicios";
import servicios1 from "../assets/img webp/Servicios/acupuntura.webp";
import servicios2 from "../assets/img webp/Servicios/pexels-los-muertos-crew-8391232.webp";
import servicios3 from "../assets/img webp/Servicios/masaje-descontracturante.webp";
import servicios4 from "../assets/img webp/Servicios/pexels-anete-lusina-5240700.webp";
import servicios5 from "../assets/img webp/Servicios/pexels-tima-miroshnichenko-6187848.webp";

export const Servicios = () => {
  return (
    <div className="p-4 md:max-w-[1100px] md:mx-auto">
      <h1 className="text-6xl font-bold text-center my-20">Servicios</h1>
      <TarjetasServicios
        titulo="Acupuntura"
        texto="Ansiedad, depresión, insomnio, migrañas, ciática dolores de espalda, problemas de estomago, dolores menstruales, procesos oncológicos, alzheimer etc.."
        img={servicios1}
        precio="Presencial - 30€"
      />
      <TarjetasServicios
        titulo="Tarot Canalizador"
        texto="Descubre la magia de la terapia de tarot canalizador, donde el tarot se combina con intuición para explorar tu interior, responder preguntas y sanar heridas emocionales. Nuestros servicios incluyen lecturas de tarot, terapia canalizadora y talleres. ¡Únete a nosotros en tu búsqueda de claridad y propósito!"
        img={servicios2}
        precio="Presencial 1 pregunta - 10€"
        precio1="Presencial 30min - 20€"
        precio2="Presencial 1h - 30€"
        precio3="Presencial tarot canalizador + chakras - 35€"
        precio4="Online 1 pregunta - 10€"
      />
      <TarjetasServicios
        titulo="Masaje descontracturante y relajante"
        texto="Escapa del estrés y la tensión con nuestros masajes que alivian los músculos, promueven la relajación y restauran la energía. Elige entre una variedad de opciones y sumérgete en una experiencia de bienestar. ¡Reserva tu masaje relajante hoy!"
        img={servicios3}
        precio="Masaje descontracturante - 30€"
        precio1="Masaje relajante - 30€"
        precio2="Masaje + acupuntura - 35€"
      />
      <TarjetasServicios
        titulo="Reiki"
        texto="Descubre el poder sanador del Reiki, una terapia que restablece la armonía en cuerpo y mente. Experimenta una relajación profunda, alivio del estrés y renovación de energía. ¡Experimenta la sanación a través del Reiki hoy mismo!"
        img={servicios4}
        precio="1 hora - 30€"
      />
      <TarjetasServicios
        titulo="Tratamiento biomagnetismo"
        texto="El biomagnetismo es una terapia alternativa que se basa en la idea de que desequilibrios en el campo magnético del cuerpo pueden ser la causa de diversas enfermedades y trastornos. Esta práctica terapéutica se centra en la aplicación de imanes en puntos específicos del cuerpo para corregir tales desequilibrios y promover la salud."
        img={servicios5}
        precio="1 hora - 30€"
      />
    </div>
  );
};
