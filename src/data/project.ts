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
    title: "Latency Topology Visualizer",
    description:
      "Interactive 3D world map built with Next.js and Three.js that visualizes cryptocurrency exchange servers and real-time latency data across AWS, GCP, and Azure. Features animated connections, historical charts, and filtering controls for trading infrastructure monitoring.",
    image: "/assets/latency-topology-visualizer.png",
    tags: ["Next.js", "Three.js", "TypeScript", "Mapbox", "TailwindCSS"],
    github: "https://github.com/shanutiwari1010/latency-topology-visualizer",
    demo: "https://latency-topology-visualizer-stats.vercel.app/",
  },

  {
    title: "Genie-AI",
    description:
      "Built a responsive Genie-AI chat app with OTP login, chatroom management, simulated AI replies, and image upload support. Key features include dark mode, reverse infinite scroll, debounced search, and form validation using React Hook Form + Zod. Developed with Next.js, Redux, Tailwind CSS, and deployed on Vercel.",
    image: "/assets/genie-ai.png",
    tags: ["Next.js", "React Hook Form", "Zod", "TailwindCSS"],
    github: "https://github.com/shanutiwari1010/genie-ai",
    demo: "https://genie-ai-chat.vercel.app/chat",
  },
];
