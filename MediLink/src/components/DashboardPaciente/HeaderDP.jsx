import { useEffect, useState } from "react";
import LogoHeader from "../../assets/LogoHeader.svg";
import Notificacion from "../../assets/Notificacion.svg";
import Perfil from "../../assets/Perfil.svg";
import { useNavigate } from "react-router-dom";

const HeaderDP = () => {
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  // Función para obtener solo el primer nombre del usuario
  const updateUserName = () => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser && loggedUser.nombreCompleto) {
      const firstName = loggedUser.nombreCompleto.split(" ")[0]; // Obtiene solo el primer nombre
      setUserName(firstName);
    } else {
      setUserName("");
    }
  };

  // useEffect para cargar el usuario al montar el componente y cuando se actualice localStorage
  useEffect(() => {
    updateUserName(); // Cargar el usuario al montar el componente

    const handleStorageChange = () => {
      updateUserName(); // Actualizar el usuario cuando cambie el localStorage
    };

    // Escuchar los cambios en el localStorage
    window.addEventListener("storage", handleStorageChange);

    // Cleanup el listener cuando se desmonte el componente
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <nav className="w-full font-abc h-[85px] flex items-center justify-between px-4 border-b-[1.5px] shadow-[0_4px_4px_rgba(0,0,0,0.2)] mb-[7px]">
      {/*  justify-around  shadow-[0_4px_4px_rgba(0,0,0,0.2)] */}
      {/* Logo */}
      <div className="flex items-center ml-4 cursor-pointer ">
        <span className="text-[30px] font-medium text-[#4B81B4]">Mi</span>
        <img
          src={LogoHeader}
          alt="Logo"
          onClick={() => navigate("/DashboardPaciente")}
        />
      </div>

      {/* Saludo, Avatar y Notificaciones */}
      <div className="flex items-center font-medium space-x-8 pr-6 ">
        {/* Saludo */}
        {userName ? (
          <p className="text-[#1D2E50] text-[24px]">¡Hola, {userName}!</p>
        ) : (
          <p className="text-[#1D2E50] text-[24px]">¡Hola, Usuario!</p>
        )}

        {/* Avatar Icono de Usuario */}
        <img
          className="cursor-pointer"
          src={Perfil}
          alt="Icono de Perfil"
        />

        {/* Icono de notificaciones */}
        <img
          className="cursor-pointer"
          src={Notificacion}
          alt="Icono de Notificacion"
        />
      </div>
    </nav>
  );
};

export default HeaderDP;
