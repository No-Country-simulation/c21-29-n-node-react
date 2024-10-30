import { useState, useEffect } from "react";
import HeaderDP from "../components/DashboardPaciente/HeaderDP";
import { useNavigate } from "react-router-dom";

const ThirdStep = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);

  // Obtén el nombre completo y otros datos directamente del localStorage
  const especialidad =
    localStorage.getItem("especialidad") || "Especialidad no disponible";
  const mes = localStorage.getItem("mes") || "Mes no disponible";
  const fecha = localStorage.getItem("selectedDate") || "Fecha no disponible";
  const hora = localStorage.getItem("selectedHour") || "Hora no disponible";
  const prevision =
    localStorage.getItem("prevision") || "Previsión no disponible";
  const doctorName =
    localStorage.getItem("doctorName") || "Doctor no disponible";

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    setUserData(storedData);
  }, []);

  return (
    <>
      <HeaderDP />

      <div className="flex items-center shadow-2xl justify-center w-[359px] max-w-xl mt-8 mx-auto">
        {/* Steps navigation */}
        <div className="flex items-center">
          {/* Step 1 */}
          <div className="w-10 h-10 bg-[#1D2E50] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">1</span>
          </div>
          <div className="w-24 h-1 bg-[#1D2E50]"></div>

          {/* Step 2 */}
          <div className="w-10 h-10 bg-[#1D2E50] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">2</span>
          </div>
          <div className="w-24 h-1 bg-[#1D2E50]"></div>

          {/* Step 3 */}
          <div className="w-10 h-10 bg-[#1D2E50] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">3</span>
          </div>
          <div className="w-24 h-1 bg-[#1D2E50]"></div>

          {/* Step 4 */}
          <div className="w-10 h-10 bg-[#4B81B4] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">4</span>
          </div>
        </div>
      </div>

      <h1 className="mt-16 text-[24px] font-medium text-[#1D2E50] font-abc text-center">
        Detalles de la reserva - Telemedicina
      </h1>
      <div className="flex justify-center mt-8 gap-8">
        <div className="bg-gray-100 p-6 flex flex-col text-[#1D2E50] justify-center items-center rounded-xl border border-[#1D2E50] shadow-md text-center w-[200px] h-auto">
          <h3 className="text-xl font-bold">{mes}</h3>
          <h1 className="text-3xl font-extrabold">{fecha.split("-")[2]}</h1>
          <h4 className="text-lg font-semibold">Jueves</h4>
          <p className="text-xl mt-2">{hora} hs</p>
        </div>

        <div className="bg-white text-[#1D2E50] p-6 rounded-lg shadow-md flex flex-col justify-center w-[300px]">
          <div className="mb-4">
            <h3 className="text-lg font-medium">
              Paciente:{" "}
             <span className="font-normal"> {userData
                ? userData.nombreCompleto
                : JSON.parse(localStorage.getItem("loggedUser"))
                    ?.nombreCompleto || "Nombre no disponible"}</span>
            </h3>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Previsión: <span className="font-normal">{prevision}</span></h3>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">
              Especialidad: <span className="font-normal">{especialidad}</span>
            </h3>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Especialista: <span className="font-normal">{doctorName}</span></h3>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-[#1D2E50] gap-48 mt-8 p-8">
        <div
          className="text-gray-700 font-medium text-[26px] cursor-pointer flex items-center"
          onClick={() => navigate(-1)}
        >
          <a className="mr-2 text-[34px] text-gray-700">&lt;</a> Volver
        </div>
        <button
          type="button"
          onClick={() => navigate("/fourthstep")}
          className="bg-[#1D2E50] text-white text-[20px] px-8 py-2 font-medium rounded-xl hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Pagar
        </button>
      </div>
    </>
  );
};

export default ThirdStep;
