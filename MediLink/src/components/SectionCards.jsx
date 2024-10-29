import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ExamenIcono from "../assets/ExamenIcono.svg";
import Telemedicina from "../assets/Telemedicina.svg";
import Doctor from "../assets/Doctor.svg";

const SectionCards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: false,    
    });

    AOS.refresh();
  }, []);

  return (
    <div className="bg-[#DDE6EB] py-10">
      <div className="px-14 pb-6 border-red-500">
        <p className="mb-3 text-left ml-[10px] text-[24px] font-abc font-normal leading-[32px] text-[#1D2E50]">
          ¿Por qué nosotros?
        </p>
        <p className="text-left ml-[10px] text-[24px] font-abc font-medium leading-[32px] tracking-[0.0025em] text-[#1D2E50]">
          Nuestra plataforma te ofrece atención médica rápida y segura, desde donde estés.
        </p>
      </div>

      <div className="flex justify-evenly gap-8 mt-8">
        <div
          className="bg-white border-[#1D2E50] shadow-[0_5px_10px_rgba(0,0,0,0.25)] rounded-[20px] p-[32px] w-[400px] min-h-[485px] max-h-[576px] gap-[35px]"
          data-aos="fade-right"
        >
          <div className="flex flex-col items-center">
            <img className="text-[#1D2E50] mb-8 items-center" src={Doctor} alt="Icono de Doctor" />
            <h3 className="text-center text-[24px] font-medium text-[#1D2E50] mb-8">
              Médico de Guardia
            </h3>
            <p className="text-left text-[16px] text-[#1D2E50] leading-[26px] mb-10 px-5">
              En caso de emergencia o si necesitas atención en menos de 24 horas, te ofrecemos nuestro servicio de telemedicina con nuestro médico de guardia 24/7.
            </p>
            <button className="mb-6 font-medium px-12 p-3 bg-[#1D2E50] text-white rounded-xl shadow-md hover:bg-[#4B81B4] transition">
              Reservar
            </button>
            <button className="font-medium px-8 p-3 bg-white text-[#1D2E50] border-[3px] border-[#1D2E50] rounded-xl shadow-md hover:bg-[#DDE6EB] transition">
              Conocer más
            </button>
          </div>
        </div>

        <div
          className="bg-white border-[#1D2E50] shadow-[0_5px_10px_rgba(0,0,0,0.25)] rounded-[20px] p-[32px] w-[400px] min-h-[485px] max-h-[576px] gap-[35px]"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center">
            <img className="text-[#1D2E50] mb-8 items-center" src={Telemedicina} alt="Icono de Telemedicina" />
            <h3 className="text-center text-[24px] font-medium text-[#1D2E50] mb-8">
              Telemedicina
            </h3>
            <p className="text-left text-[16px] text-[#1D2E50] leading-[26px] mb-10 px-5">
              Ya no necesitas perder tiempo en traslados y salas de espera, con nuestro servicio de telemedicina, conéctate con un especialista estés donde estés.
            </p>
            <button className="mb-6 font-medium px-12 p-3 bg-[#1D2E50] text-white rounded-xl shadow-md hover:bg-[#4B81B4] transition">
              Reservar
            </button>
            <button className="font-medium px-8 p-3 bg-white text-[#1D2E50] border-[3px] border-[#1D2E50] rounded-xl shadow-md hover:bg-[#DDE6EB] transition">
              Conocer más
            </button>
          </div>
        </div>

        <div
          className="bg-white border-[#1D2E50] shadow-[0_5px_10px_rgba(0,0,0,0.25)] rounded-[20px] p-[32px] w-[400px] min-h-[485px] max-h-[576px] gap-[35px]"
          data-aos="fade-left"
        >
          <div className="flex flex-col items-center">
            <img className="size-[64px]" src={ExamenIcono} alt="Icono de Examen" />
            <h3 className="text-center text-[24px] font-medium text-[#1D2E50] mb-8 mt-8">
              Exámenes
            </h3>
            <p className="text-left text-[16px] text-[#1D2E50] leading-[26px] mb-10 px-5 pb-6">
              Reserva y revisa resultados de tus exámenes en línea, cómodo y seguro. Contamos con Laboratorios acreditados.
            </p>
            <button className="mb-6 font-medium px-12 p-3 bg-[#1D2E50] text-white rounded-xl shadow-md hover:bg-[#4B81B4] transition">
              Reservar
            </button>
            <button className="font-medium px-8 p-3 bg-white text-[#1D2E50] border-[3px] border-[#1D2E50] rounded-xl shadow-md hover:bg-[#DDE6EB] transition">
              Conocer más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCards;
