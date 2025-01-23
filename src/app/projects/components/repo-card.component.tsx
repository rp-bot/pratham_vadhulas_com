import { Repo } from "@/app/lib/types/Repo";
import Image from "next/image";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiRuby,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiGo,
  SiRust,
  SiSwift,
  SiKotlin,
  SiJupyter,
  SiAssemblyscript,
} from "react-icons/si";

const languageIcons: { [key: string]: JSX.Element } = {
  JavaScript: <SiJavascript className="text-yellow-500" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  Python: <SiPython className="text-green-500" />,
  "C++": <SiCplusplus className="text-purple-500" />,
  Ruby: <SiRuby className="text-pink-500" />,
  PHP: <SiPhp className="text-indigo-500" />,
  HTML: <SiHtml5 className="text-orange-500" />,
  CSS: <SiCss3 className="text-teal-500" />,
  Go: <SiGo className="text-cyan-500" />,
  Rust: <SiRust className="text-amber-500" />,
  Swift: <SiSwift className="text-lime-500" />,
  Kotlin: <SiKotlin className="text-fuchsia-500" />,
  "Jupyter Notebook": <SiJupyter className="text-orange-400" />,
  Assembly: <SiAssemblyscript className="text-gray-500" />,
};

interface RepoCardProps {
  repoData: Repo;
}

export function RepoCard({ repoData }: RepoCardProps) {
  const language = repoData.language || "";
  const languageIcon = languageIcons[language] || (
    <span className="">{language}</span>
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200 font-mono">
      {/* Repo Header */}
      <div className="flex items-center mb-4">
        <Image
          src={repoData.owner.avatar_url}
          alt={`${repoData.owner.login}'s avatar`}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="ml-4">
          <a
            href={repoData.owner.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold"
          >
            {repoData.owner.login}
          </a>
          <h2 className="text-lg font-bold">
            <a
              href={repoData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {repoData.name}
            </a>
          </h2>
        </div>
      </div>

      {/* Repo Metadata */}
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          {languageIcon}
          <span>{language}</span>
        </div>
        <div>⭐ {repoData.stargazers_count}</div>
        <div>🍴 {repoData.forks_count}</div>
        <div>🐞 {repoData.open_issues_count}</div>
        <div>⏱ {new Date(repoData.updated_at).toLocaleDateString()}</div>
      </div>
    </div>
  );
}
