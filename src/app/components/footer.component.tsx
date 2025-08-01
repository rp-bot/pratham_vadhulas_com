"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/rp-bot",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/pratham-vadhulas",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: "mailto:prathamvadhulas@gmail.com",
    icon: MdEmail,
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Pratham Vadhulas. All rights reserved.</div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 transition-colors">
                <span className="sr-only">{link.name}</span>
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
