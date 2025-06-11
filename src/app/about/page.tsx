"use client";

import { AnimatedWrapper } from "../components/animated-wrapper.component";
import { Button } from "../components/button.component";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    date: "2020 - 2024",
    title: "M.A. in Music Technology",
    institution: "New York University",
    description: "Focused on audio programming, digital signal processing, and interactive music systems.",
  },
  {
    date: "2016 - 2020",
    title: "B.S. in Computer Science",
    institution: "University of California, Berkeley",
    description: "Specialized in software engineering and artificial intelligence.",
  },
  {
    date: "2022 - Present",
    title: "Senior Software Engineer",
    institution: "Audio Tech Company",
    description: "Leading development of web-based audio applications and tools.",
  },
  // Add more timeline events as needed
];

const skills = {
  "Programming Languages": ["JavaScript", "TypeScript", "Python", "C++", "Rust"],
  "Web Technologies": ["React", "Next.js", "Node.js", "Web Audio API"],
  "Audio Software": ["Max/MSP", "Pure Data", "Ableton Live", "Pro Tools"],
  "Tools & Others": ["Git", "Docker", "AWS", "TensorFlow", "DSP"],
};

export default function About() {
  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Bio Section */}
        <AnimatedWrapper className="mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
          <div className="prose prose-lg max-w-3xl">
            <p className="text-gray-600">
              I'm a software engineer and music technologist passionate about creating innovative solutions at the intersection of technology and sound. My work
              combines technical expertise in software development with a deep understanding of music theory and audio processing.
            </p>
            <p className="text-gray-600 mt-4">
              With a background in both computer science and music technology, I bring a unique perspective to projects that bridge these two worlds. I'm
              particularly interested in developing tools that make music creation and audio processing more accessible and intuitive.
            </p>
          </div>
        </AnimatedWrapper>

        {/* Timeline Section */}
        <section className="mb-20">
          <AnimatedWrapper className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Experience & Education</h2>
          </AnimatedWrapper>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <AnimatedWrapper key={index} delay={index * 0.1}>
                <div className="relative pl-8 border-l-2 border-gray-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600" />
                  <div className="mb-2">
                    <span className="text-sm font-medium text-blue-600">{event.date}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                    <p className="text-gray-600">{event.institution}</p>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <AnimatedWrapper className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Skills & Expertise</h2>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <AnimatedWrapper key={category} delay={index * 0.1}>
                <div className="bg-white rounded-lg border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </section>

        {/* Resume CTA */}
        <AnimatedWrapper className="text-center">
          <Button variant="primary" size="lg" onClick={() => window.open("/resume.pdf", "_blank")}>
            Download Resume
          </Button>
        </AnimatedWrapper>
      </div>
    </main>
  );
}
