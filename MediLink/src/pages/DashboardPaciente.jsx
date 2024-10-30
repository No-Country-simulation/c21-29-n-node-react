import HeaderDP from "../components/DashboardPaciente/HeaderDP";
import SidePanel from "../components/DashboardPaciente/PanelLateral";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Asegúrate de importar los estilos de react-toastify

const DashboardPaciente = () => {
  return (
    <>
      <HeaderDP />
      <SidePanel />

      {/* ToastContainer para mostrar notificaciones */}
      <ToastContainer />
    </>
  );
};

export default DashboardPaciente;