import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import DashboardPaciente from "../pages/DashboardPaciente";
import Login from "../pages/Login";
import FirstStep from "../pages/FirstStep";
import SecondStep from "../pages/SecondStep";
import ThirdStep from "../pages/ThirdStep";
import FourthStep from "../pages/FourthStep";
import FifthStep from "../pages/FifthStep";
import SixthStep from "../pages/SixthStep";
import SeventhStep from "../pages/SeventhStep";

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/dashboardpaciente"
        element={<DashboardPaciente />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/firststep"
        element={<FirstStep />}
      />
      <Route
        path="/secondstep"
        element={<SecondStep />}
      />
      <Route
        path="/thirdstep"
        element={<ThirdStep />}
      />
      <Route
        path="/fourthstep"
        element={<FourthStep />}
      />
      <Route
        path="/fIfthstep"
        element={<FifthStep />}
      />
      <Route
        path="/sixthstep"
        element={<SixthStep />}
      />
      <Route
        path="/seventhstep"
        element={<SeventhStep />}
      />
    </Routes>
  );
};

export default Routers;
