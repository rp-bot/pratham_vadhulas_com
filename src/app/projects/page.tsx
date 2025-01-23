import { GoDotFill } from "react-icons/go";
import { ReposComponent } from "./components/repos-component.component";
import { Suspense } from "react";
export default function ProjectsPage() {
  function LoadingFallback() {
    return (
      <>
        {/* Repeat the skeleton 4 times */}
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-md rounded-lg p-4 mb-4 border border-gray-300 font-mono animate-pulse"
          >
            {/* Header Skeleton */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="ml-4 space-y-2">
                <div className="w-32 h-4 bg-gray-300 rounded"></div>
                <div className="w-48 h-6 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* Metadata Skeleton */}
            <div className="flex items-center gap-4 text-sm">
              <div className="w-16 h-4 bg-gray-300 rounded"></div>
              <div className="w-12 h-4 bg-gray-300 rounded"></div>
              <div className="w-12 h-4 bg-gray-300 rounded"></div>
              <div className="w-24 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <div className="mx-auto p-4 max-w-screen-lg w-full bg-black">
      <div className="flex flex-row items-center justify-between h-full mb-2">
        <h1 className="text-2xl font-bold ">My Public Repositories</h1>
        <GoDotFill className="animate-pulse text-green-500 pulse" size={24} />
      </div>

      {/* add react suspense here */}
      <Suspense fallback={<LoadingFallback />}>
        <ReposComponent />
      </Suspense>
    </div>
  );
}
