import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '../../types/project';
import { Code, Smartphone, Globe, Box } from 'lucide-react';

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Projects', icon: Box },
    { id: 'ios', label: 'iOS Apps', icon: Smartphone },
    { id: 'android', label: 'Android Apps', icon: Smartphone },
    { id: 'web', label: 'Web Projects', icon: Globe },
    { id: 'react-native', label: 'React Native', icon: Code },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200); // Clear selection after animation
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      className="py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Categories */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          variants={containerVariants}
        >
          {categories.map(({ id, label, icon: Icon }) => (
            <motion.button
              key={id}
              variants={categoryVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedCategory(id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors
                ${
                  selectedCategory === id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              <Icon size={20} />
              {label}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          className="max-w-6xl mx-auto px-6"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 },
                }}
                exit={{ opacity: 0, y: -20 }}
              >
                <ProjectCard project={project} onSelect={handleProjectClick} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </motion.section>
  );
};
