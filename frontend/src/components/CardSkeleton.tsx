import Skeleton from "./Skeleton";

export default function CardSkeleton() {
  return (
    <div className="card-hover bg-white dark:bg-gray-900 p-4 rounded-xl shadow">
      {/* Image */}
      <Skeleton className="h-32 w-full rounded-lg mb-4" />

      {/* Title */}
      <Skeleton className="h-5 w-3/4 mb-3" />

      {/* Subtitle */}
      <Skeleton className="h-4 w-1/2 mb-4" />

      {/* Buttons / Footer */}
      <div className="flex items-center justify-between mt-4">
        <Skeleton className="h-10 w-24 rounded-lg" />
        <Skeleton className="h-10 w-10 rounded-lg" />
      </div>
    </div>
  );
}

