const SectionExams = () => {
  return (
    <div className="bg-[#D9D9D9] mt-14 shadow-[0_5px_10px_rgba(0,0,0,0.25)]">
      <div className="px-14 pt-7 pb-4">
        <p className="mb-3 text-center ml-[10px] text-[24px] font-abc font-medium leading-[32px] text-[#4B81B4]">
          Exámenes y procedimientos que encuentras en nuestras sucursales:
        </p>
      </div>

      <div className="grid grid-cols-4 justify-items-center">
        <div className="text-left text-[20px] font-abc text-[#1D2E50] leading-7 mb-5">
          <ul className="list-disc text-[20px] font-abc font-normal ">
            <li className="py-1">Ácido úrico</li>
            <li className="py-1">Hemograma completo</li>
            <li className="py-1">Panel Tiroideo</li>
            <li className="py-1">Perfil Bioquímico</li>
          </ul>
        </div>
        <div className="text-left text-[20px] font-abc text-[#1D2E50] leading-7 mb-5">
          <ul className="list-disc text-[20px] font-abc font-normal ">
            <li className="py-1">Creatinina</li>
            <li className="py-1">Glicemias</li>
            <li className="py-1">Curva de glucosa</li>
            <li className="py-1">Vitamina D</li>
          </ul>
        </div>
        <div className="text-left text-[20px] font-abc text-[#1D2E50] leading-7 mb-5">
          <ul className="list-disc text-[20px] font-abc font-normal ">
            <li className="py-1">Orina completa</li>
            <li className="py-1">Perfil Lipídico</li>
            <li className="py-1">Vitamina B12</li>
            <li className="py-1">Holter de presión</li>
          </ul>
        </div>
        <div className="text-left text-[20px] font-abc text-[#1D2E50] leading-7 mb-12">
          <ul className="list-disc text-[20px] font-abc font-normal ">
            <li className="py-1">Electrocardiograma (ECG)</li>
            <li className="py-1">Holter de ritmo</li>
            <li className="py-1">Test de esfuerzo</li>
            <li className="py-1">Exámen de Urografía </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionExams;
