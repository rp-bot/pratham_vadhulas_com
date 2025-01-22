import ReposList from "./repos-list.component";

export default async function ProjectsPage() {
  const username = "rp-bot"; // Replace with your GitHub username
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&page=1&per_page=10`,
    { next: { revalidate: 60 } }, // Revalidate every 60 seconds
  );

  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const repos = await res.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Public Repositories</h1>
      {/* Pass the fetched repositories to the client component */}
      <ReposList initialRepos={repos} />
    </div>
  );
}
