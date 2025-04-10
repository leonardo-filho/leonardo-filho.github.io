import React from "react";

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] p-6 overflow-y-auto relative">
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-base mb-4">{project.description}</p>
        <img
          src={project.imageSrc}
          alt={project.title}
          className="w-full h-auto rounded-lg mb-4"
        />

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
