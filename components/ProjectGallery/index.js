import React, { useState } from "react";
import { projects } from "./data";
import ProjectModal from "./ProjectModal";

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
      <h1 className="text-2xl text-bold">Projetos.</h1>
      <div className="mt-5 grid grid-cols-1 tablet:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => openModal(project)}
            className="cursor-pointer rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
            <p className="text-sm opacity-70">{project.description}</p>
          </div>
        ))}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
};

export default ProjectGallery;