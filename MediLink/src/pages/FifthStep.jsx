import HeaderDP from "../components/DashboardPaciente/HeaderDP";
import { useNavigate } from "react-router-dom";
import Tarjeta from "../assets/Tarjeta.svg";
import QR from "../assets/QR.svg";

const FifthStep = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderDP />
      <div className="mt-8 w-[800px] m-auto rounded-[20px] shadow-xl border">
        <div className="text-[#1D2E50] flex flex-col justify-center items-start ">
          {" "}
          {/* Cambiado 'items-center' a 'items-start' */}
          <img
            src="webpay.png"
            alt="Imagen de WebPay"
            className="pl-7 py-10"
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
          <h2 className="text-center flex ml-44 mt-16 justify-center items-center font-medium text-[24px]">
            Seleccionar metodo de pago - Telemedicina
          </h2>
          <hr className="w-[600px] border-t border-[#4B81B4] mx-auto my-4" />
          <div className=" mt-8 flex flex-col justify-center items-center">
            <div
              className="flex flex-row border w-[500px] rounded-lg ml-[140px] shadow-md cursor-pointer focus:ring-2 focus:ring-[#4B81B4]"
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
            <div
              className="flex flex-row border w-[500px] rounded-lg ml-[140px] shadow-md cursor-pointer focus:ring-2 focus:ring-[#4B81B4] mt-5"
              tabIndex={0}
            >
              <img
                src={QR}
                alt="Icono de Qr"
                className="pl-2"
              />
              <div className="flex flex-col ml-5 p-1">
                <h1 className="font-medium">OnePay</h1>
                <p>Y otras billeteras digitales...</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mt-8 py-8 w-[700px] m-auto">
            <div
              className="text-[#1D2E50] font-medium text-[20px] cursor-pointer flex items-center"
              onClick={() => navigate(-1)}
            >
              <a className="mr-2 text-[24px] text-[#1D2E50]">&lt;</a> Volver
            </div>
            <button
              type="button"
              onClick={() => navigate("/sixthstep")}
              className="bg-[#1D2E50] text-white text-[20px] px-14 py-2 font-medium rounded-xl hover:bg-blue-950  focus:outline-none focus:ring-2 focus:ring-blue-950"
            >
              Pagar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthStep;
