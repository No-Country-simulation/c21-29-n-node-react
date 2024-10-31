import HeaderDP from "../components/DashboardPaciente/HeaderDP";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import Tarjeta from "../assets/Tarjeta.svg";

const SixthStep = () => {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");

  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/\s/g, "");
    if (input.length <= 16) {
      setCardNumber(input.match(/.{1,4}/g)?.join(" ") || "");
    }
  };

  const handleExpiryDateChange = (e) => {
    const input = e.target.value.replace(/\//g, "");
    if (input.length <= 4) {
      setExpiryDate(input.match(/.{1,2}/g)?.join("/") || "");
    }
  };

  const handleCvvChange = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    if (input.length <= 3) {
      setCvv(input);
    }
  };

  const handlePayClick = () => {
    if (!cardNumber || !expiryDate || !cvv) {
      setError("Por favor, completa todos los campos de la tarjeta.");
    } else {
      setError("");

      // Guardar los datos de la cita en localStorage
      const reservaData = {
        nombreCompleto:
          JSON.parse(localStorage.getItem("loggedUser"))?.nombreCompleto ||
          "Nombre no disponible",
        especialidad:
          localStorage.getItem("especialidad") || "Especialidad no disponible",
        mes: localStorage.getItem("mes") || "Mes no disponible",
        fecha: localStorage.getItem("selectedDate") || "Fecha no disponible",
        hora: localStorage.getItem("selectedHour") || "Hora no disponible",
        prevision:
          localStorage.getItem("prevision") || "Previsión no disponible",
        doctorName:
          localStorage.getItem("doctorName") || "Doctor no disponible",
      };

      // Guardar la reserva en el localStorage
      const citas = JSON.parse(localStorage.getItem("citas")) || [];
      citas.push(reservaData);
      localStorage.setItem("citas", JSON.stringify(citas));

      // Navegar al siguiente paso
      navigate("/seventhstep");
    }
  };

  return (
    <>
      <HeaderDP />
      <div className="flex text-[#1D2E50] pt-10 justify-around m-auto items-center w-[1200px] rounded-t-[20px] shadow-2xl">
        <div className="text-[#1D2E50] flex flex-col justify-center items-start ">
          <img
            src="webpay.png"
            alt="Imagen de WebPay"
            className="pl-7 pb-10"
          />{" "}
          {/* Agregado 'mb-4' para dar espacio entre la imagen y el siguiente contenido */}
          <div className="flex justify-around w-full items-center">
            {" "}
            {/* Cambiado 'w-[797px]' a 'w-full' para usar todo el espacio */}
            <div>
              <h4 className="text-[20px] font-medium">
                Estas pagando en <br />
                <img
                  src="flow.png"
                  alt="imagen de Flow"
                />
              </h4>
            </div>
            <div>
              <h4 className="text-[20px] font-medium">
                Monto a pagar <br />
                <span className="text-[34px] font-normal">$12000</span>
              </h4>
            </div>
          </div>
          <h2 className="m-auto flex mt-16 justify-center items-center font-medium text-[24px] mb-10">
            Metodo de pago seleccionado
          </h2>
          <div
            className="flex flex-row  w-[500px] rounded-lg  shadow-md cursor-pointer border-2 border-[#4B81B4]"
            tabIndex={0}
          >
            <img
              src={Tarjeta}
              alt="Icono de tarjeta"
              className="pl-2"
            />
            <div className="flex flex-col ml-5 p-1">
              <h1 className="font-medium">Tarjetas</h1>
              <p>Crédito, Débito, Prepago</p>
            </div>
          </div>
        </div>

        <div className="mb-4 border-l-[1.5px] pl-12 border-[#1D2E50]">
          <h4 className="text-center text-[24px] font-medium">
            Ingresar datos de la tarjeta
          </h4>
          {error && <p className="text-red-500">{error}</p>}
          <div className="mt-6 bg-[#DDE6EB] rounded-lg w-96 h-48 p-6 relative shadow-lg">
            <FaCreditCard
              className="absolute top-4 left-4 text-[#1D2E50]"
              size={28}
            />
            <div className="text-[#1D2E50] text-xl font-bold mt-24">
              {cardNumber || "XXXX XXXX XXXX XXXX"}
            </div>
            <div className="text-[#1D2E50] text-base">
              {expiryDate || "MM/AA"}
            </div>
          </div>
          <div className="mt-8">
            <h5 className="text-[15px] font-normal">Número de Tarjeta</h5>
            <input
              type="text"
              maxLength="19"
              className="rounded-lg p-3 mt-2 w-full border-b-2 border-[#1D2E50] rounded-b-2xl outline-none transition-all duration-300 bg-white"
              placeholder="XXXX XXXX XXXX XXXX"
              value={cardNumber}
              onChange={handleCardNumberChange}
              required
            />

            <h5 className="text-[15px] font-normal mt-4">
              Fecha de Expiración
            </h5>
            <input
              type="text"
              maxLength="5"
              className="rounded-lg p-3 mt-2 w-full border-b-2 border-[#1D2E50] rounded-b-2xl outline-none transition-all duration-300 bg-white"
              placeholder="MM/AA"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              required
            />
            <h5 className="text-[15px] font-normal mt-4">
              Código de verificación
            </h5>
            <input
              type="text"
              maxLength="3"
              className=" rounded-lg p-3 mt-2 w-full border-b-2 border-[#1D2E50] rounded-b-2xl outline-none transition-all duration-300 bg-white"
              placeholder="CVV"
              value={cvv}
              onChange={handleCvvChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="border-b flex justify-around items-center gap-[650px] py-10 bg-white w-[1200px] rounded-b-[20px] shadow-xl m-auto">
        <div
          className="text-[#1D2E50] font-medium text-[20px] cursor-pointer flex items-center"
          onClick={() => navigate(-1)}
        >
          <a className="mr-2 text-[24px] text-[#1D2E50]">&lt;</a> Volver
        </div>
        <button
          type="button"
          onClick={handlePayClick}
          className="bg-[#1D2E50] text-white text-[20px] px-8 py-2 font-medium rounded-xl hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-950"
        >
          Pagar
        </button>
      </div>
    </>
  );
};

export default SixthStep;
