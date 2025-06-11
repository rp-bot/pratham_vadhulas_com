import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "./components/nav-bar.component";
import { Footer } from "./components/footer.component";

// FunnelSans
const funnelSans = localFont({
  src: "./fonts/FunnelSans.ttf",
  display: "swap",
  variable: "--font-funnelsans",
});

const jetBrainsMono = localFont({
  src: "./fonts/JetBrainsMono.ttf",
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Pratham Vadhulas - CS & Music Technologist",
  description: "Portfolio website showcasing work at the intersection of computer science and music technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${funnelSans.variable} ${jetBrainsMono.variable}`}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
