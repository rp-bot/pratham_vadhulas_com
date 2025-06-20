"use client";

import { TimelineCanvas } from "../components/about-page/TimeLineCanvas";
import { AnimatedWrapper } from "../components/animated-wrapper.component";
import { Button } from "../components/button.component";
import Image from "next/image";
// import { motion } from "framer-motion";


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
        <AnimatedWrapper className="mb-20 bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
              <Image 
                src="/profile_pic.jpg" 
                width={192}
                height={192}
                alt="Profile picture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
              <div className="prose prose-lg max-w-3xl">
                <p className="text-gray-600">
                  Software engineer and music technologist focused on building innovative audio tools. Combining software development expertise with music theory and audio processing knowledge.
                </p>
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* Timeline Section */}
        <section className="mb-20 bg-gray-100 p-4 rounded-lg">
          <AnimatedWrapper className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Experience & Education</h2>
            <TimelineCanvas  height={600} />
          </AnimatedWrapper>

          {/* <div className="space-y-12">
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
          </div> */}
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
