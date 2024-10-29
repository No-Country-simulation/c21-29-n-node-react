import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoHeader from "../assets/LogoHeader.svg";

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

  // Validar si el DNI ya está registrado en localStorage
  const dniAlreadyExists = (dni) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    return existingUsers.some((user) => user.dni === dni);
  };

  // Validar los campos del formulario
  const validateForm = () => {
    const newErrors = {};

    // Validar campos vacíos
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = "Este campo es obligatorio";
      }
    }

    // Validar que el DNI sea de 8 dígitos numéricos
    if (!/^\d{8}$/.test(formData.dni)) {
      newErrors.dni = "El DNI debe tener exactamente 8 números";
    }

    // Validar si el DNI ya está registrado
    if (dniAlreadyExists(formData.dni)) {
      newErrors.dni = "Este DNI ya está registrado";
    }

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.repeatPassword) {
      newErrors.repeatPassword = "Las contraseñas no coinciden";
    }

    // Validar el día
    if (
      formData.dia &&
      (parseInt(formData.dia) < 1 || parseInt(formData.dia) > 31)
    ) {
      newErrors.dia = "Día inválido (debe ser entre 1 y 31)";
    }

    // Validar el mes
    if (
      formData.mes &&
      (parseInt(formData.mes) < 1 || parseInt(formData.mes) > 12)
    ) {
      newErrors.mes = "Mes inválido (debe ser entre 1 y 12)";
    }

    // Validar el año
    const currentYear = new Date().getFullYear();
    if (
      formData.ano &&
      (parseInt(formData.ano) < 1900 || parseInt(formData.ano) > currentYear)
    ) {
      newErrors.ano = `Año inválido (debe estar entre 1900 y ${currentYear})`;
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
      localStorage.setItem(
        "loggedUser",
        JSON.stringify({ nombreCompleto: formData.nombreCompleto })
      );

      // Redirigir al dashboard
      navigate("/DashboardPaciente");
    }
  };

  return (
    <div className="mt-4 font-abc w-[474px] h-auto mx-auto bg-white p-6 rounded-xl shadow-[0px_10px_30px_rgba(0,0,0,0.4)]">
      {/* Flecha y Volver */}
      <div
        className="flex items-center p-4 mb-6 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <a className="text-2xl text-[#1D2E50]">{"<"} </a>
        <a className="ml-2 text-base font-medium text-[#1D2E50]">Volver</a>
      </div>

      {/* Título */}
      <div className="flex items-center ml-4 space-x-8">
        <h1 className="text-[24px]  pl-4 text-[#1D2E50] font-medium">
          Crear cuenta
        </h1>
        <div className="flex items-center">
          <span className="text-[30px] font-medium text-[#4B81B4]">Mi</span>
          <img
            src={LogoHeader}
            alt="Logo"
          />
        </div>
      </div>

      {/* Formulario */}
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
            className={`w-full px-4 py-4 mt-2 border-b-2 border-[#1D2E50] rounded-b-2xl outline-none transition-all duration-300 
              ${focusedInput === "dni" ? "bg-[#DDE6EB]" : "bg-white"}`}
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
              ${
                focusedInput === "nombreCompleto" ? "bg-[#DDE6EB]" : "bg-white"
              }`}
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
                ${focusedInput === "dia" ? "bg-[#DDE6EB]" : "bg-white"}`}
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
                ${focusedInput === "mes" ? "bg-[#DDE6EB]" : "bg-white"}`}
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
                ${focusedInput === "ano" ? "bg-[#DDE6EB]" : "bg-white"}`}
              onFocus={() => handleFocus("ano")}
            />
          </div>
          <div className="h-5">
            {errors.dia && <p className="text-red-500 text-sm">{errors.dia}</p>}
            {errors.mes && <p className="text-red-500 text-sm">{errors.mes}</p>}
            {errors.ano && <p className="text-red-500 text-sm">{errors.ano}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            className="block text-[#1D2E50] text-[1rem] font-medium mb-2"
            htmlFor="email"
          >
            Ingresa tu email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-4 mt-2 border-b-2 border-[#1D2E50] rounded-b-2xl outline-none transition-all duration-300 
              ${focusedInput === "email" ? "bg-[#DDE6EB]" : "bg-white"}`}
            onFocus={() => handleFocus("email")}
          />
          <div className="h-5">
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Contraseña */}
        <div>
          <label
            className="block text-[#1D2E50] text-[1rem] font-medium mb-2"
            htmlFor="password"
          >
            Crea tu contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-4 mt-2 border-b-2 border-[#1D2E50] rounded-b-2xl outline-none transition-all duration-300 
              ${focusedInput === "password" ? "bg-[#DDE6EB]" : "bg-white"}`}
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
            className="block text-[#1D2E50] text-[1rem] font-medium mb-2"
            htmlFor="repeatPassword"
          >
            Repite tu contraseña
          </label>
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            placeholder="Repite tu contraseña"
            value={formData.repeatPassword}
            onChange={handleChange}
            className={`w-full px-4 py-4 mt-2 border-b-2 border-[#1D2E50] rounded-b-2xl outline-none transition-all duration-300 
              ${
                focusedInput === "repeatPassword" ? "bg-[#DDE6EB]" : "bg-white"
              }`}
            onFocus={() => handleFocus("repeatPassword")}
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
            className="px-12 bg-[#1D2E50] text-2xl font-sm  text-white py-4 rounded-xl hover:bg-gray-600 transition duration-300 ease-in-out"
          >
            Crear Cuenta
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
