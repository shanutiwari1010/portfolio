import { IProject } from "@/types/project";

export const PROJECTS_DATA: IProject[] = [
  {
    title: "Reelify",
    description:
      "A full-stack social video sharing platform inspired by Instagram Reels. Features include short video uploads, likes, and comments to drive user engagement. Integrated secure authentication, responsive design, and optimized media storage.",
    image: "/images/projects/reelify.jpg",
    tags: [
      "Next.js",
      "MongoDB",
      "NextAuth",
      "imagekit.io",
      "TailwindCSS",
      "DaisyUI",
    ],
    github: "https://github.com/yourusername/reelify",
    demo: "https://reelify-demo.vercel.app",
  },
  {
    title: "Pocket Money Tracker",
    description:
      "A personal finance management web app that simplifies expense tracking and budgeting. Built with the MERN stack, including RESTful APIs for transactions and a mobile-friendly UI for managing daily finances effortlessly.",
    image: "/images/projects/pocket-money-tracker.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB", "HTML", "CSS"],
    github: "https://github.com/yourusername/pocket-money-tracker",
    demo: "https://pocketmoney.vercel.app",
  },
  {
    title: "Portfolio Website",
    description:
      "A clean and responsive portfolio built with Next.js, highlighting professional projects and skills. Includes dynamic routing, SEO enhancements, and subtle animations for an engaging user experience.",
    image: "/images/projects/portfolio.jpg",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourname.vercel.app",
  },
];
