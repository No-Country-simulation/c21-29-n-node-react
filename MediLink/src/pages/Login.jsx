import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoHeader from "../assets/LogoHeader.svg";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    dni: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.dni) {
      newErrors.dni = "Este campo es obligatorio";
    }
    if (!formData.password) {
      newErrors.password = "Este campo es obligatorio";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const foundUser = users.find(
        (user) =>
          user.dni === formData.dni && user.password === formData.password
      );

      if (foundUser) {
        // Actualizar localStorage con el usuario autenticado
        localStorage.setItem("loggedUser", JSON.stringify(foundUser));

        // Navegar al dashboard
        navigate("/DashboardPaciente");
      } else {
        setErrors({ form: "DNI o contraseña incorrectos" });
      }
    }
  };

  return (
    <div className="mt-4 font-abc w-[474px]  mx-auto bg-white p-6 rounded-xl shadow-[0px_10px_30px_rgba(0,0,0,0.4)]">
      {/* Flecha y Volver */}
      <div
        className="flex items-center p-4 mb-6 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <a className="text-4xl text-[#1D2E50]">{"<"} </a>
        <a className="ml-2 text-2xl font-medium text-[#1D2E50]">Volver</a>
      </div>

      {/* Título */}
      <div className="flex items-center ml-4 space-x-8">
        <h1 className=" pl-5 text-[24px] text-[#1D2E50] font-medium">
          Bienvenido a
        </h1>

        <div className="flex items-center">
          <span className="text-[30px] font-medium text-[#4B81B4]">Mi</span>
          <img
            src={LogoHeader}
            alt="Logo"
          />
        </div>
      </div>

      <form
        className="space-y-6 p-4 mt-12"
        onSubmit={handleSubmit}
      >
        {/* DNI */}
        <div>
          <label
            className="block text-[#1D2E50] text-[1rem] font-medium mb-2"
            htmlFor="dni"
          >
            Ingresa tu DNI
          </label>
          <input
            type="text"
            id="dni"
            name="dni"
            placeholder="DNI"
            value={formData.dni}
            onChange={handleChange}
            className="w-full px-4 py-4 mt-2 border-b-2 border-[#1D2E50] rounded-b-2xl outline-none transition-all duration-300 bg-white"
          />
          <div className="h-5">
            {errors.dni && <p className="text-red-500 text-sm">{errors.dni}</p>}
          </div>
        </div>

        {/* Contraseña */}
        <div>
          <label
            className="text-[#1D2E50] text-[1rem] font-medium mb-2"
            htmlFor="password"
          >
            Ingresa tu contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-4 mt-2 border-b-2 border-[#1D2E50] rounded-b-xl outline-none transition-all duration-300 bg-white"
          />
          <div className="h-5">
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
        </div>

        {/* Mensaje de error del formulario */}
        {errors.form && <p className="text-red-500 text-sm">{errors.form}</p>}

        {/* Botones Registrarse e Iniciar Sesión */}
        <div className="flex justify-between">
          <button
            type="button"
            className="border-b-[3px] font-medium px-12 py-2 bg-white text-gray-600 border-2 border-gray-500 rounded-xl shadow-md hover:bg-gray-200 transition"
            onClick={() => navigate("/register")}
          >
            Registrarse
          </button>
          <button
            type="submit"
            className="font-medium px-12 py-2 bg-[#1D2E50] text-white rounded-xl shadow-md hover:bg-[#4B81B4] transition"
          >
            Ingresar
          </button>
        </div>
        <span className="flex justify-end font-semibold text-[#1D2E50]">
          ¿Olvidaste tu contraseña?
        </span>
      </form>
    </div>
  );
};

export default Login;
