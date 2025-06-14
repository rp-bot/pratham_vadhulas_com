"use server";

import { Repo } from "@/app/lib/types/Repo";
import matter from "gray-matter";

export interface ProjectData
{
    repo: Repo;
    readme: {
        content: string;
        data: {
            title?: string;
            description?: string;
            role?: string;
            duration?: string;
            liveUrl?: string;
            technologies?: string[];
            images?: string[];
            [ key: string ]: string | string[] | undefined;
        };
    };
}

export const getProjectDetails = async (
    username: string,
    repoSlug: string,
): Promise<ProjectData | null> =>
{
    try
    {
        // Step 1: Fetch the repository details (no headers needed for public repos)
        const repoRes = await fetch(
            `https://api.github.com/repos/${ username }/${ repoSlug }`,
            { next: { revalidate: 3600 } }, // Revalidate cache every hour
        );

        if ( !repoRes.ok )
        {
            console.error(
                `Failed to fetch repo ${ repoSlug }: ${ repoRes.statusText } (Status: ${ repoRes.status })`,
            );
            // Check for rate limit error
            if ( repoRes.status === 403 )
            {
                console.error(
                    "GitHub API rate limit likely exceeded. Consider adding a GITHUB_TOKEN.",
                );
            }
            return null;
        }
        const repoData: Repo = await repoRes.json();

        // Step 2: Fetch the README content for the repository
        const readmeRes = await fetch(
            `https://api.github.com/repos/${ username }/${ repoSlug }/readme`,
            {
                // Request the content in raw format, no auth header needed
                headers: {
                    Accept: "application/vnd.github.raw",
                },
                next: { revalidate: 3600 },
            },
        );

        if ( !readmeRes.ok )
        {
            console.warn( `No README found for ${ repoSlug }` );
            return {
                repo: repoData,
                readme: { content: "No README file found for this project.", data: {} },
            };
        }

        const readmeContent = await readmeRes.text();

        // Step 3: Parse the README content with gray-matter
        const { data, content } = matter( readmeContent );

        return {
            repo: repoData,
            readme: { data, content },
        };
    } catch ( error: unknown )
    {
        const errorMessage = error instanceof Error ? error.message : String( error );
        console.error(
            `An error occurred while fetching project details: ${ errorMessage }`,
        );
        return null;
    }
};