// src/app/projects/[slug]/loading.tsx
import { Skeleton } from "../../components/ui/skeleton"; // Assuming you have a Skeleton component

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Project Header Skeleton */}
        <div className="mb-16">
          <Skeleton className="h-12 w-3/4 mb-6" />
          <Skeleton className="h-6 w-full max-w-3xl mb-2" />
          <Skeleton className="h-6 w-2/3 max-w-3xl" />
        </div>

        {/* Key Info Skeleton */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Skeleton className="h-5 w-1/4 mb-2" />
              <Skeleton className="h-7 w-3/4" />
            </div>
            <div>
              <Skeleton className="h-5 w-1/4 mb-2" />
              <Skeleton className="h-7 w-3/4" />
            </div>
            <div>
              <Skeleton className="h-5 w-1/4 mb-2" />
              <div className="flex flex-wrap gap-2 mt-1">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Skeleton */}
        <div className="mb-16">
          <Skeleton className="aspect-video w-full rounded-lg" />
        </div>

        {/* README Content Skeleton */}
        <div className="prose prose-lg max-w-none">
          <Skeleton className="h-8 w-5/6 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-11/12 mb-6" />

          <Skeleton className="h-8 w-4/6 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-10/12" />
        </div>

        {/* Image Gallery Skeleton */}
        <div className="mt-16">
            <Skeleton className="h-9 w-1/3 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Skeleton className="aspect-video w-full rounded-lg" />
              <Skeleton className="aspect-video w-full rounded-lg" />
            </div>
        </div>
      </div>
    </main>
  );
}