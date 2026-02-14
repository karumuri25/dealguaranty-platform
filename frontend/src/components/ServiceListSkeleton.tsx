import Skeleton from "./Skeleton";

export default function ServiceListSkeleton() {
  return (
    <div className="space-y-4 page-fade">
      {/* Item 1 */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow card-hover">
        <div className="flex items-center gap-4">
          <Skeleton className="h-16 w-16 rounded-lg" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
      </div>

      {/* Item 2 */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow card-hover">
        <div className="flex items-center gap-4">
          <Skeleton className="h-16 w-16 rounded-lg" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
      </div>

      {/* Item 3 */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow card-hover">
        <div className="flex items-center gap-4">
          <Skeleton className="h-16 w-16 rounded-lg" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
      </div>
    </div>
  );
}

