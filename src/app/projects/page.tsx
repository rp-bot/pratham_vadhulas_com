"use client";

import { AnimatedWrapper } from "../components/animated-wrapper.component";
import { ProjectCard } from "../components/project-card.component";

const allProjects = [
  {
    title: "Audio Visualizer",
    description: "A real-time audio visualization tool built with Web Audio API and Canvas.",
    tags: ["Web Audio API", "Canvas", "JavaScript"],
    slug: "MIDI-gen-ai",
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

const creativeLabProjects = [
  {
    title: "Web Audio Experiments",
    description: "A collection of experiments with the Web Audio API.",
    tags: ["Web Audio API", "JavaScript"],
    slug: "web-audio-experiments",
  },
  {
    title: "Sound Design Tools",
    description: "A set of tools for sound design and audio processing.",
    tags: ["Python", "Audio Processing"],
    slug: "sound-design-tools",
  },
  // Add more creative lab projects as needed
];

export default function Projects() {
  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Introduction */}
        <AnimatedWrapper className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A collection of my work at the intersection of computer science and music technology. From web applications to audio processing tools, each project
            represents a unique exploration of technology and sound.
          </p>
        </AnimatedWrapper>

        {/* Main Projects */}
        <section className="mb-20">
          <AnimatedWrapper className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Featured Work</h2>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <AnimatedWrapper key={project.slug} delay={index * 0.1}>
                <ProjectCard {...project} />
              </AnimatedWrapper>
            ))}
          </div>
        </section>

        {/* Creative Lab */}
        <section>
          <AnimatedWrapper className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Creative Lab</h2>
            <p className="text-gray-600 mt-2">Experimental projects and explorations in sound and technology.</p>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeLabProjects.map((project, index) => (
              <AnimatedWrapper key={project.slug} delay={index * 0.1}>
                <ProjectCard {...project} />
              </AnimatedWrapper>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
