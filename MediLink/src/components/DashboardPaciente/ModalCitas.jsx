import { useState } from 'react';
import { MdCheckCircle } from 'react-icons/md'; 

const ModalCitas = ({ isOpen, onClose, onConfirm, type, onConfirmSuccess }) => {
    const [isConfirmed, setIsConfirmed] = useState(false);

    if (!isOpen) return null;

    const handleConfirm = () => {
        setIsConfirmed(true);
        onConfirm();
        onConfirmSuccess(); 
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 w-96">
                {!isConfirmed ? (
                    <>
                        <h2 className="text-lg font-bold text-center">
                            {type === 'confirm' ? 'Confirmar Cita' : 'Anular Cita'}
                        </h2>
                        <p className="mt-4 text-center text-[20px] text-[#1D2E50]">
                            {type === 'confirm' 
                                ? '¿Deseas confirmar asistencia a la hora agendada?' 
                                : '¿Seguro/a que quieres anular la hora agendada?'}
                        </p>
                        <div className="flex justify-around mt-6">
                            <button 
                                onClick={handleConfirm} 
                                className="bg-[#1D2E50] text-[20px] text-white font-medium px-6 py-2 rounded-xl transition-all hover:bg-blue-800"
                            >
                                {type === 'confirm' ? 'Sí, confirmar' : 'Sí, anular'}
                            </button>
                            <button 
                                onClick={onClose} 
                                className="text-[#1D2E50] text-[20px] border-2 font-medium border-[#1D2E50] px-6 py-2 rounded-xl transition-all hover:text-[#FFFFFF] hover:bg-[#4B81B4]"
                            >
                                Cancelar
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-center">
                        <MdCheckCircle className="text-green-500 text-4xl mx-auto" />
                        <h3 className="mt-4 text-lg font-bold">Confirmada</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModalCitas;
