import Numero1 from "../assets/Numero1.svg";
import Numero2 from "../assets/Numero2.svg";
import Numero3 from "../assets/Numero3.svg";
import Numero4 from "../assets/Numero4.svg";

const SectionInfo = () => {
  return (
    <div className="bg-[#DDE6EB] shadow-[0_5px_10px_rgba(0,0,0,0.25)]">
      <div className="px-14 pt-7 pb-4 ">
        <p className="mb-12 mt-5 text-center ml-[10px] text-[24px] font-abc font-medium leading-[32px] text-[#1D2E50]">
          ¿Qué necesitas para atenderte por Telemedicina?
        </p>
      </div>

      <div className="flex justify-center space-x-8">
        <div className="relative w-[220px] h-[180px] border-2 rounded-3xl border-dotted border-[#1D2E50] flex flex-col justify-center items-center">
          <div className="absolute -top-8 w-[60px] h-[60px] flex justify-center items-center">
            <img
              src={Numero1}
              alt="Icono"
              className="w-[60px] h-[60px]"
            />
          </div>
          <div className="text-left p-4 text-[16px] font-abc leading-[26px] font-normal text-[#1D2E50]">
            Reservar y pagar la hora agendada, que podrás visualizar en “Citas”.
          </div>
        </div>

        <div className="relative w-[220px] h-[180px] border-2 rounded-3xl border-dotted border-[#1D2E50] flex flex-col justify-center items-center">
          <div className="absolute -top-8 w-[60px] h-[60px] flex justify-center items-center ">
            <img
              src={Numero2}
              alt="Icono"
              className="w-[60px] h-[60px]"
            />
          </div>
          <div className="text-left p-4 text-[16px] font-abc leading-[26px] font-normal text-[#1D2E50] mt-6">
            El día de la cita médica, debes conectarte desde un computador,
            tablet o celular.
          </div>
        </div>

        <div className="relative w-[220px] h-[180px] border-2 rounded-3xl border-dotted border-[#1D2E50] flex flex-col justify-center items-center">
          <div className="absolute -top-8 w-[60px] h-[60px] flex justify-center items-center">
            <img
              src={Numero3}
              alt="Icono"
              className="w-[60px] h-[60px]"
            />
          </div>
          <div className="text-left p-4 text-[16px] font-abc leading-[26px] font-normal text-[#1D2E50]">
            ¡Importante! el equipo debe contar con cámara, micrófono e internet.
          </div>
        </div>

        <div className="mb-12 relative w-[220px] h-[180px] border-2 rounded-3xl border-dotted border-[#1D2E50] flex flex-col justify-center items-center">
          <div className="absolute -top-8 w-[60px] h-[60px] flex justify-center items-center">
            <img
              src={Numero4}
              alt="Icono"
              className="w-[60px] h-[60px]"
            />
          </div>
          <div className="text-left p-4 text-[16px] font-abc leading-[26px] font-normal text-[#1D2E50] mt-5">
            Ingresar al link que puedes encontrar en “Citas”, también lo
            enviaremos a tu correo electrónico.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
