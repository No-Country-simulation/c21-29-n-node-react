import HeaderDP from "../components/DashboardPaciente/HeaderDP";
import { useNavigate } from "react-router-dom";

const FourthStep = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderDP />

      <div className="flex items-center shadow-2xl justify-center w-[359px] max-w-xl mt-8 mx-auto">
        <div className="flex items-center">
          {/* Step 1 */}
          <div className="w-10 h-10 bg-[#1D2E50] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">1</span>
          </div>
          <div className="w-24 h-1 bg-[#1D2E50]"></div>

          {/* Step 2 */}
          <div className="w-10 h-10 bg-[#1D2E50] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">2</span>
          </div>
          <div className="w-24 h-1 bg-[#1D2E50]"></div>

          {/* Step 3 */}
          <div className="w-10 h-10 bg-[#1D2E50] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">3</span>
          </div>
          <div className="w-24 h-1 bg-[#1D2E50]"></div>

          {/* Step 4 */}
          <div className="w-10 h-10 bg-[#1D2E50] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">4</span>
          </div>
        </div>
      </div>

      <h1 className="mt-16 text-[24px] text-[#1D2E50] font-medium font-abc text-center">
        Detalles pago - Telemedicina 
      </h1>

      <hr className="w-[600px] border-t border-[#1D2E50] mx-auto my-4" />

      <div className="mt-16 text-[20px] text-[#1D2E50] flex flex-col items-center w-[780px]">
        <div className="w-full max-w-md flex flex-col items-end gap-y-2">
          <p className="text-right font-medium">Valor Prestacion: <span className="font-normal">$30.000</span></p>
          <p className="text-right font-medium">Bonificacion Prestacion: <span className="font-normal">$18.000</span></p>
          <p className="text-right font-medium">Monto a Pagar: <span className="font-medium">$12.000</span></p>
        </div>
      </div>

      <h2 className="text-center font-medium text-[#1D2E50] text-[24px] mt-8">
        Seleccionar metodo de pago
      </h2>

      <hr className="w-[600px] border-t border-[#1D2E50] mx-auto my-4" />

      <div className="mt-8 flex justify-center items-center">
        <img src="pagos.png" alt="metodos de pagos" />
      </div>

      <div className="flex justify-center items-center gap-72 mt-8">
        <div
          className="text-[#1D2E50] font-medium text-[26px] cursor-pointer flex items-center"
          onClick={() => navigate(-1)}
        >
          <a className="mr-2 text-[34px] text-[#1D2E50]">&lt;</a> Volver
        </div>
        <button
          type="button"
          onClick={() => navigate("/fifthstep")}
          className="bg-[#1D2E50] text-white text-[20px] px-8 py-2 font-medium rounded-xl hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-950"
        >
          Pagar
        </button>
      </div>
    </>
  );
};

export default FourthStep;
