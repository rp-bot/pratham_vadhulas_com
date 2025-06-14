import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { getProjectDetails } from "../../lib/actions/getProjectDetails";
import { AnimatedWrapper } from "../../components/animated-wrapper.component";
// If you use icons from a library, you might need these imports
// import { FaGithub } from "react-icons/fa";
// import { ArrowUpRight } from "lucide-react";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  // The username is no longer needed. We just pass the slug.
  const project = await getProjectDetails(params.slug);

  if (!project) {
    return (
      <main className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-gray-900">Project Not Found</h1>
          <p className="mt-4 text-lg text-gray-600">
            Could not find a project with the slug &quot;{params.slug}&quot;. Please check the file name in `src/data/projects`.
          </p>
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
          
          {/* Un-comment and style these buttons as you see fit */}
          <div className="flex flex-wrap gap-4 mt-8">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="/* your primary button styles */">
                {/* <FaGithub className="w-5 h-5 mr-2" /> */}
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
               <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="/* your secondary button styles */">
                {/* <ArrowUpRight className="w-5 h-5 mr-2" /> */}
                Live Demo
              </a>
            )}
          </div>
        </AnimatedWrapper>

        {/* Key Info Section */}
        <AnimatedWrapper className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.role && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Role</h3>
                <p className="mt-1 text-lg text-gray-900">{project.role}</p>
              </div>
            )}
            {project.duration && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Duration</h3>
                <p className="mt-1 text-lg text-gray-900">{project.duration}</p>
              </div>
            )}
            {project.technologies && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Technologies</h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span key={tech} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </AnimatedWrapper>

        {/* Hero Image */}
        {project.images && project.images[0] && (
          <AnimatedWrapper className="mb-16">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src={project.images[0]} alt={project.title} fill className="object-cover" priority />
            </div>
          </AnimatedWrapper>
        )}

        {/* Markdown Content */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>

        {/* Image Gallery */}
        {project.images && project.images.length > 1 && (
          <AnimatedWrapper className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.images?.slice(1).map((image, index) => (
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