import { useState } from "react";
import HeaderDP from "../components/DashboardPaciente/HeaderDP";
import { useNavigate } from "react-router-dom";

const FirstStep = () => {
  const navigate = useNavigate();

  const [prevision, setPrevision] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [mes, setMes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("prevision", prevision);
    localStorage.setItem("especialidad", especialidad);
    localStorage.setItem("mes", mes);

    navigate("/secondstep");
  };

  return (
    <>
      <HeaderDP />
      <div className="font-abc flex flex-col mx-auto mt-8 h-auto items-center w-[476px] rounded-xl shadow-[0px_10px_30px_rgba(0,0,0,0.4)] mb-14 ">
        <div className="flex items-center justify-center w-[359px] max-w-xl mx-auto pt-10 ">
          {/* Paso 1 - Activo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#1D2E50] rounded-full flex items-center justify-center">
              <span className="text-white font-normal">1</span>
            </div>
            <div className="w-14 h-1 bg-[#1D2E50]"></div>
          </div>

          {/* Paso 2 */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#4B81B4] rounded-full flex items-center justify-center">
              <span className="text-white font-normal">2</span>
            </div>
            <div className="w-14 h-1 bg-[#4B81B4]"></div>
          </div>

          {/* Paso 3 */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#4B81B4] rounded-full flex items-center justify-center">
              <span className="text-white font-normal">3</span>
            </div>
            <div className="w-14 h-1 bg-[#4B81B4]"></div>
          </div>

          {/* Paso 4 */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#4B81B4] rounded-full flex items-center justify-center">
              <span className="text-white font-normal">4</span>
            </div>
          </div>
        </div>

        <h1 className="text-[24px] font-medium font-abc text-center mt-16 text-[#1D2E50] pb-10">
          Reserva Telemedicina
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-[476px] bg-white p-6 rounded shadow-md "
        >
          {/* Previsión */}
          <div className="mb-4">
            <label
              htmlFor="prevision"
              className="block text-[16px] font-normal text-[#1D2E50] mb-2 size-4 leading-[18.75px]"
            >
              Previsión
            </label>
            <select
              id="prevision"
              className="w-full px-4 py-4 mt-2 border-b-2 border-gray-400 text-[#1D2E50] rounded-b-2xl outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={prevision}
              onChange={(e) => setPrevision(e.target.value)} // Actualiza el estado al cambiar
              required
            >
              <option
                value=""
                disabled
                className="text-[15px] text-[#1D2E50]"
              >
                Seleccionar Previsión
              </option>
              <option
                value="Prevision1"
                className="text-[15px] text-[#1D2E50]"
              >
                Previsión 1
              </option>
              <option
                value="Prevision2"
                className="text-[15px] text-[#1D2E50]"
              >
                Previsión 2
              </option>
            </select>
          </div>

          {/* Especialidad */}
          <div className="mb-4">
            <label
              htmlFor="especialidad"
              className="block text-[16px] font-normal text-[#1D2E50] mb-2 size-4 leading-[18.75px] mt-10"
            >
              Especialidad
            </label>
            <select
              id="especialidad"
              className="w-full px-4 py-4 mt-2 border-b-2 text-[#1D2E50] border-gray-400 rounded-b-2xl outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={especialidad}
              onChange={(e) => setEspecialidad(e.target.value)} // Actualiza el estado al cambiar
              required
            >
              <option
                value=""
                disabled
                className="text-[15px] text-[#1D2E50]"
              >
                Seleccionar Especialidad
              </option>
              <option
                value="Dermatología"
                className="text-[15px] text-[#1D2E50]"
              >
                Dermatologia
              </option>
              <option
                value="Cardiología"
                className="text-[15px] text-[#1D2E50]"
              >
                Cardiología
              </option>
            </select>
          </div>

          {/* Mes */}
          <div className="mb-6">
            <label
              htmlFor="mes"
              className="block text-[16px] font-normal text-[#1D2E50] mb-2 size-4 leading-[18.75px] mt-10"
            >
              Mes
            </label>
            <select
              id="mes"
              className="w-full px-4 py-4 mt-2 border-b-2 text-[#1D2E50] border-gray-400 rounded-b-2xl outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={mes}
              onChange={(e) => setMes(e.target.value)}
              required
            >
              <option
                value=""
                disabled
                className="text-[15px] text-[#1D2E50]"
              >
                Seleccionar Mes
              </option>
              <option
                value="Enero"
                className="text-[15px] text-[#1D2E50]"
              >
                Enero
              </option>
              <option
                value="Febrero"
                className="text-[15px] text-[#1D2E50]"
              >
                Febrero
              </option>
              <option
                value="Marzo"
                className="text-[15px] text-[#1D2E50]"
              >
                Marzo
              </option>
              <option
                value="Abril"
                className="text-[15px] text-[#1D2E50]"
              >
                Abril
              </option>
              <option
                value="Mayo"
                className="text-[15px] text-[#1D2E50]"
              >
                Mayo
              </option>
              <option
                value="Junio"
                className="text-[15px] text-[#1D2E50]"
              >
                Junio
              </option>
              <option
                value="Julio"
                className="text-[15px] text-[#1D2E50]"
              >
                Julio
              </option>
              <option
                value="Agosto"
                className="text-[15px] text-[#1D2E50]"
              >
                Agosto
              </option>
              <option
                value="Setiembre"
                className="text-[15px] text-[#1D2E50]"
              >
                Setiembre
              </option>
              <option
                value="Octubre"
                className="text-[15px] text-[#1D2E50]"
              >
                Octubre
              </option>
              <option
                value="Noviembre"
                className="text-[15px] text-[#1D2E50]"
              >
                Noviembre
              </option>
              <option
                value="Diciembre"
                className="text-[15px] text-[#1D2E50]"
              >
                Diciembre
              </option>
            </select>
          </div>

          {/* Botón y enlace */}
          <div className="flex justify-between items-center mt-16">
            <div
              className="text-gray-700 font-medium text-[20px] leading-7 cursor-pointer flex items-center"
              onClick={() => navigate(-1)}
            >
              <a className="mr-2 text-[20px] text-gray-700">&lt;</a>
              Volver
            </div>
            <button
              type="submit"
              className="bg-[#1D2E50] text-white text-[20px] px-8 py-2 font-normal rounded-xl hover:bg-[#4B81B4] focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Buscar hora
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FirstStep;
