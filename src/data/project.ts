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
    title: "Auth Dashboard",
    description:
      "A complete authentication system featuring secure login, signup, and protected routes using JWT. Includes a sample dashboard with user-specific content and responsive UI. Built with React.js, Shadcn UI and TailwindCSS ,it ensures secure access control and user session management.",
    image: "/assets/auth-dashboard.png",
    tags: ["React.js", "TailwindCSS","Shadcn UI"],
    github: "https://github.com/shanutiwari1010/auth-dashboard-assignment.git",
    demo: "https://auth-dashboard-assignment.vercel.app",
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
