"use client";
import { FaHome, FaProjectDiagram, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
  { name: "About", path: "/about", icon: <FaUser /> },
];

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="flex flex-row items-center justify-evenly w-full">
      <div className="md:hidden self-start w-full p-3">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white bg-gray-500 p-2 rounded"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* MOBILE */}
      <nav
        className={`fixed top-0 right-0 h-full bg-zinc-800 p-10 w-3/4 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-10`}
      >
        <div className="flex flex-col space-y-6">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={`text-white flex items-center space-x-2 hover:text-gray-400 ${
                  isActive ? "font-bold" : ""
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
      {/* Desktop */}
      <nav className="md:flex flex-row items-center justify-evenly w-full hidden bg-zinc-800">
        <div>
          <Link
            href="/"
            className="text-white flex items-center space-x-1 p-3 hover:bg-gray-400"
          >
            <FaHome /> <span>Home</span>
          </Link>
        </div>
        <div>
          <Link
            href="/projects"
            className="text-white flex items-center space-x-1 p-3 hover:bg-gray-400"
          >
            <FaProjectDiagram /> <span>Projects</span>
          </Link>
        </div>
        <div>
          <Link
            href="/about"
            className="text-white flex items-center space-x-1 p-3 hover:bg-gray-400"
          >
            <FaUser /> <span>About</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
