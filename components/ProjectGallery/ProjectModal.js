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
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-5xl max-h-[90vh] p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-base mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded">
              {tech}
            </span>
          ))}
        </div>

        <div className="relative w-full">
          <img
            src={project.images[currentIndex].src}
            alt={`Imagem ${currentIndex + 1}`}
            className="w-full rounded-lg"
          />
          {project.images[currentIndex].caption && (
            <figcaption className="text-sm text-gray-500 mt-2 text-center">
              {project.images[currentIndex].caption}
            </figcaption>
          )}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button onClick={prevImage} className="bg-gray-200 px-2 py-1 rounded-r">◀</button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button onClick={nextImage} className="bg-gray-200 px-2 py-1 rounded-l">▶</button>
          </div>
        </div>

        <div className="flex justify-end mt-6">
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

export default ProjectModal;