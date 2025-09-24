import React, { useEffect, useState } from "react";

const ProjectModal = ({ isOpen, onClose, project }) => {
  // Hooks sempre no topo (ordem estável)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reage à troca de projeto/abertura: volta para a primeira imagem
  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen, project?.id]);

  // Teclado: só ativa quando o modal está aberto
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight") setCurrentIndex((i) => {
        const total = project?.images?.length || 0;
        return total ? (i + 1) % total : 0;
      });
      if (e.key === "ArrowLeft") setCurrentIndex((i) => {
        const total = project?.images?.length || 0;
        return total ? (i - 1 + total) % total : 0;
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, project?.images?.length]);

  // Agora pode sair cedo (depois dos hooks)
  if (!isOpen || !project) return null;

  const hasImages = Array.isArray(project.images) && project.images.length > 0;

  const nextImage = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] p-8 relative overflow-y-auto">

        {/* Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white dark:text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center"
          aria-label="Fechar"
          title="Fechar"
        >
          ×
        </button>

        {/* Título */}
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
          {project.title}
        </h2>

        {/* Descrição (HTML pronto) */}
        <div
          className="markdown-class text-black dark:text-white mb-6"
          dangerouslySetInnerHTML={{ __html: project.longDescription }}
        />

        {/* Tecnologias */}
        {Array.isArray(project.technologies) && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Imagem e navegação */}
        {hasImages && (
          <div className="relative flex flex-col items-center">
            <div className="relative w-full flex justify-center max-h-[400px] overflow-hidden">
              <img
                src={project.images[currentIndex]?.src}
                alt={project.images[currentIndex]?.caption || `Imagem ${currentIndex + 1}`}
                className="object-contain max-h-[400px] w-auto rounded-lg"
              />
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
                aria-label="Imagem anterior"
                title="Anterior"
              >
                ◀
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
                aria-label="Próxima imagem"
                title="Próxima"
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
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
