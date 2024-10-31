import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types/project';
import { X, Github, Globe } from 'lucide-react';
import { ProjectGallery } from './ProjectGallary';

interface ProjectModalProps {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
  isMobile: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  project,
  onClose,
}) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Project Image */}
            <div className="relative">
              <ProjectGallery
                images={[
                  { url: project.imageUrl, caption: project.title },
                  ...project.images,
                ]}
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 
                  rounded-full text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                    >
                      <Github
                        className="text-gray-600 dark:text-gray-400"
                        size={20}
                      />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                    >
                      <Globe
                        className="text-gray-600 dark:text-gray-400"
                        size={20}
                      />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1 ${tech.colorClass} rounded-full text-sm`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
