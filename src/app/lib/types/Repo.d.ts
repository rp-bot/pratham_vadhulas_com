// src/app/lib/types/Repo.d.ts

export type Repo = {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    owner: {
        login: string;
        avatar_url: string;
        html_url: string;
    };
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    // Add the new field for latest commit information
    latestCommit?: {
        hash: string;
        date: string;
    };
};

// No changes are needed for the GitHubRepo interface
export interface GitHubRepo
{
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    owner: {
        login: string;
        avatar_url: string;
        html_url: string;
    };
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    created_at: string;
    updated_at: string;
    pushed_at: string;
}