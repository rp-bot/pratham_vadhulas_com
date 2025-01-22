// app/repos/ReposList.tsx
"use client";

import { useState, useEffect, useRef } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  updated_at: string;
}

interface ReposListProps {
  initialRepos: Repo[];
}

export default function ReposList({ initialRepos }: ReposListProps) {
  const [repos, setRepos] = useState<Repo[]>(initialRepos);
  const [page, setPage] = useState(2); // Start from the second page
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const fetchMoreRepos = async () => {
    if (loading) return; // Prevent multiple fetches

    setLoading(true);
    const username = "rp-bot"; // Replace with your GitHub username
    try {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&page=${page}&per_page=10`,
      );
      if (!res.ok) throw new Error("Failed to fetch repositories");
      const newRepos = await res.json();

      setRepos((prevRepos) => [...prevRepos, ...newRepos]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching more repositories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const lastRepoElement = document.querySelector("#load-more-trigger");
    if (!lastRepoElement) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMoreRepos();
        }
      },
      { threshold: 1.0 },
    );

    observer.current.observe(lastRepoElement);

    return () => {
      if (observer.current && lastRepoElement) {
        observer.current.unobserve(lastRepoElement);
      }
    };
  }, [repos]);

  return (
    <div>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className="mb-4 border-b pb-4">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-lg font-medium"
            >
              {repo.name}
            </a>
            {repo.description && (
              <p className="text-gray-600">{repo.description}</p>
            )}
            <p className="text-sm text-gray-500">
              Last updated: {new Date(repo.updated_at).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>

      {/* Loading Spinner */}
      <div
        id="load-more-trigger"
        className={`flex justify-center mt-4 ${loading ? "animate-spin" : ""}`}
      >
        {loading && (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-gray-500">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
}
