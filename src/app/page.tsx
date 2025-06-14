// "use client";

import { AnimatedWrapper } from "./components/animated-wrapper.component";
import { ProjectCard } from "./components/project-card.component";
import { ProfileSection } from "./components/profile-section.component";
import { featuredProjects } from "@/constants/featured_projects";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <ProfileSection />

      {/* Featured Projects Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto lg:px-8">
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

          <div className="mt-12 text-center">
            <a 
              href="/projects" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              See All Projects
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
