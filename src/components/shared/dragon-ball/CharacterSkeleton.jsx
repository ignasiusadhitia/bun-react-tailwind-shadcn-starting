import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const CharacterSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Skeleton className="w-full h-64" />
      </div>
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-8" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-6 w-20" />
      </CardContent>
    </Card>
  );
};
