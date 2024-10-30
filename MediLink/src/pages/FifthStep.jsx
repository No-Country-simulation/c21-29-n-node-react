import HeaderDP from "../components/DashboardPaciente/HeaderDP";
import { useNavigate } from "react-router-dom";

const FifthStep = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderDP />
      <div className="flex text-[#1D2E50] justify-center items-center  h-[914px] shadow-2xl">
        <div className="h-screen w-[797px] flex flex-col justify-center items-start">
          {" "}
          {/* Cambiado 'items-center' a 'items-start' */}
          <img src="webpay.png" alt="" className="mb-4" />{" "}
          {/* Agregado 'mb-4' para dar espacio entre la imagen y el siguiente contenido */}
          <div className="flex justify-around w-full items-center">
            {" "}
            {/* Cambiado 'w-[797px]' a 'w-full' para usar todo el espacio */}
            <div className="mt-16">
              <h4 className="text-[20px] font-medium">
                Estas pagando en: <br />
                <img src="flow.png" alt="" />
              </h4>
            </div>
            <div className="mt-16">
              <h4 className="text-[20px] font-medium">
                Monto a pagar <br />
                <span className="text-[34px] font-normal">$12000</span>
              </h4>
            </div>
          </div>
          <h2 className="text-center flex ml-44 mt-16 justify-center items-center font-medium text-[24px]">
            Seleccionar metodo de pago - Telemedicina
          </h2>
          <hr className="w-[600px] border-t border-[#1D2E50] mx-auto my-4" />
          <div className="ml-24 mt-8 flex flex-col justify-center items-center">
            <img src="TARJETAS.png" alt="" />
            <img className="ml-8" src="QR.png" alt="" />
          </div>
          <div className="flex justify-center ml-40 items-center gap-72 mt-8">
            <div
              className="text-[#1D2E50] font-medium text-[26px] cursor-pointer flex items-center"
              onClick={() => navigate(-1)}
            >
              <a className="mr-2 text-[34px] text-[#1D2E50]">&lt;</a> Volver
            </div>
            <button
              type="button"
              onClick={() => navigate("/sixthstep")}
              className="bg-[#1D2E50] text-white text-[20px] px-8 py-2 font-medium rounded-xl hover:bg-blue-950  focus:outline-none focus:ring-2 focus:ring-blue-950"
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
