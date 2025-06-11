"use client";

import { AnimatedWrapper } from "../../components/animated-wrapper.component";
import { Button } from "../../components/button.component";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

// This would typically come from a CMS or data file
const projectData = {
  "audio-visualizer": {
    title: "Audio Visualizer",
    description: "A real-time audio visualization tool built with Web Audio API and Canvas.",
    longDescription: `
      This project explores the intersection of audio and visual art through real-time
      visualization of audio signals. Using the Web Audio API and Canvas, it creates
      dynamic, responsive visual representations of music and sound.
    `,
    role: "Lead Developer",
    duration: "3 months",
    technologies: ["Web Audio API", "Canvas", "JavaScript", "React"],
    challenge: `
      The main challenge was creating performant visualizations that could handle
      real-time audio input while maintaining smooth animations and accurate
      frequency analysis.
    `,
    solution: `
      I implemented a custom audio processing pipeline using the Web Audio API's
      AnalyserNode for frequency analysis, combined with efficient Canvas rendering
      techniques. The solution includes multiple visualization modes and customizable
      parameters for different artistic effects.
    `,
    features: [
      "Real-time frequency and waveform visualization",
      "Multiple visualization modes and effects",
      "Customizable color schemes and parameters",
      "Export functionality for visualizations",
    ],
    lessons: `
      This project taught me valuable lessons about audio processing in the browser
      and optimizing Canvas rendering for performance. I gained deep insights into
      the Web Audio API and how to create engaging visual experiences from audio data.
    `,
    githubUrl: "https://github.com/yourusername/audio-visualizer",
    liveUrl: "https://audio-visualizer-demo.com",
    images: ["/projects/audio-visualizer/main.jpg", "/projects/audio-visualizer/detail-1.jpg", "/projects/audio-visualizer/detail-2.jpg"],
  },
  // Add more project data as needed
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug as keyof typeof projectData];

  if (!project) {
    return (
      <main className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-gray-900">Project Not Found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Project Header */}
        <AnimatedWrapper className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{project.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">{project.description}</p>

          <div className="flex flex-wrap gap-4 mt-8">
            {project.githubUrl && (
              <Button variant="outline" onClick={() => window.open(project.githubUrl, "_blank")}>
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            )}
            {project.liveUrl && (
              <Button variant="primary" onClick={() => window.open(project.liveUrl, "_blank")}>
                <ArrowUpRight className="w-5 h-5 mr-2" />
                Live Demo
              </Button>
            )}
          </div>
        </AnimatedWrapper>

        {/* Key Info */}
        <AnimatedWrapper className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Role</h3>
              <p className="mt-1 text-lg text-gray-900">{project.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Duration</h3>
              <p className="mt-1 text-lg text-gray-900">{project.duration}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Technologies</h3>
              <div className="mt-1 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* Hero Image */}
        {project.images && project.images[0] && (
          <AnimatedWrapper className="mb-16">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src={project.images[0]} alt={project.title} fill className="object-cover" />
            </div>
          </AnimatedWrapper>
        )}

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none">
          <AnimatedWrapper className="mb-12">
            <h2>The Challenge</h2>
            <p>{project.challenge}</p>
          </AnimatedWrapper>

          <AnimatedWrapper className="mb-12">
            <h2>My Process & Solution</h2>
            <p>{project.solution}</p>
          </AnimatedWrapper>

          <AnimatedWrapper className="mb-12">
            <h2>Key Features</h2>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </AnimatedWrapper>

          <AnimatedWrapper className="mb-12">
            <h2>Lessons Learned</h2>
            <p>{project.lessons}</p>
          </AnimatedWrapper>
        </div>

        {/* Image Gallery */}
        {project.images && project.images.length > 1 && (
          <AnimatedWrapper className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                  <Image src={image} alt={`${project.title} - Detail ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </AnimatedWrapper>
        )}
      </div>
    </main>
  );
}
