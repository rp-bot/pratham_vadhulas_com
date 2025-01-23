'use server';
import { Repo, GitHubRepo } from '@/app/lib/types/Repo';




export const getRepos = async ( username: string, limit: number ): Promise<Repo[]> =>
{
    try
    {
        // Construct the GitHub API URL
        const url = `https://api.github.com/users/${ username }/repos?sort=updated&page=1&per_page=${ limit }`;
        const response = await fetch( url );

        if ( !response.ok )
        {
            throw new Error( `Failed to fetch repositories: ${ response.statusText }` );
        }

        // Explicitly type the response data
        const apiData: GitHubRepo[] = await response.json();

        // Transform the response data into the Repo type
        const repos: Repo[] = apiData.map( ( repo ) => ( {
            id: repo.id,
            name: repo.name,
            full_name: repo.full_name,
            html_url: repo.html_url,
            description: repo.description,
            language: repo.language,
            owner: {
                login: repo.owner.login,
                avatar_url: repo.owner.avatar_url,
                html_url: repo.owner.html_url,
            },
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            open_issues_count: repo.open_issues_count,
            created_at: repo.created_at,
            updated_at: repo.updated_at,
            pushed_at: repo.pushed_at,
        } ) );


        return repos;

    } catch ( error: unknown )
    {
        console.error( error );
        throw new Error( `An error occurred: ${ error }` );
    }
};
