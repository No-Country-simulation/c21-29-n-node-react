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

      <div className=" font-abc border-[1px] rounded-[20px] mt-8 w-[800px] m-auto shadow-lg">
        <div className="flex items-center justify-center w-[359px] max-w-xl mx-auto pt-10">
          {/* Paso 1 - */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#1D2E50] rounded-full flex items-center justify-center">
              <span className="text-white font-normal">1</span>
            </div>
            <div className="w-14 h-1 bg-[#1D2E50]"></div>
          </div>

          {/* Paso 2 */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#1D2E50] rounded-full flex items-center justify-center">
              <span className="text-white font-normal">2</span>
            </div>
            <div className="w-14 h-1 bg-[#1D2E50]"></div>
          </div>

          {/* Paso 3 */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#1D2E50] rounded-full flex items-center justify-center">
              <span className="text-white font-normal">3</span>
            </div>
            <div className="w-14 h-1 bg-[#1D2E50]"></div>
          </div>

          {/* Paso 4 */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#4B81B4] rounded-full flex items-center justify-center">
              <span className="text-white font-normal">4</span>
            </div>
          </div>
        </div>

        <div className="w-[500px] items-center m-auto border-b-[1px] pb-5 border-[#4B81B4]">
          <h1 className="mt-16 text-[24px] font-medium text-[#1D2E50] font-abc text-center ">
            Detalles de la reserva - Telemedicina
          </h1>
        </div>

        <div className="flex justify-center mt-8 gap-8 text-[#1D2E50] ">
          <div className=" flex flex-col  items-center rounded-xl border border-[#1D2E50] shadow-md text-center w-[155px] h-[210px]">
            <h3 className="text-2xl leading-8 font-medium pt-6">
              {mes.toUpperCase()}
            </h3>
            <h1 className="text-[24px] leading-8 font-normal pt-2">
              {fecha.split("-")[2]}
            </h1>
            <h4 className="text-[20px] leading-7 font-normal pt-2">Jueves</h4>

            <p className="text-xl mt-4 pt-2 border-t-[1px] border-[#4B81B4]">
              {hora} hs
            </p>
          </div>

          <div className="bg-white text-[#1D2E50] px-6 flex flex-col justify-center  h-[210px] pt-5">
            <div className="mb-4">
              <h3 className="text-lg font-medium">
                Paciente:{" "}
                <span className="font-normal">
                  {" "}
                  {userData
                    ? userData.nombreCompleto
                    : JSON.parse(localStorage.getItem("loggedUser"))
                        ?.nombreCompleto || "Nombre no disponible"}
                </span>
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium">
                Previsión: <span className="font-normal">{prevision}</span>
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium">
                Especialidad:{" "}
                <span className="font-normal">{especialidad}</span>
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium">
                Especialista: <span className="font-normal">{doctorName}</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="flex justify-around items-center text-[#1D2E50] gap-48 mt-8 p-8">
          <div
            className="text-[#1D2E50] font-medium text-[20px] cursor-pointer flex items-center"
            onClick={() => navigate(-1)}
          >
            <a className="mr-2 text-[24px] text-[#1D2E50]">&lt;</a> Volver
          </div>
          <button
            type="button"
            onClick={() => navigate("/fourthstep")}
            className="bg-[#1D2E50] text-white text-[20px] py-2 font-medium rounded-xl hover:bg-[#4B81B4] px-14 "
          >
            Pagar
          </button>
        </div>
      </div>
    </>
  );
};

export default ThirdStep;
