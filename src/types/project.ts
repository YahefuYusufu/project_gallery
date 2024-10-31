export type ProjectCategory = 'ios' | 'android' | 'web' | 'react-native';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  images: {
    url: string;
    caption: string;
  }[];
  category: ProjectCategory;
  technologies: {
    name: string;
    colorClass: string;
  }[];
  demoUrl?: string;
  githubUrl?: string;
}
