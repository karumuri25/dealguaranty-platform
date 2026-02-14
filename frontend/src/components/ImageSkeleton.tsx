import Skeleton from "./Skeleton";

export default function ImageSkeleton({ className = "" }) {
  return (
    <div className={`overflow-hidden rounded-xl ${className}`}>
      <Skeleton className="h-full w-full" />
    </div>
  );
}

