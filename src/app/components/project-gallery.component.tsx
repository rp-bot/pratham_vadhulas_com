"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
}

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* Main Image Display */}
      <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-gray-100 border shadow-lg flex items-center justify-center">
        <Image
          src={images[currentIndex]}
          alt={`${projectTitle} - Image ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnail Carousel */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto p-4 scrollbar-hide bg-gray-100 rounded-lg shadow-lg">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all cursor-pointer snap-start ${
                index === currentIndex ? "ring-2 ring-blue-500 scale-105 bg-white" : "opacity-70 hover:opacity-100 border border-gray-300 grayscale"
              }`}
            >
              <Image src={image} alt={`${projectTitle} - Thumbnail ${index + 1}`} fill className="object-cover" sizes="96px" />
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={previousImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-gray-800 p-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-200 transition-colors z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-gray-800 p-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-200 transition-colors z-20"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Image Counter */}
      <div className="text-center text-sm text-gray-500 mt-2">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
