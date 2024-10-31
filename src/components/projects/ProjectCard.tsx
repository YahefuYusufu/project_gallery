import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  isMobile: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  isMobile,
}) => {
  const cardVariants = {
    hover: !isMobile
      ? {
          y: -8,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
          },
        }
      : {},
  };

  return (
    <motion.div
      onClick={() => onSelect(project)}
      variants={cardVariants}
      whileHover="hover"
      whileTap={isMobile ? { scale: 0.98 } : undefined}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
    >
      <div className="overflow-hidden">
        <motion.img
          whileHover={!isMobile ? { scale: 1.05 } : undefined}
          transition={{ duration: 0.2 }}
          src={project.imageUrl}
          alt={`${project.title} thumbnail`}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-2 md:px-3 py-1 ${tech.colorClass} rounded-full text-xs md:text-sm`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
