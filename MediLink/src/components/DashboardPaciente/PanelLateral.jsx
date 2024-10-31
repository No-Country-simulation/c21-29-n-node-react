import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import DashboardMain from "../../pages/DashboardMain";
import CerrarSesion from "../../assets/Cerrarsesion.svg";
import ProximasCitas from "./ProximasCitas";

const SidePanel = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCitasOpen, setIsCitasOpen] = useState(false); // Estado para abrir el submenú de Citas
  const navigate = useNavigate();

  const menuItems = [
    "Inicio",
    "Perfil",
    "Citas",
    "Historial Médico",
    "Ayuda",
    "Seguridad",
  ];

  const handleLogout = () => {
    setIsModalOpen(false);
    navigate("/");
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case 0:
        return (
          <div className="bg-white">
            <DashboardMain />
          </div>
        );
      case 1:
        return (
          <div className="p-6">
            <h1 className="text-2xl">Contenido de Perfil</h1>
          </div>
        );
      case 2:
        if (isCitasOpen === "proximas") {
          return (
            <div className="p-6">
              <ProximasCitas />
            </div>
          );
        } else if (isCitasOpen === "pasadas") {
          return (
            <div className="p-6">
              <h1 className="text-2xl">Citas Pasadas</h1>
            </div>
          );
        }
        return null;
      case 3:
        return (
          <div className="p-6">
            <h1 className="text-2xl">Contenido de Historial Médico</h1>
          </div>
        );
      case 4:
        return (
          <div className="p-6">
            <h1 className="text-2xl">Contenido de Ayuda</h1>
          </div>
        );
      case 5:
        return (
          <div className="p-6">
            <h1 className="text-2xl">Contenido de Seguridad</h1>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      {/* Panel lateral */}
      <div className="w-[332px] h-[822px] font-abc bg-white text-[#1D2E50] font-medium flex flex-col justify-between p-6">
        <div>
          <h2 className="text-2xl ml-2 font-medium mb-8">Menú</h2>

          {/* Items del Menú */}
          {/* Items del Menú */}
          <ul className="space-y-4 text-[20px]">
            {menuItems.map((item, index) => (
              <li key={index}>
                <div
                  className={`flex justify-between transition-all rounded-2xl items-center cursor-pointer p-2 ${
                    selectedItem === index
                      ? "bg-[#4B81B4] text-white"
                      : "bg-transparent"
                  } hover:bg-blue-200 hover:text-[#1D2E50]`}
                  onClick={() => {
                    if (index === 2) {
                      // Si se hace clic en "Citas"
                      setIsCitasOpen(!isCitasOpen ? "open" : false);
                    } else {
                      setSelectedItem(index);
                      setIsCitasOpen(false);
                    }
                  }}
                >
                  <span>{item}</span>
                  {index === 2 ? (
                    <FontAwesomeIcon
                      icon={isCitasOpen ? faChevronDown : faChevronRight}
                    />
                  ) : (
                    <FontAwesomeIcon icon={faChevronRight} />
                  )}
                </div>

                {/* Submenú de Citas */}
                {index === 2 && isCitasOpen && (
                  <ul className="pl-6 mt-2 space-y-2">
                    <li
                      className="cursor-pointer hover:bg-blue-200 text-[14px] hover:text-[#1D2E50] p-2 rounded-xl"
                      onClick={() => {
                        setIsCitasOpen("proximas");
                        setSelectedItem(2);
                      }}
                    >
                      Próximas Citas
                    </li>
                    <li
                      className="cursor-pointer hover:bg-blue-200 text-[14px] hover:text-[#1D2E50] p-2 rounded-xl"
                      onClick={() => {
                        setIsCitasOpen("pasadas");
                        setSelectedItem(2);
                      }}
                    >
                      Citas Pasadas
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Botón de Cerrar Sesión */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex justify-between items-center hover:bg-[#4B81B4] text-[#1D2E50] p-3 rounded-md"
        >
          <span>Cerrar Sesión</span>
          <img
            src={CerrarSesion}
            alt="Icono de Cerrar Sesion"
          />
        </button>
      </div>

      {/* Contenido Principal */}
      <div className="flex-1 h-[822px] bg-gray-100 overflow-y-auto">
        {renderContent()}
      </div>

      {/* Modal de Confirmación */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
};

export default SidePanel;
