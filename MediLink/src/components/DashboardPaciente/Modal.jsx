// eslint-disable-next-line
const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="font-abc fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] text-center">
        <h3 className="text-lg font-medium mb-4">
          ¿Estás seguro de cerrar sesión?
        </h3>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 p-2 rounded w-full mr-2"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded w-full ml-2"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
