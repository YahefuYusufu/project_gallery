import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
}) => {
  const cardVariants = {
    hover: {
      y: -8,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      onClick={() => onSelect(project)}
      variants={cardVariants}
      whileHover="hover"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer
        hover:shadow-xl transition-shadow duration-300"
    >
      <div className="overflow-hidden">
        <motion.img
          variants={imageVariants}
          src={project.imageUrl}
          alt={`${project.title} thumbnail`}
          className="w-full h-48 object-cover transform"
        />
      </div>
      <motion.div
        className="p-6"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1 ${tech.colorClass} rounded-full text-sm`}
            >
              {tech.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
