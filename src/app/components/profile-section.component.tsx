// "use client";
import Image from "next/image";
import { AnimatedWrapper } from "./animated-wrapper.component";
import { getRepos } from "../lib/actions/getProjects";
import { FaGithub, FaLinkedin, FaEnvelope, FaUniversity, FaUserGraduate, FaMapMarkerAlt, FaShareAlt } from "react-icons/fa";
import Link from "next/link";

export const ProfileSection = async () => {
  const repos = await getRepos("rp-bot", 5);
  const profileRepo = repos.find((repo) => repo.name === "pratham_vadhulas_com");

  const commitHash = profileRepo?.latestCommit?.hash || "N/A";
  const commitDate = profileRepo?.latestCommit?.date || "N/A";
  return (
    <section className="flex items-center justify-center py-16 md:py-20">
      <div className="w-full max-w-4xl px-4">
        <AnimatedWrapper>
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="md:flex">
              {/* Left Side: Profile Picture */}
              <div className="md:w-1/3 bg-gray-100 p-8 flex flex-col items-center justify-center">
                <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-indigo-500 ring-opacity-50">
                  <Image src="/profile_pic.jpg" width={160} height={160} alt="Your Name" />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500 font-mono">Commit Hash: #{commitHash}</p>
                  <p className="text-xs text-gray-400 font-mono">Commit Date: {commitDate}</p>
                </div>
              </div>

              {/* Right Side: Details */}
              <div className="md:w-2/3 p-8">
                <h1 className="text-4xl font-bold text-gray-900">Pratham Vadhulas</h1>
                <p className="text-lg text-indigo-600 font-semibold mt-1">Software Engineer, ML Engineer, DSP Engineer</p>
                <hr className="my-6 border-gray-200" />
                <div className="space-y-4">
                  {/* Education */}
                  <div className="flex items-center gap-2">
                    <FaUniversity className="text-indigo-600 w-5 h-5" />
                    <span className="w-24 text-sm font-bold text-gray-600">EDU</span>
                    <span className="text-sm text-gray-800 flex items-center gap-2">
                      <Image src="/gt_logo.webp" alt="Georgia Tech Logo" width={24} height={24} className="inline-block" />
                      Georgia Institute of Technology
                    </span>
                  </div>

                  {/* Level */}
                  <div className="flex items-center gap-2">
                    <FaUserGraduate className="text-indigo-600 w-5 h-5" />
                    <span className="w-24 text-sm font-bold text-gray-600">LVL</span>
                    <span className="text-sm text-gray-800">Masters in Music Technology</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-indigo-600 w-5 h-5" />
                    <span className="w-24 text-sm font-bold text-gray-600">LOC</span>
                    <span className="text-sm text-gray-800">Atlanta, USA</span>
                  </div>

                  {/* Socials */}
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600 w-5 h-5">
                      <FaShareAlt className="text-indigo-600 w-5 h-5" />
                    </span>
                    <span className="w-24 text-sm font-bold text-gray-600">SOC</span>
                    <span className="text-sm text-gray-800 flex gap-4 items-center">
                      <a
                        href="https://github.com/rp-bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-indigo-600 transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/pratham-vadhulas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-indigo-600 transition-colors"
                      >
                        <FaLinkedin className="w-5 h-5" />
                        LinkedIn
                      </a>
                      <a href="mailto:pratham.vadhulas@gmail.com" className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                        <FaEnvelope className="w-5 h-5" />
                        Email
                      </a>
                    </span>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <Link href="/projects">
                    <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition-colors font-medium">Projects</button>
                  </Link>
                  <Link href="/about">
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium">About</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};
