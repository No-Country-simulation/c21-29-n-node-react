import HeaderDP from "../components/DashboardPaciente/HeaderDP";
import { useNavigate } from "react-router-dom";
import WebPay from "../assets/WebPay.svg";
import MercadoPago from "../assets/MercadoPago.svg";

const FourthStep = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderDP />

      <div className="border w-[800px] m-auto shadow-xl rounded-[20px]">
        <div className="flex items-center justify-center w-[359px] max-w-xl mx-auto pt-10 ">
          {/* Paso 1 - */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#1D2E50] rounded-full flex items-center justify-center">
              <span className="text-white font-normal">1</span>
            </div>
            <div className="w-14 h-1 bg-[#1D2E50]"></div>
          </div>

          {/* Paso 2 */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#1D2E50] rounded-full flex items-center justify-center">
              <span className="text-white font-normal">2</span>
            </div>
            <div className="w-14 h-1 bg-[#1D2E50]"></div>
          </div>

          {/* Paso 3 */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#1D2E50] rounded-full flex items-center justify-center">
              <span className="text-white font-normal">3</span>
            </div>
            <div className="w-14 h-1 bg-[#1D2E50]"></div>
          </div>

          {/* Paso 4 */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#1D2E50] rounded-full flex items-center justify-center">
              <span className="text-white font-normal">4</span>
            </div>
          </div>
        </div>

        <h1 className="mt-16 text-[24px] leading-8 text-[#1D2E50] font-medium font-abc text-center">
          Detalles pago - Telemedicina
        </h1>

        <hr className="w-[600px] border-t border-[#4B81B4] mx-auto my-4" />

        <div className="mt-9 mb-14 text-[20px] text-[#1D2E50] flex flex-col items-center  ">
          <div className="flex flex-col items-end gap-y-2  ">
            <p className="text-right font-medium">
              Valor Prestacion:{" "}
              <span className="font-normal ml-3"> $30.000</span>
            </p>
            <p className="text-right font-medium ">
              Bonificacion Prestacion:
              <span className="font-normal ml-3 ">$18.000</span>
            </p>
            <p className="text-right font-medium">
              Monto a Pagar: <span className="font-medium ml-3">$12.000</span>
            </p>
          </div>
        </div>

        <h2 className="text-center font-medium text-[#1D2E50] text-[24px] mt-8">
          Seleccionar método de pago
        </h2>

        <hr className="w-[600px] border-t border-[#4B81B4] mx-auto my-4" />

        <div className="mt-5 flex justify-around items-center">
          <img
            src={WebPay}
            alt="Imagen de WebPay"
            className="cursor-pointer focus:ring-2 focus:ring-[#4B81B4] rounded"
            tabIndex={0}
          />
          <img
            src={MercadoPago}
            alt="Imagen de Mercado Pago"
            className="cursor-pointer focus:ring-2 focus:ring-[#4B81B4] rounded"
            tabIndex={0}
          />
        </div>

        <div className="flex justify-around items-center gap-72 mt-14 my-8">
          <div
            className="text-[#1D2E50] font-medium text-[20px] cursor-pointer flex items-center"
            onClick={() => navigate(-1)}
          >
            <a className="mr-2 text-[24px] text-[#1D2E50]">&lt;</a> Volver
          </div>
          <button
            type="button"
            onClick={() => navigate("/fifthstep")}
            className="bg-[#1D2E50] text-white text-[20px] px-14 py-2 font-medium rounded-xl hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-950"
          >
            Pagar
          </button>
        </div>
      </div>
    </>
  );
};

export default FourthStep;
