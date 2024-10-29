import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import DashboardMain from "../../pages/DashboardMain";
import CerrarSesion from "../../assets/Cerrarsesion.svg";

const SidePanel = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    window.scrollTo(0, 0); // Esto hace que la página se desplace hacia arriba al cerrar sesión
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
        return (
          <div className="p-6">
            <h1 className="text-2xl">Contenido de Citas</h1>
          </div>
        );
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
      <div className="w-80 h-[822px] font-abc bg-white text-[#1D2E50] font-medium flex flex-col justify-between p-6">
        <div>
          <h2 className="text-2xl ml-2 font-medium mb-8">Menú</h2>

          {/* Items del Menú */}
          <ul className="space-y-4 text-[20px]">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`flex justify-between rounded-2xl items-center cursor-pointer p-2 ${
                  selectedItem === index
                    ? "bg-[#4B81B4] text-white"
                    : "bg-transparent"
                } hover:bg-gray-300`}
                onClick={() => setSelectedItem(index)}
              >
                <span>{item}</span>
                <FontAwesomeIcon icon={faChevronRight} />
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
