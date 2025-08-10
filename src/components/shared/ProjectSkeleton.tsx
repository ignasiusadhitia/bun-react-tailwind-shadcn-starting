import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const ProjectSkeleton = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="grid grid-cols-2 gap-4 pt-6">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    </div>
  );
};
