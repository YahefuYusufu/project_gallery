// src/components/projects/ProjectList.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '../../types/project';
import { Code, Smartphone, Globe, Box, ChevronDown } from 'lucide-react';
import { ProjectCardSkeleton } from '../loading/ProjectCardSkaleton';

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showCategories, setShowCategories] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);

  // Initial loading effect
  useEffect(() => {
    // Simulate initial data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second loading time

    return () => clearTimeout(timer);
  }, []); // Only run once on mount

  // Handle category change with loading
  const handleCategoryChange = (id: string) => {
    setIsFiltering(true);
    setSelectedCategory(id);

    // Simulate filtering delay
    setTimeout(() => {
      setIsFiltering(false);
      if (isMobile) setShowCategories(false);
    }, 500); // 0.5 second filtering time
  };

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setShowCategories(window.innerWidth >= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  const currentCategory = categories.find(c => c.id === selectedCategory);
  const IconComponent = currentCategory ? currentCategory.icon : Box;

  const skeletonArray = Array(6).fill(null);

  return (
    <section className="py-16">
      {/* Mobile Category Dropdown */}
      {isMobile && (
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <motion.button
            onClick={() => setShowCategories(!showCategories)}
            className={`w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm
              ${isFiltering ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileTap={{ scale: 0.98 }}
            disabled={isFiltering}
          >
            <span className="flex items-center gap-2">
              <IconComponent size={20} />
              {currentCategory?.label || 'All Projects'}
            </span>
            <motion.div
              animate={{ rotate: showCategories ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.button>
        </div>
      )}

      {/* Categories */}
      <AnimatePresence>
        {showCategories && (
          <motion.div
            initial={isMobile ? { height: 0, opacity: 0 } : false}
            animate={{ height: 'auto', opacity: 1 }}
            exit="opacity: 0"
            className="max-w-6xl mx-auto px-6 mb-12 overflow-hidden"
          >
            <div
              className={`flex flex-wrap gap-4 ${isMobile ? 'flex-col' : 'justify-center'}`}
            >
              {categories.map(({ id, label, icon: Icon }) => (
                <motion.button
                  key={id}
                  onClick={() => handleCategoryChange(id)}
                  whileHover={!isMobile ? { scale: 1.05 } : undefined}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors
                    ${isMobile ? 'w-full justify-center' : ''}
                    ${isFiltering ? 'opacity-50 cursor-not-allowed' : ''}
                    ${
                      selectedCategory === id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  disabled={isFiltering}
                >
                  <Icon size={20} />
                  {label}
                  {isFiltering && selectedCategory === id && (
                    <div className="ml-2 animate-spin h-4 w-4 border-2 border-white rounded-full border-t-transparent" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          layout
        >
          <AnimatePresence mode="wait">
            {isLoading || isFiltering
              ? // Show skeletons while loading or filtering
                skeletonArray.map((_, index) => (
                  <motion.div
                    key={`skeleton-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCardSkeleton />
                  </motion.div>
                ))
              : // Show actual projects
                filteredProjects.map(project => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard
                      project={project}
                      onSelect={p => {
                        setSelectedProject(p);
                        setIsModalOpen(true);
                      }}
                      isMobile={isMobile}
                    />
                  </motion.div>
                ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={handleCloseModal}
        isMobile={isMobile}
      />
    </section>
  );
};
