import { getRepos } from "@/app/lib/actions/getProjects";
import { RepoCard } from "./repo-card.component";

const username = "rp-bot"; // Replace with your GitHub username
const INITIAL_NUMBER_OF_USERS = 10;

export async function ReposComponent() {
  const initialRepos = await getRepos(username, INITIAL_NUMBER_OF_USERS);
  return (
    <>
      <div className="flex flex-col gap-3 text-black">
        {initialRepos.map((repo) => (
          <RepoCard key={repo.id} repoData={repo} />
        ))}
      </div>
    </>
  );
}
