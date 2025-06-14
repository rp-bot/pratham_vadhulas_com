"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Import the Next.js Image component
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  imageUrl?: string; // This will now be used
}

export function ProjectCard({
  title,
  description,
  tags,
  slug,
  imageUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
    >
      {/* Enhancement 1: Add a project image */}
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={`Preview image for ${title}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/*
        Enhancement 2: Add aria-label for better accessibility.
        The main content is now in a separate div to allow for flex-col layout.
      */}
      <Link
        href={`/projects/${slug}`}
        aria-label={`View details for ${title}`}
        className="block p-6 flex-grow"
      >
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
          </div>

          <p className="text-gray-600 line-clamp-2">{description}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}