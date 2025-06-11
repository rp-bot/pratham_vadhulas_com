"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  imageUrl?: string;
}

export function ProjectCard({ title, description, tags, slug }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
    >
      <Link href={`/projects/${slug}`} className="block p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>

          <p className="text-gray-600 line-clamp-2">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
