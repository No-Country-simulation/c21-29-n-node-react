import Telemedicina from "../assets/Telemedicina.svg";
import ExamenIcono from "../assets/ExamenIcono.svg";
import Doctor from "../assets/Doctor.svg";
import { useNavigate } from "react-router-dom"; // Importar el hook useNavigate

const SectionServices = () => {
  const navigate = useNavigate(); // Inicializar el hook useNavigate

  const handleReservarClick = () => {
    navigate("/firststep"); // Redirigir a la ruta /firststep
  };

  return (
    <div className="bg-[#ffffff] h-[552px] ">
      {/* Títulos alineados a la izquierda */}
      <div className="px-14 pt-7 pb-4 ">
        <p className="mb-3 text-center ml-[10px] text-[24px] font-abc font-normal leading-[32px] text-[#1D2E50]">
          Reserva el servicio que necesites
        </p>
      </div>

      {/* Contenedor de las cards */}
      <div className="flex justify-evenly gap-8 mt-8">
        {/* Primera card */}
        <div className="bg-white border-[#1D2E50] shadow-[0_5px_10px_rgba(0,0,0,0.25)] rounded-[20px] p-[12px] w-[290px] h-[400px] gap-[35px] ">
          <div className="flex flex-col items-center">
            {/* Icono arriba del título */}
            <img
              className="size-8"
              src={Telemedicina}
              alt="Icono de Doctor"
            />
            <h3 className="mt-5 text-center text-[24px] font-medium text-[#1D2E50] mb-8">
              Telemedicina
            </h3>
            <p className="text-left text-[16px] text-[#1D2E50] font-normal leading-[26px] mb-11 px-5">
              ¡Adios! a los traslados y salas de espera. Conéctate con un
              especialista estés donde estés.
            </p>

            <button
              className="mb-6 font-medium px-12 p-3 bg-[#1D2E50] text-white rounded-xl shadow-md hover:bg-[#4B81B4] transition"
              onClick={handleReservarClick} // Añadir la función onClick para redirigir
            >
              Reservar
            </button>
            <button className="font-medium px-8 p-3 bg-white text-[#1D2E50] border-[3px] border-[#1D2E50] rounded-xl shadow-md hover:bg-gray-200 transition">
              Conocer más
            </button>
          </div>
        </div>

        {/* Segunda card */}
        <div className="bg-white border-[#1D2E50] shadow-[0_5px_10px_rgba(0,0,0,0.25)] rounded-[20px] p-[12px] w-[290px] h-[400px] max-h-[576px] gap-[35px]">
          <div className="flex flex-col items-center">
            {/* Icono arriba del título */}
            <img
              className="size-8"
              src={Doctor}
              alt="Icono de Doctor"
            />
            <h3 className="mt-5 text-center text-[24px] font-medium text-[#1D2E50] mb-8">
              Médico de turno
            </h3>
            <p className="text-left text-[16px] text-[#1D2E50] font-normal leading-[26px] mb-10 px-5">
              ¿Tienes una emergencia? Reserva con nuestro médico de turno 24/7.
            </p>

            <button className="mb-6 font-medium px-12 p-3 bg-[#1D2E50] text-white rounded-xl shadow-md hover:bg-[#4B81B4] transition">
              Reservar
            </button>
            <button className="font-medium px-8 p-3 bg-white text-[#1D2E50] border-[3px] border-[#1D2E50] rounded-xl shadow-md hover:bg-gray-200 transition">
              Conocer más
            </button>
          </div>
        </div>

        {/* Tercera card */}
        <div className="bg-white border-[#1D2E50] shadow-[0_5px_10px_rgba(0,0,0,0.25)] rounded-[20px] p-[12px] w-[290px] h-[400px] max-h-[576px] gap-[35px]">
          <div className="flex flex-col items-center">
            {/* Icono arriba del título */}
            <img
              className="size-8"
              src={ExamenIcono}
              alt="Icono de Doctor"
            />
            <h3 className="mt-5 text-center text-[24px] font-medium text-[#1D2E50] mb-8">
              Exámenes
            </h3>
            <p className="text-left text-[16px] text-[#1D2E50] font-normal leading-[26px] mb-10 px-5">
              ¡A un solo click! Realiza tus exámenes preventivos y revisa los
              resultados en linea.
            </p>

            <button className="mb-6 font-medium px-12 p-3 bg-[#1D2E50] text-white rounded-xl shadow-md hover:bg-[#4B81B4] transition">
              Reservar
            </button>
            <button className="font-medium px-8 p-3 bg-white text-[#1D2E50] border-[3px] border-[#1D2E50] rounded-xl shadow-md hover:bg-gray-200 transition">
              Conocer más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionServices;
