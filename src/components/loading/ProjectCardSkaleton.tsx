export const ProjectCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 animate-pulse" />

      <div className="p-6">
        {/* Title skeleton */}
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4 w-3/4" />

        {/* Description skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-5/6" />
        </div>

        {/* Tags skeleton */}
        <div className="flex flex-wrap gap-2">
          <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
          <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
          <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};
