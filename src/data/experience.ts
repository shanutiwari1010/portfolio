import { IExperience } from "@/types/experience";

export const EXPERIENCE_DATA: IExperience[] = [
  {
    title: "Frontend Engineer",
    company: "Blursday AI",
    location: "Bangalore, India",
    period: "November 2024 - February 2025",
    description: [
      "Built a dashboard for the Brand Book Generator using Next.js and shadcn/ui, optimizing maintainability with type-safe reusable components and reducing development time by 30%.",
      "Implemented robust auth, including Google and OTP-based login using Firebase, React Hook Form, Zod, and Redux, enhancing error handling and session management with interceptors and Next.js server actions",
      "Improved and fixed Figma and Canva plugins by integrating APIs and refining the UI/UX for seamless user experiences. Integrated Google Analytics and Datadog to monitor user activities.",
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "React",
      "Redux",
      "Firebase",
      "React Query",
      "shadcn/ui",
      "TailwindCSS",
      "Figma",
      "Canva",
    ],
  },
  {
    title: "Software Development Engineer",
    company: "Techlene Software Solutions",
    location: "Indore, India",
    period: "March 2024 - November 2024",
    description: [
      "Built an IoT platform with WebSockets for real-time data, reduced delays by 30% and enhanced user experience and interaction",
      "Optimized app performance by 25% using Shadcn, Redux, and React Query for better state management and faster load times.",
      "Developed a custom JSON parser and integrated interactive mapping features with Leaflet, improved user engagement by 20%.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Redux",
      "Vite",
      "shadcn/ui",
      "TailwindCSS",
      "React Query",
      "PostgreSQL",
      "RESTful APIs",
    ],
  },
];
