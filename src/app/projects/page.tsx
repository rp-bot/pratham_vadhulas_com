"use client";

import { AnimatedWrapper } from "../components/animated-wrapper.component";
import { ProjectCard } from "../components/project-card.component";
import { featuredProjects } from "@/constants/featured_projects";

export default function Projects() {
  return (
    <main className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-10 py-6">
        {/* Introduction */}
        <AnimatedWrapper className="mb-16 bg-gray-100 rounded-lg p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A collection of my work at the intersection of computer science and music technology. From web applications to audio processing tools, each project
            represents a unique exploration of technology and sound.
          </p>
        </AnimatedWrapper>

        {/* Main Projects - Vertical List */}
        <section className="mb-20 bg-gray-100 rounded-lg p-6">
          <AnimatedWrapper className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Featured Work</h2>
          </AnimatedWrapper>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <AnimatedWrapper key={project.slug} delay={index * 0.1}>
                <ProjectCard {...project} />
              </AnimatedWrapper>
            ))}
          </div>
        </section>

        {/* Categorized Projects */}
        <section>
          <AnimatedWrapper className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Project Categories</h2>
            <p className="text-gray-600 mt-2">Projects organized by category and status</p>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Empty state for now */}
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-200">
              <p className="text-gray-500 text-center">Categories coming soon...</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
