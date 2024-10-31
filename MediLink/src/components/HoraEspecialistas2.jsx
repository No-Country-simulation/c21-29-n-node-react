import { useState, useEffect } from "react";

const HoraEspecialistas2 = ({ selectedDate, onHourSelect }) => {
  const [selectedHour, setSelectedHour] = useState(null);
  const doctorName = "Roberto Salinas Larenas";

  // Función para manejar la selección de una hora
  const handleSelectHour = (hour) => {
    setSelectedHour(hour);
    onHourSelect(hour); // Notificar al padre la selección
  };

  useEffect(() => {
    localStorage.setItem("doctorName", doctorName);
  }, []);

  return (
    <div className="font-abc w-[691px] h-[364] mt-8 border-[1px] rounded-[20px]">
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Contenedor de la Información de la doctora */}
        <div className="flex flex-col space-y-4 md:w-2/3 ml-4">
          <div className="flex flex-col  ml-3">
            <h3 className="text-[24px] leading-8 font-abc font-medium text-[#1D2E50]">
              {doctorName}
            </h3>
            <p className="text-[#1D2E50] text-[20px]">Cardiólogo</p>
          </div>

          {/* Contenedor de los horarios AM */}
          <div className="flex items-start space-x-4 ml-3">
            <button className="bg-[#4B81B4] text-white p-[10px] text-[20px] leading-7 rounded-md font-normal">
              AM
            </button>
            <div className="flex space-x-2">
              {["10:15", "11:00", "11:30"].map((hour) => (
                <button
                  key={hour}
                  onClick={() => handleSelectHour(hour)}
                  className={`p-[8.3px] font-normal rounded-md text-[20px] leading-7 border-2 border-[#1D2E50] ${
                    selectedHour === hour
                      ? "bg-[#4B81B4] border-2 border-[#4B81B4] text-white"
                      : "bg-white border-2 border-[#1D2E50] text-[#1D2E50]"
                  }`}
                >
                  {hour}
                </button>
              ))}
            </div>
          </div>

          {/* Contenedor de los horarios PM */}
          <div className="flex items-start space-x-4 ml-3">
            <button className="bg-[#4B81B4] text-white p-[10px] text-[20px] leading-7 rounded-md font-normal">
              PM
            </button>
            <div className="flex space-x-2">
              {["14:00", "15:00"].map((hour) => (
                <button
                  key={hour}
                  onClick={() => handleSelectHour(hour)}
                  className={`p-[8.3px] font-normal rounded-md text-[20px] leading-7 border-2 border-[#1D2E50]   ${
                    selectedHour === hour
                      ? "bg-[#4B81B4] border-2 border-[#4B81B4] text-white"
                      : "bg-white border-2 border-[#1D2E50] text-[#1D2E50]"
                  }`}
                >
                  {hour}
                </button>
              ))}
            </div>
          </div>

          <div className="flex">
            <button className="mt-2 ml-3 text-[20px] leading-7 font-medium rounded-2xl py-[14px] w-[285px] bg-[#1D2E50] text-[#FFFFFF]">
              Ver más horas disponibles
            </button>
          </div>
        </div>

        {/* Imagen del doctor */}
        <div>
          <img
            src="doctor2.png"
            alt="Doctor"
            className="w-[292px] h-[364px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HoraEspecialistas2;
