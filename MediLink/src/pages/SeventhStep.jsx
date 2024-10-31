import { useNavigate } from "react-router-dom";
import HeaderDP from "../components/DashboardPaciente/HeaderDP";
import Logo from "../assets/LogoHeader.svg";

const SeventhStep = () => {
  const navigate = useNavigate();
  const toDashboard = () => {
    navigate("/DashboardPaciente");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <HeaderDP />
      <div className="flex text-[#1D2E50] justify-center items-center h-screen font-abc ">
        <div className="flex border p-4 rounded-3xl flex-col w-[480px] justify-center items-center shadow-xl">
          {/* Imagen alineada a la izquierda */}
          <div className="w-full flex justify-start px-8 mb-8">
            <img
              className="w-[117px] pt-4"
              src={Logo}
              alt="Logo"
            />
          </div>

          {/* Texto centralizado */}
          <div className="text-center text-[#1D2E50] mb-8">
            <h2 className="text-[24px] text-[#1D2E50] font-medium">
              ¡Reserva exitosa!
            </h2>
            <p className="text-[20px] text-[#1D2E50] text-left mt-8">
              Tu reserva de Telemedicina fue realizada con <br />
              éxito. En la sección 'Citas' puedes encontrar tu <br />
              hora reservada.
            </p>
          </div>

          <div className="w-full flex justify-end px-8">
            <button
              onClick={toDashboard}
              className="bg-[#1D2E50] rounded-xl text-[#FFFFFF] text-[20px] font-medium px-12 py-3"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeventhStep;
