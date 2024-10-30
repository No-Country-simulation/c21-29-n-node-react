import { toast } from 'react-toastify'; // Importamos la función 'toast'
import { useState } from 'react';
import ModalCitas from './ModalCitas';

const ProximasCitas = () => {
    const initialCitas = JSON.parse(localStorage.getItem("citas")) || [];
    const [citas, setCitas] = useState(initialCitas);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState('');
    const [selectedCitaIndex, setSelectedCitaIndex] = useState(null);

    const handleConfirmClick = (index) => {
        setSelectedCitaIndex(index);
        setModalType('confirm');
        setIsModalOpen(true);
    };

    const handleCancelClick = (index) => {
        setSelectedCitaIndex(index);
        setModalType('cancel');
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedCitaIndex(null);
    };

    const handleConfirm = () => {
        const updatedCitas = citas.map((cita, index) =>
            index === selectedCitaIndex ? { ...cita, estado: 'confirmado' } : cita
        );
        setCitas(updatedCitas);
        localStorage.setItem("citas", JSON.stringify(updatedCitas)); 
        toast.success(`Cita confirmada para ${citas[selectedCitaIndex].fecha} a las ${citas[selectedCitaIndex].hora}`); // Notificación de confirmación
        handleModalClose();
    };

    const handleCancel = () => {
        const updatedCitas = citas.filter((_, index) => index !== selectedCitaIndex);
        setCitas(updatedCitas);
        localStorage.setItem("citas", JSON.stringify(updatedCitas)); 
        toast.error(`Cita anulada para ${citas[selectedCitaIndex].fecha} a las ${citas[selectedCitaIndex].hora}`); // Notificación de cancelación
        handleModalClose();
    };

    return (
        <div className="p-8">
            <h1 className="text-[24px] font-medium text-[#1D2E50] text-start">Próximas Citas</h1>
            <div className="mt-8 overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-[#DDE6EB] text-[#4B81B4] font-medium text-[16px]">
                            <th className="px-4 py-2 text-start">Fecha cita / Hora</th>
                            <th className="px-4 py-2 text-start">Especialidad</th>
                            <th className="px-4 py-2 text-start">Especialista</th>
                            <th className="px-4 py-2 text-start">Servicio</th>
                            <th className="px-4 py-2 text-start">Estado</th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#DDE6EB]">
                        {citas.length > 0 ? (
                            citas.map((cita, index) => (
                                <tr key={index} className="font-medium text-[#1D2E50]">
                                    <td className="px-4 py-2">
                                        {cita.fecha} / {cita.hora}
                                    </td>
                                    <td className="px-4 py-2">{cita.especialidad}</td>
                                    <td className="px-4 py-2">{cita.doctorName}</td>
                                    <td className="px-4 py-2">Telemedicina</td>
                                    <td className="px-4 py-2 flex gap-2">
                                        <button
                                            onClick={() => handleConfirmClick(index)}
                                            className={`bg-[#4B81B4] text-white transition-all px-5 py-2 rounded-xl hover:bg-blue-950 ${cita.estado === 'confirmado' ? 'disabled:opacity-50 cursor-not-allowed' : ''}`}
                                            disabled={cita.estado === 'confirmado'}
                                        >
                                            Confirmar
                                        </button>
                                        <button
                                            onClick={() => handleCancelClick(index)}
                                            className={`bg-white text-[#4B81B4] border-2 border-[#4B81B4] px-5 py-2 transition-all rounded-xl hover:bg-blue-300 hover:text-red-600 ${cita.estado === 'anulado' ? 'disabled:opacity-50 cursor-not-allowed' : ''}`}
                                            disabled={cita.estado === 'anulado'}
                                        >
                                            Anular
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-lg text-[#1D2E50] text-center py-4">No tienes citas programadas.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <ModalCitas
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    onConfirm={modalType === 'confirm' ? handleConfirm : handleCancel}
                    type={modalType}
                />
            )}
        </div>
    );
};

export default ProximasCitas;
