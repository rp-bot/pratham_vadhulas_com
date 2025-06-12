"use client";

import { AnimatedWrapper } from "./components/animated-wrapper.component";
import { ProjectCard } from "./components/project-card.component";
import { featuredProjects } from "@/constants/featured_projects";


export default function Home() {
  return (
    <main className="min-h-screen ">
      {/* Profile Section */}
      <section className="flex items-center justify-center py-16 md:py-20">
        <div className="w-full max-w-4xl px-4">
          <AnimatedWrapper>
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
              <div className="md:flex">
                {/* Left Side: Profile Picture */}
                <div className="md:w-1/3 bg-gray-100 p-8 flex flex-col items-center justify-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-indigo-500 ring-opacity-50">
                    {/* --- Add your image here --- */}
                    {/* For example: <Image src="/profile-pic.png" width={160} height={160} alt="Your Name" /> */}
                    {/* Using a placeholder for now */}
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Your Photo</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500 font-mono">ID#: 1337-2025</p>
                    <p className="text-xs text-gray-400 font-mono">ISSUED: 06.10.2025</p>
                  </div>
                </div>

                {/* Right Side: Details */}
                <div className="md:w-2/3 p-8">
                  <h1 className="text-4xl font-bold text-gray-900">Your Name</h1>
                  <p className="text-lg text-indigo-600 font-semibold mt-1">
                    Software Engineer & Sound Designer
                  </p>
                  <hr className="my-6 border-gray-200" />
                  <div className="space-y-4">
                    <div className="flex">
                      <span className="w-24 text-sm font-bold text-gray-600">CLASS</span>
                      <span className="text-sm text-gray-800">Full-Stack Engineer</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-sm font-bold text-gray-600">FOCUS</span>
                      <span className="text-sm text-gray-800">
                        Audio-Visual Applications, Clean Code
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-sm font-bold text-gray-600">LOCATION</span>
                      <span className="text-sm text-gray-800">Your City, Country</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-sm font-bold text-gray-600">SIDE QUEST</span>
                      <span className="text-sm text-gray-800">Composing Sonic Worlds</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-10 bg-gray-50 ">
        <div className="max-w-7xl mx-auto   lg:px-8">
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
