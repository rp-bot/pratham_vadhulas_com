// src/app/components/ui/skeleton.tsx
import { cn } from "@/app/lib/utils"; // Assuming you have a utility for merging class names

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };