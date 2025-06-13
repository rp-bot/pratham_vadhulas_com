// src/app/lib/actions/getProjects.ts

'use server';
import { Repo, GitHubRepo } from '@/app/lib/types/Repo';

// Helper function to format date strings into MM.DD.YYYY
const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}.${day}.${year}`;
};

export const getRepos = async (username: string, limit: number): Promise<Repo[]> => {
    try {
        // Step 1: Fetch the initial list of repositories
        const url = `https://api.github.com/users/${username}/repos?sort=updated&page=1&per_page=${limit}`;
        // Using Next.js's fetch for caching (re-fetches at most once per hour)
        const response = await fetch(url, { next: { revalidate: 3600 } });

        if (!response.ok) {
            throw new Error(`Failed to fetch repositories: ${response.statusText}`);
        }

        const apiData: GitHubRepo[] = await response.json();

        // Step 2: Fetch the latest commit for each repository in parallel.
        // This is more efficient than fetching them one by one.
        const reposWithCommits = await Promise.all(
            apiData.map(async (repo) => {
                let latestCommitData;
                try {
                    const commitsUrl = `https://api.github.com/repos/${repo.full_name}/commits?per_page=1`;
                    const commitResponse = await fetch(commitsUrl, { next: { revalidate: 3600 } });

                    if (commitResponse.ok) {
                        const commits = await commitResponse.json();
                        if (commits && commits.length > 0) {
                            latestCommitData = {
                                hash: commits[0].sha.substring(0, 7), // Get a clean 7-char hash
                                date: formatDate(commits[0].commit.author.date),
                            };
                        }
                    }
                } catch (commitError) {
                    // Log the specific error but don't let it crash the entire function
                    console.error(`Could not fetch commit for ${repo.full_name}:`, commitError);
                }

                // Step 3: Combine the original repo data with the new commit data
                return {
                    ...repo,
                    latestCommit: latestCommitData,
                };
            })
        );

        return reposWithCommits;

    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error(errorMessage);
        throw new Error(`An error occurred while fetching repositories: ${errorMessage}`);
    }
};