import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

export const Contacto = () => {
  return (
    <div className="px-2">
      <section className="md:w-[800px] md:h-[550px] mx-auto my-32 p-6 flex flex-wrap gap-6 items-center bg-[#A38369] rounded-lg">
        <div className="w-[49%]">
          <p className="text-[#CC9955] font-semibold text-xl">
            HAZ TU PEDIDO DESDE AQUI!
          </p>
          <h2 className="text-white text-5xl font-bold my-4">Reservas</h2>
          <div className="border-2 w-12 border-[#CC9955]"></div>
          <p className="text-white font-semibold my-4">Whatsapp: 634532345</p>

          <div>
            <div className="flex">
              <div className="w-[10%] text-[#CC9955]">
                <p className="mt-2">
                  <IoLocationOutline />
                </p>
                <p className="mt-2">
                  <IoIosMail />
                </p>
                <p className="mt-2">
                  <FaInstagram />
                </p>
              </div>
              <div className="text-white">
                <p>Crevillente</p>
                <p>medicina.tradicionalchina@gmail.com</p>
                <p>@medicina.tradicionalchina</p>
              </div>
            </div>
            <h3 className="text-white font-bold my-4">HORARIO</h3>
            <p className="text-white">9:00 - 14:00 / 16:00 - 20:00</p>
            <p className="text-white">Lunes a viernes</p>
          </div>
        </div>
        <div className="md:w-[45%]">
          <h3 className="text-2xl font-semibold text-white">
            ¿En qué te podemos ayudar?
          </h3>
          <div className="border-2 w-12 my-6 border-[#CC9955]"></div>
          <form>
            <input
              className="w-full h-8 pl-4 rounded-3xl mb-4"
              style={{ background: "#ffffff", opacity: "0.2" }}
              type="text"
              placeholder="Nombre*"
              required="required"
            />
            <input
              type="email"
              placeholder="Email*"
              required="required"
              className="w-full h-8 pl-4 rounded-3xl mb-4"
              style={{ background: "#ffffff", opacity: "0.2" }}
            />
            <input
              type="text"
              placeholder="Teléfono"
              className="w-full h-8 pl-4 rounded-3xl mb-4"
              style={{ background: "#ffffff", opacity: "0.2" }}
            />
            <textarea
              placeholder="mensaje*"
              required="required"
              className="w-full h-28 pl-4 rounded-3xl mb-4"
              style={{ background: "#ffffff", opacity: "0.2" }}
            ></textarea>
            <input
              className="text-white w-full h-10 rounded-3xl shadow-lg bg-[#CC9955]"
              type="submit"
              value="Enviar mensaje"
            />
          </form>
        </div>
      </section>
    </div>
  );
};
