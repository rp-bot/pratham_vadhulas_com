import { getRepos } from "../actions/getProjects";
// import ReposList from "./repos-list.component";

const username = "rp-bot"; // Replace with your GitHub username
const INITIAL_NUMBER_OF_USERS = 10;

export default async function ProjectsPage() {
  try {
    const initialRepos = await getRepos(username, INITIAL_NUMBER_OF_USERS);

    console.log(typeof initialRepos[0]);
  } catch (e) {
    console.error(e);
  }

  return (
    <div className=" mx-auto p-4 max-w-screen-lg w-full">
      <h1 className="text-2xl font-bold mb-4">My Public Repositories</h1>
      {/* Pass the fetched repositories to the client component */}
      {/* <ReposList initialRepos={repos} /> */}
    </div>
  );
}
