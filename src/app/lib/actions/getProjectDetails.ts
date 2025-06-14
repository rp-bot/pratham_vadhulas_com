"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// A simpler, more direct interface for our project data from local files
export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  content: string;
  role?: string;
  duration?: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies?: string[];
  images?: string[];
}

export const getProjectDetails = async (
  slug: string,
): Promise<ProjectData | null> => {
  // Construct the full path to the markdown file in src/data/projects
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "projects",
    `${slug}.md`,
  );

  try {
    // Check if the file actually exists before trying to read it
    if (!fs.existsSync(filePath)) {
      console.warn(`No project file found for slug: ${slug} at path: ${filePath}`);
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");

    // Use gray-matter to parse the post metadata and content
    const { data, content } = matter(fileContents);

    // Return the combined data in our new, flat structure
    return {
      slug,
      title: data.title || slug, // Fallback to slug if title is missing
      description: data.description || "",
      content,
      role: data.role,
      duration: data.duration,
      liveUrl: data.liveUrl,
      githubUrl: data.githubUrl,
      technologies: data.technologies,
      images: data.images,
    };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(
      `An error occurred while reading project file for "${slug}": ${errorMessage}`,
    );
    return null;
  }
};