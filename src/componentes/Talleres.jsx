import React from "react";
import { TarjetasTalleres } from "./componentes-paginas/TarjetasTalleres";
import taller from "../assets/img webp/Talleres/Imagen de WhatsApp 2023-11-05 a las 18.00.43_06820d72.webp";
import taller1 from "../assets/img webp/Talleres/Imagen de WhatsApp 2023-11-05 a las 18.00.43_de800cf1.webp";
import taller2 from "../assets/img webp/Talleres/pexels-mikhail-nilov-6944357.webp";

export const Talleres = () => {
  return (
    <div className="p-2">
      <h1 className="text-6xl text-center font-bold my-20">Talleres</h1>
      <section className="md:w-[70%] mx-auto">
        <TarjetasTalleres
          titulo="Taller de meditación"
          texto="Bienvenidos al Taller de Meditación «Explorando la Paz Interior». La meditación es una práctica antigua que nos brinda la oportunidad de conectar con nosotros mismos, reducir el estrés y encontrar la calma en medio del ajetreo y el bullicio de la vida cotidiana. Este taller tiene como objetivo introducirte en el mundo de la meditación, proporcionarte herramientas prácticas y guía para desarrollar una práctica personal significativa, y explorar juntos el camino hacia la paz interior y el bienestar.
          A medida que concluye nuestro taller de meditación, te invitamos a llevar contigo las lecciones aprendidas y las prácticas adquiridas en tu viaje hacia la paz interior. La meditación es una habilidad que se cultiva con la práctica constante, y esperamos que encuentres en ella una herramienta valiosa para enriquecer tu vida y bienestar. ¡Gracias por unirte a nosotros en este viaje de autodescubrimiento y crecimiento!
          Recuerda que la meditación es una experiencia personal y única para cada individuo, y no hay una forma «correcta» de hacerlo. Lo más importante es tu disposición a explorar, aprender y crecer a través de esta práctica. ¡Namasté!"
          img={taller}
        />
        <TarjetasTalleres
          titulo="Cumpleaños/Despedidas Holistico"
          texto="Una despedida de soltera holística es un enfoque alternativo y más consciente para celebrar la próxima boda de una mujer. En lugar de centrarse en actividades tradicionales como juegos, bailes y bebidas alcohólicas, una despedida de soltera holística se enfoca en promover el bienestar emocional, físico y espiritual de la novia. La idea detrás de una despedida de soltera holística es crear un ambiente relajado y enfocado en el bienestar de la novia, donde pueda conectarse consigo misma y con sus seres queridos de una manera más profunda y significativa. Este enfoque se aleja de las actividades típicas de despedida de soltera y busca promover una experiencia más equilibrada y enriquecedora"
          img={taller1}
        />
        <TarjetasTalleres
          titulo="Tarot Grupal"
          texto="¿Estás listo para sumergirte en el misterioso mundo del tarot y descubrir lo que el destino tiene reservado para ti y tus amigos? Únete a nosotros en un evento especial de Lecturas de Tarot en Grupo, donde la magia se combina con la camaradería para ofrecerte una experiencia única e inolvidable. Cada participante recibirá una lectura personalizada adaptada a sus preguntas y preocupaciones específicas, sumérgete en un ambiente relajado y acogedor, perfecto para explorar el mundo del tarot con amigos, comparte tus experiencias y descubrimientos con otros participantes en un ambiente de apoyo y comprensión. ¡Prepárate para una experiencia fascinante de autoexploración y conexión espiritual! No pierdas la oportunidad de descubrir lo que las cartas tienen reservado para ti y tus amigos. ¡Reserva tu lugar ahora y déjate guiar por el asombroso mundo del tarot!
"
          img={taller2}
        />
      </section>
    </div>
  );
};
