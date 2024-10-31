import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [focusedInput, setFocusedInput] = useState(null);
  const [formData, setFormData] = useState({
    dni: "",
    nombreCompleto: "",
    dia: "",
    mes: "",
    ano: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleFocus = (input) => {
    setFocusedInput(input);
    setTimeout(() => {
      setFocusedInput(null);
    }, 300);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = "Este campo es obligatorio";
      }
    }
    if (formData.password !== formData.repeatPassword) {
      newErrors.repeatPassword = "Las contraseñas no coinciden";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Crear un nuevo usuario
      const newUser = { ...formData };

      // Agregar al localStorage
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));

      // Guardar el nombre completo para el saludo en el dashboard
      localStorage.setItem("loggedUser", JSON.stringify({ nombreCompleto: formData.nombreCompleto }));


      // Redirigir al dashboard
      navigate("/DashboardPaciente");
    }
  };
  

  return (
    <div className="mt-4 font-abc w-[474px] h-[1118.33px] mx-auto bg-white p-6 rounded-xl shadow-[0px_10px_30px_rgba(0,0,0,0.4)]">
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
        <h1 className="text-[24px] text-[#1D2E50] font-medium">Crear cuenta</h1>
        <div className="flex items-center">
          <span className="text-[28px] font-medium text-[#4B81B4]">Mi</span>
          <img src="logoheader.png" alt="Logo" />
        </div>
      </div>

      {/* Formulario */}
      <form className="space-y-6 p-4 mt-12" onSubmit={handleSubmit}>
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
            minLength={6}
            id="dni"
            name="dni"
            placeholder="DNI"
            value={formData.dni}
            onChange={handleChange}
            className={`w-full px-4 py-4 mt-2 border-b-2 border-[#1D2E50] rounded-b-2xl outline-none transition-all duration-300 
              ${focusedInput === "dni" ? "bg-green-200" : "bg-white"}`}
            onFocus={() => handleFocus("dni")}
          />
          <div className="h-5">
            {errors.dni && <p className="text-red-500 text-sm">{errors.dni}</p>}
          </div>
        </div>

        {/* Nombre Completo */}
        <div>
          <label
            className="block text-[#1D2E50] text-[1rem] font-medium mb-2"
            htmlFor="nombreCompleto"
          >
            Nombre Completo
          </label>
          <input
            type="text"
            id="nombreCompleto"
            name="nombreCompleto"
            placeholder="Nombre Completo"
            value={formData.nombreCompleto}
            onChange={handleChange}
            className={`w-full px-4 py-4 mt-2 border-b-2 border-[#1D2E50] rounded-b-2xl outline-none transition-all duration-300 
              ${focusedInput === "nombreCompleto" ? "bg-green-200" : "bg-white"}`}
            onFocus={() => handleFocus("nombreCompleto")}
          />
          <div className="h-5">
            {errors.nombreCompleto && (
              <p className="text-red-500 text-sm">{errors.nombreCompleto}</p>
            )}
          </div>
        </div>

        {/* Fecha de nacimiento */}
        <div>
          <label className="mt-2 text-sm text-[#1D2E50] text-[1rem] font-medium mb-2">
            Fecha de nacimiento
          </label>
          <div className="flex space-x-4">
            <input
              type="text"
              maxLength={2}
              name="dia"
              placeholder="Día"
              value={formData.dia}
              onChange={handleChange}
              className={`w-1/3 px-4 py-4 mt-2 border-b-2 border-[#1D2E50] rounded-b-xl outline-none transition-all duration-300 
                ${focusedInput === "dia" ? "bg-green-200" : "bg-white"}`}
              onFocus={() => handleFocus("dia")}
            />
            <input
              type="text"
              name="mes"
              maxLength={2}
              placeholder="Mes"
              value={formData.mes}
              onChange={handleChange}
              className={`w-1/3 px-4 py-4 mt-2 border-b-2 rounded-b-xl border-[#1D2E50] outline-none transition-all duration-300 
                ${focusedInput === "mes" ? "bg-green-200" : "bg-white"}`}
              onFocus={() => handleFocus("mes")}
            />
            <input
              type="text"
              maxLength={4}
              name="ano"
              placeholder="Año"
              value={formData.ano}
              onChange={handleChange}
              className={`w-1/3 px-4 py-4 mt-2 border-b-2 border-[#1D2E50] rounded-b-xl outline-none transition-all duration-300 
                ${focusedInput === "ano" ? "bg-green-200" : "bg-white"}`}
              onFocus={() => handleFocus("ano")}
            />
          </div>
        </div>

        {/* Correo electrónico */}
        <div>
          <label
            className="text-sm text-[#1D2E50] text-[1rem] font-medium mb-2"
            htmlFor="email"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-4 mt-2 border-b-2 rounded-b-xl border-[#1D2E50] outline-none transition-all duration-300 
              ${focusedInput === "email" ? "bg-green-200" : "bg-white"}`}
            onFocus={() => handleFocus("email")}
          />
          <div className="h-5">
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Crear contraseña */}
        <div>
          <label
            className="text-[#1D2E50] text-[1rem] text-sm font-medium mb-2"
            htmlFor="password"
          >
            Crear contraseña
          </label>
          <input
            type="password"
            minLength={5}
            id="password"
            name="password"
            placeholder="Crear contraseña"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-4 mt-2 border-b-2 border-[#1D2E50] rounded-b-xl outline-none transition-all duration-300 
              ${focusedInput === "password" ? "bg-green-200" : "bg-white"}`}
            onFocus={() => handleFocus("password")}
          />
          <div className="h-5">
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
        </div>

        {/* Repetir contraseña */}
        <div>
          <label
            className="text-sm text-[#1D2E50] text-[1rem] font-medium mb-2"
            htmlFor="repeat-password"
          >
            Repetir contraseña
          </label>
          <input
            type="password"
            minLength={5}
            id="repeat-password"
            name="repeatPassword"
            placeholder="Repetir contraseña"
            value={formData.repeatPassword}
            onChange={handleChange}
            className={`w-full px-4 py-4 mt-2 border-b-2 border-[#1D2E50] rounded-b-xl outline-none transition-all duration-300 
              ${
                focusedInput === "repeat-password" ? "bg-green-200" : "bg-white"
              }`}
            onFocus={() => handleFocus("repeat-password")}
          />
          <div className="h-5">
            {errors.repeatPassword && (
              <p className="text-red-500 text-sm">{errors.repeatPassword}</p>
            )}
          </div>
        </div>

        {/* Botón de enviar */}
        <div className="flex justify-end mt-12">
          <button
            type="submit"
            className="px-10 bg-[#1D2E50] text-2xl font-sm  text-white py-2 rounded-xl hover:bg-blue-950 transition duration-300 ease-in-out"
          >
            Crear Cuenta
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
