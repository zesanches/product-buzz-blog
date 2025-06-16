import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Loading = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("w-full max-w-md", className)}>
      <div className="p-6 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </Card>
  );
};

export default Loading;
