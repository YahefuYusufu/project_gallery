import { Project } from '../types/project';
export const projects: Project[] = [
  {
    id: 'ios-app-1',
    title: 'iOS Weather App',
    description: 'A beautiful weather application built with Swift and SwiftUI',

    imageUrl: '/api/placeholder/400/200',
    images: [
      {
        url: '../assets/pic/pic1.jpg',
        caption: 'Home Screen - Current Weather',
      },
      {
        url: '/api/placeholder/400/200',
        caption: 'Weekly Forecast View',
      },
      {
        url: '/api/placeholder/400/200',
        caption: 'Weather Maps',
      },
    ],
    category: 'ios',
    technologies: [
      {
        name: 'Swift',
        colorClass:
          'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',
      },
      {
        name: 'SwiftUI',
        colorClass:
          'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
      },
    ],
    githubUrl: 'https://github.com/yourusername/project',
  },
  {
    id: 'weather-app',
    title: 'Weather App iOS',
    description:
      'A beautiful weather application built with Swift and SwiftUI, featuring real-time weather updates and detailed forecasts.',
    imageUrl: '/api/placeholder/400/200',
    images: [
      {
        url: '/api/placeholder/400/200',
        caption: 'Home Screen - Current Weather',
      },
      {
        url: '/api/placeholder/400/200',
        caption: 'Weekly Forecast View',
      },
      {
        url: '/api/placeholder/400/200',
        caption: 'Weather Maps',
      },
    ],
    category: 'ios',
    technologies: [
      {
        name: 'Swift',
        colorClass:
          'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',
      },
      {
        name: 'SwiftUI',
        colorClass:
          'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
      },
    ],
    githubUrl: 'https://github.com/yourusername/weather-app',
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker',
    description:
      'Android fitness tracking app built with Kotlin and Jetpack Compose, featuring workout plans and progress tracking.',
    imageUrl: '/api/placeholder/400/200',
    images: [
      {
        url: '/api/placeholder/400/200',
        caption: 'Home Screen - Current Weather',
      },
      {
        url: '/api/placeholder/400/200',
        caption: 'Weekly Forecast View',
      },
      {
        url: '/api/placeholder/400/200',
        caption: 'Weather Maps',
      },
    ],
    category: 'android',
    technologies: [
      {
        name: 'Kotlin',
        colorClass:
          'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100',
      },
      {
        name: 'Jetpack Compose',
        colorClass:
          'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100',
      },
    ],
    githubUrl: 'https://github.com/yourusername/fitness-tracker',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'Personal portfolio website built with React, TypeScript, and Tailwind CSS.',
    imageUrl: '/api/placeholder/400/200',
    images: [
      {
        url: '/api/placeholder/400/200',
        caption: 'Home Screen - Current Weather',
      },
      {
        url: '/api/placeholder/400/200',
        caption: 'Weekly Forecast View',
      },
      {
        url: '/api/placeholder/400/200',
        caption: 'Weather Maps',
      },
    ],
    category: 'web',
    technologies: [
      {
        name: 'React',
        colorClass:
          'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',
      },
      {
        name: 'TypeScript',
        colorClass:
          'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',
      },
      {
        name: 'Tailwind',
        colorClass:
          'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100',
      },
    ],
    githubUrl: 'https://github.com/yourusername/portfolio',
  },
  {
    id: 'social-app',
    title: 'Social Media App',
    description:
      'Cross-platform social media application built with React Native and Firebase.',
    imageUrl: '/api/placeholder/400/200',
    images: [
      {
        url: '/api/placeholder/400/200',
        caption: 'Home Screen - Current Weather',
      },
      {
        url: '/api/placeholder/400/200',
        caption: 'Weekly Forecast View',
      },
      {
        url: '/api/placeholder/400/200',
        caption: 'Weather Maps',
      },
    ],
    category: 'react-native',
    technologies: [
      {
        name: 'React Native',
        colorClass:
          'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',
      },
      {
        name: 'Firebase',
        colorClass:
          'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100',
      },
    ],
    githubUrl: 'https://github.com/yourusername/social-app',
  },
];
