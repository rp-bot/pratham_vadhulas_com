import ProjectsHighlights from "./components/projects-highlights.component";

export default function Home() {
  return (
    <div className="">
      {/* Hero */}
      <div className="min-h-screen text-white  flex flex-col items-center justify-center">
        <h1 className="bg-zinc-500">Pratham Vadhulas</h1>
      </div>

      {/* Major Projects Highlight */}
      <ProjectsHighlights />
    </div>
  );
}
