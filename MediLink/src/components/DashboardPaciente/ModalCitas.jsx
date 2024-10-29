

const ModalCitas = ({ isOpen, onClose, onConfirm, type }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 w-96">
                <h2 className="text-lg font-bold text-center">
                    {type === 'confirm' ? 'Confirmar Cita' : 'Anular Cita'}
                </h2>
                <p className="mt-4 text-center">
                    {type === 'confirm' 
                        ? '¿Deseas confirmar asistencia a la hora acordada?' 
                        : '¿Seguro quieres anular la hora agendada?'}
                </p>
                <div className="flex justify-around mt-6">
                    <button 
                        onClick={onConfirm} 
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        {type === 'confirm' ? 'Sí, Confirmar' : 'Sí, Anular'}
                    </button>
                    <button 
                        onClick={onClose} 
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalCitas;