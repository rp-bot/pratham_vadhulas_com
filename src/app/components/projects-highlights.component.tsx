import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ProjectsHighlights = () => {
  const projects = [
    {
      title: "MIDI Gen AI - Chord Prediction Model ",
      links: [
        {
          siteName: "GitHub",
          url: "https://github.com/rp-bot/MIDI-gen-ai",
        },
      ],
      description:
        "MIDI Gen AI is a cutting-edge chord prediction tool, designed using a Transformer neural network architecture. The project is a testament to my proficiency in AI, music theory, and programming. It is hosted as a Google Colab notebook on GitHub, showcasing a fully functional prototype. ",
      full_page: "midi-gen-ai",
    },
    {
      title: "Vision Synth - Hand Gesture Music Interface ",
      links: [
        {
          siteName: "GitHub",
          url: "https://github.com/rp-bot/vision_synth",
        },
      ],
      description:
        "Vision Synth is an innovative and experimental program that transforms hand movements into musical expressions, creating a unique interactive experience. It leverages a vision-based neural network with pretrained weights, utilizing the YOLO hand detection model, to accurately detect hand positions and sizes through a webcam.",
      full_page: "vision-synth",
    },

    {
      title: "Full-Length Album Productions",
      links: [
        {
          siteName: "Album 1: Colorful A.I",
          url: "https://soundcloud.com/rohit-prat/sets/colorful-a-i",
        },
        {
          siteName: "Album 2: Eternal Jump",
          url: "https://soundcloud.com/rohit-prat/sets/eternal-jump",
        },
      ],
      description:
        "DSP Fundamentals is an interactive, digital textbook designed to simplify learning in the field of Digital Signal Processing (DSP), specifically tailored for audio applications. Hosted as a Google Colab notebook, this project eliminates the need for learners to set up a complex coding environment, allowing them to dive directly into the practical aspects of DSP. ",
      full_page: "albums",
    },
    {
      title: "Ultimate MIDI Scraper – Python Web Scraper for MIDI files",
      links: [
        {
          siteName: "GitHub",
          url: "https://github.com/rp-bot/Ultimate-MIDI-Scraper",
        },
      ],
      description:
        "The Ultimate MIDI Scraper is a powerful tool I developed using Python and Selenium, designed to efficiently scrape the web for MIDI files from specified sources. This project showcases my proficiency in web scraping, automation, and my keen interest in music technology.",
      full_page: "ultimate-midi-scraper",
    },
    {
      title: "YouTube Channel",
      links: [
        {
          siteName: "YouTube",
          url: "https://www.youtube.com/@rohitprat",
        },
      ],
      description:
        "As the creator and manager of a YouTube channel, I focus on producing and sharing content that blends my passions for music and coding. The primary goal of my channel is to educate and inspire those who are on a similar journey, offering insights into the worlds of music production and computer programming. ",
      full_page: "youtube-channel",
    },
    {
      title: "Online Piano Roll",
      links: [
        {
          siteName: "GitHub",
          url: "https://github.com/rp-bot/midi-visualizer",
        },
        {
          siteName: "Demo",
          url: "https://rp-midi-visualizer.vercel.app/",
        },
      ],
      description:
        "I am currently developing an Online Piano Roll, a digital music creation tool that allows users to compose and manipulate music through an interactive grid interface. This project is a work in progress, combining the power of Tone.js for audio processing and Next.js for a robust web application framework. ",
      full_page: "midivisualizer",
    },

    {
      title:
        "DSP Fundamentals - An Interactive Textbook on Audio Signal Processing",
      links: [
        {
          siteName: "GitHub",
          url: "https://github.com/rp-bot/DSP-Fundamentals",
        },
      ],
      description:
        "DSP Fundamentals is an interactive, digital textbook designed to simplify learning in the field of Digital Signal Processing (DSP), specifically tailored for audio applications. Hosted as a Google Colab notebook, this project eliminates the need for learners to set up a complex coding environment, allowing them to dive directly into the practical aspects of DSP. ",
      full_page: "dsp-fundamentals",
    },
  ];

  return (
    <div
      className="flex flex-col gap-10 home_background2 py-12"
      id={`ArtisticResume`}
    >
      <h1
        className={`w-fit self-center justify-self-center bg-zinc-800 text-zinc-100 px-1 text-2xl`}
      >
      </h1>
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-zinc-100 rounded-md p-8 flex flex-col gap-4 border-y border-zinc-300"
        >
          <div className={`text-2xl font-bold`}>
            {index + 1}. {project.title}
          </div>
          <div className={`flex flex-col`}>
            {project.links.map((link, linkIndex) => (
              <a
                className={`text-blue-400 text-lg w-fit hover:text-blue-600 transition-all`}
                key={linkIndex}
                href={link.url}
              >
                {link.siteName}
              </a>
            ))}
          </div>
          <div className={`text-zinc-600`}>{project.description}</div>
          <Link
            href={`/projects/${project.full_page}`}
            className={`flex flex-row items-center gap-1  w-fit px-4 py-2 bg-zinc-200 hover:bg-zinc-800 hover:text-zinc-50 transition-all rounded-sm`}
            passHref
          >
            <h3>see more</h3>
            <FaArrowRight />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectsHighlights;
