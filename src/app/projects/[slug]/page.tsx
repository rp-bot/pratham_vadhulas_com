// src/app/projects/[slug]/page.tsx

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import ReactMarkdown from "react-markdown"; // Import ReactMarkdown
import { getProjectDetails } from "../../lib/actions/getProjectDetails";
import { AnimatedWrapper } from "../../components/animated-wrapper.component";
import { Button } from "../../components/button.component";
import { FaGithub } from "react-icons/fa";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  // Replace with your GitHub username
  const username = "rp-bot";
  const project = await getProjectDetails(username, params.slug);
  console.log(project);
  if (!project) {
    return (
      <main className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-gray-900">Project Not Found</h1>
          <p className="mt-4 text-lg text-gray-600">
            Could not retrieve project data for &quot;{params.slug}&quot;. Please check the repository name and try again.
          </p>
        </div>
      </main>
    );
  }

  // Extract front matter and content for easier access
  const { repo, readme } = project;
  const frontmatter = readme.data;

  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Project Header */}
        <AnimatedWrapper className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{frontmatter.title || repo.name}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">{frontmatter.description || repo.description}</p>

          {/* <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="outline" onClick={() => window.open(repo.html_url, "_blank")}>
              <FaGithub className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
            {frontmatter.liveUrl && (
              <Button variant="primary" onClick={() => window.open(frontmatter.liveUrl as string, "_blank")}>
                <ArrowUpRight className="w-5 h-5 mr-2" />
                Live Demo
              </Button>
            )}
          </div> */}
        </AnimatedWrapper>

        {/* Key Info from Front Matter */}
        <AnimatedWrapper className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {frontmatter.role && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Role</h3>
                <p className="mt-1 text-lg text-gray-900">{frontmatter.role}</p>
              </div>
            )}
            {frontmatter.duration && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Duration</h3>
                <p className="mt-1 text-lg text-gray-900">{frontmatter.duration}</p>
              </div>
            )}
            {frontmatter.technologies && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Technologies</h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  {frontmatter.technologies?.map((tech: string) => (
                    <span key={tech} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </AnimatedWrapper>

        {/* Hero Image from Front Matter */}
        {frontmatter.images && frontmatter.images[0] && (
          <AnimatedWrapper className="mb-16">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src={frontmatter.images[0]} alt={frontmatter.title || repo.name} fill className="object-cover" priority />
            </div>
          </AnimatedWrapper>
        )}

        {/* Render README content */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{readme.content}</ReactMarkdown>
        </div>

        {/* Image Gallery from Front Matter */}
        {frontmatter.images && frontmatter.images.length > 1 && (
          <AnimatedWrapper className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {frontmatter.images?.slice(1).map((image: string, index: number) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                  <Image src={image} alt={`${frontmatter.title || repo.name} - Detail ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </AnimatedWrapper>
        )}
      </div>
    </main>
  );
}
