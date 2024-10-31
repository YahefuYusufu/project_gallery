import { ProjectList } from '../components/projects/ProjectList';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Software Developer
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Specialized in mobile development with expertise in iOS, Android, and
          cross-platform solutions
        </p>
      </section>
      <ProjectList projects={projects} />
    </div>
  );
}
