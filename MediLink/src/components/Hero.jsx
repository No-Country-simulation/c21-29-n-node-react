import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      once: true, // Solo animar una vez, no en scroll de regreso
    });
  }, []);
  
  return (
    <div className=" mx-auto rounded-xl mt-12 mb-20 font-abc w-[1340px] h-[458px] flex justify-around items-center shadow-[0_5px_10px_rgba(0,0,0,0.25)]">
      <div 
        className="ml-24 flex flex-col justify-center items-start"
        data-aos="fade-right" // Anima desde la izquierda hacia la derecha
      >
        <h2 className="text-[34px] w-[500px] text-[#1D2E50]">
          Realiza hoy tus examenes <br />
          preventivos
        </h2>
        <p className="text-[20px] mt-8 text-[#1D2E50]">
          Detectá a tiempo el cáncer de máma
        </p>
        <button className="font-medium text-[20px] leading-7 w-[204px] mt-12 h-[56px] bg-[#1D2E50] text-[#FFFFFF] rounded-xl shadow-md hover:bg-[#4B81B4] transition">
          Reservar exámen
        </button>
      </div>

      <div 
        className="flex justify-center items-center"
        data-aos="fade-left" // Anima desde la derecha hacia la izquierda
      >
        <img
          className="ml-6 rounded-xl"
          src="hero.png"
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Hero;
