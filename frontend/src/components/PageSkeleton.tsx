import Skeleton from "./Skeleton";

export default function PageSkeleton() {
  return (
    <div className="page-fade px-6 py-10 max-w-6xl mx-auto">
      {/* Page Title */}
      <Skeleton className="h-8 w-48 mb-8" />

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Skeleton className="h-24 w-full rounded-xl" />
        <Skeleton className="h-24 w-full rounded-xl" />
        <Skeleton className="h-24 w-full rounded-xl" />
      </div>

      {/* Section Title */}
      <Skeleton className="h-6 w-56 mb-4" />

      {/* List Items */}
      <div className="space-y-4 mb-10">
        <Skeleton className="h-20 w-full rounded-xl" />
        <Skeleton className="h-20 w-full rounded-xl" />
        <Skeleton className="h-20 w-full rounded-xl" />
      </div>

      {/* Another Section Title */}
      <Skeleton className="h-6 w-56 mb-4" />

      {/* More List Items */}
      <div className="space-y-4">
        <Skeleton className="h-20 w-full rounded-xl" />
        <Skeleton className="h-20 w-full rounded-xl" />
      </div>
    </div>
  );
}

