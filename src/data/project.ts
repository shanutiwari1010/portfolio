import { IProject } from "@/types/project";

export const PROJECTS_DATA: IProject[] = [
  {
    title: "Reelify",
    description:
      "A full-stack social video sharing platform inspired by Instagram Reels. Features include short video uploads, likes, and comments to drive user engagement. Integrated secure authentication, responsive design, and optimized media storage.",
    image: "/assets/reelify.png",
    tags: [
      "Next.js",
      "MongoDB",
      "NextAuth",
      "imagekit.io",
      "TailwindCSS",
      "DaisyUI",
    ],
    github: "https://github.com/shanutiwari1010/reelify",
    demo: "https://github.com/shanutiwari1010/reelify",
  },
  {
    title: "Pocket Money Tracker",
    description:
      "A personal finance management web app that simplifies expense tracking and budgeting. Built with the MERN stack, including RESTful APIs for transactions and a mobile-friendly UI for managing daily finances effortlessly.",
    image: "/images/projects/pocket-money-tracker.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB", "HTML", "CSS"],
    github: "https://github.com/shanutiwari1010/money-tracker-app",
    demo: "https://github.com/shanutiwari1010/money-tracker-app",
  },
  {
    title: "AI Code Reviewer",
    description:
      "A web-based tool that leverages Google's Gemini 2.0 Flash model to review and suggest improvements for your code. Paste your code to receive instant feedback on readability, performance, best practices, and potential bugs. Built with React.js, Node.js and TailwindCSS, it features a clean and responsive UI.",
    image: "/assets/ai-code-reviewer.png",
    tags: ["React.js", "TailwindCSS", "Node.js"],
    github: "https://github.com/shanutiwari1010/AI-code-reviewer",
    demo: "https://github.com/shanutiwari1010/AI-code-reviewer",
  },
];
