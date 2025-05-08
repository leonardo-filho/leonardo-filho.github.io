import React, { useState } from "react";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] p-8 relative overflow-y-auto">

        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white dark:text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ×
        </button>

        {/* Título */}
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">{project.title}</h2>

        {/* Descrição */}
        <p className="text-base text-black dark:text-white whitespace-pre-line mb-6">
          {project.longDescription}
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded">
              {tech}
            </span>
          ))}
        </div>

        {/* Imagem e navegação */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-full flex justify-center max-h-[400px] overflow-hidden">
            <img
              src={project.images[currentIndex]?.src}
              alt={`Imagem ${currentIndex + 1}`}
              className="object-contain max-h-[400px] w-auto rounded-lg"
            />
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ◀
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ▶
            </button>
          </div>

          {project.images[currentIndex]?.caption && (
            <figcaption className="text-sm text-gray-500 mt-4 text-center max-w-2xl">
              {project.images[currentIndex].caption}
            </figcaption>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
