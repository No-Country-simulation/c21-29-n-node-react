import { useState, useEffect } from "react";

const HoraEspecialistas = ({ selectedDate, onHourSelect }) => {
  const [selectedHour, setSelectedHour] = useState(null);
  const doctorName = "Maria Lidia Lorca Giordano";

  useEffect(() => {
    localStorage.setItem("doctorName", doctorName);
  }, []);

  const handleSelectHour = (hour) => {
    setSelectedHour(hour);
    onHourSelect(hour);
  };

  return (
    <div className="p-4 w-[691px] h-[364] mt-8">
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex flex-col space-y-4 md:w-2/3">
          <div className="flex flex-col space-y-2">
            <h3 className="text-[20px] font-bold text-[#1D2E50]">{doctorName}</h3>
            <p className="text-[#1D2E50] text-[20px]">Dermatologa</p>
          </div>



          <div className="flex items-start space-x-4">
            <button className="bg-[#4B81B4] text-white px-5 py-3 text-[20px] rounded-md font-normal">
              AM
            </button>
            <div className="flex space-x-2">
              {["10:15", "11:00", "11:30"].map((hour) => (
                <button
                  key={hour}
                  onClick={() => handleSelectHour(hour)}
                  className={`px-5 py-3 rounded-md text-[20px] border border-gray-600 ${
                    selectedHour === hour
                      ? "bg-green-100 border border-[#4B81B4] text-[#1D2E50]"
                      : "bg-white border border-gray-300 text-black"
                  }`}
                >
                  {hour}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <button className="bg-[#4B81B4] text-white px-5 py-3 rounded-md font-normal text-[20px]">
              PM
            </button>
            <div className="flex space-x-2">
              {["14:00", "15:00"].map((hour) => (
                <button
                  key={hour}
                  onClick={() => handleSelectHour(hour)}
                  className={`px-5 py-3 rounded-md text-[20px] border border-gray-600 ${
                    selectedHour === hour
                      ? "bg-green-100 border border-[#4B81B4] text-[#1D2E50]"
                      : "bg-white border border-gray-300 text-black"
                  }`}
                >
                  {hour}
                </button>
              ))}
            </div>
          </div>

          <div className="flex">
            <button className="text-[20px] mt-16 rounded-2xl py-2 w-[285px] bg-[#1D2E50] text-[#FFFFFF]">
              Ver más horas disponibles
            </button>
          </div>
        </div>

        <div>
          <img
            src="doctor1.png"
            alt="Doctor"
            className="w-[292px] h-[364px] max-w-xs mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HoraEspecialistas;
