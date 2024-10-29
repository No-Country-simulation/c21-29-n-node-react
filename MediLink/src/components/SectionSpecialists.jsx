import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Specialists from "../assets/specialists.png";

const SectionSpecialists = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: false,    
    });

    AOS.refresh();
  }, []);

  return (
    <div className="p-8 flex justify-center py-16">
      <div className="bg-white shadow-[0_5px_10px_rgba(0,0,0,0.25)] rounded-xl flex w-[1340px] h-[397px]">
        <div
          className="flex flex-col justify-center p-8 w-1/2"
          data-aos="fade-right" 
        >
          <h3 className="pl-10 text-[24px] leading-[32px] font-medium text-[#1D2E50] mb-4">
            Te invitamos a conocer a nuestros <br /> especialistas
          </h3>
          <p className="pl-10 text-[20px] text-[#1D2E50] leading-[28px] mb-10">
            Un equipo de trabajo multidisciplinario que te <br />
            entrega alternativas de atención y tratamientos <br />
            para diversas patologías.
          </p>
          <button className="ml-10 font-medium px-12 py-3 bg-[#1D2E50] text-white rounded-xl shadow-md hover:bg-[#4B81B4] transition self-start">
            Conocer más
          </button>
        </div>

        <div
          className="w-1/2"
          data-aos="fade-left" 
        >
          <img
            src={Specialists}
            alt="Especialistas"
            className="w-full h-full object-cover rounded-r-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionSpecialists;
