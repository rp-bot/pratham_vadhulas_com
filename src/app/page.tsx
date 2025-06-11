"use client";

import { AnimatedWrapper } from "./components/animated-wrapper.component";
import { ProjectCard } from "./components/project-card.component";

const featuredProjects = [
  {
    title: "Audio Visualizer",
    description: "A real-time audio visualization tool built with Web Audio API and Canvas.",
    tags: ["Web Audio API", "Canvas", "JavaScript"],
    slug: "audio-visualizer",
  },
  {
    title: "Music Production App",
    description: "A web-based digital audio workstation for music production.",
    tags: ["React", "Web Audio API", "TypeScript"],
    slug: "music-production-app",
  },
  {
    title: "Algorithmic Composition",
    description: "An experimental tool for generating music using algorithmic patterns.",
    tags: ["Python", "Music Theory", "Machine Learning"],
    slug: "algorithmic-composition",
  },
  // Add more projects as needed
];

export default function Home() {
  return (
    <main className="min-h-screen p-10 ">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedWrapper className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-white">
              Building Digital Experiences,
              <br />
              Composing Sonic Worlds
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A software engineer with a background in computer science and a passion for the art of sound. I create clean code and compelling audio-visual
              applications.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedWrapper className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center">Featured Projects</h2>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <AnimatedWrapper key={project.slug} delay={index * 0.1}>
                <ProjectCard {...project} />
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
