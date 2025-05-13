"use client";
import CallToAction from "@/components/call-to-action";
import SectionHeading from "@/components/section-heading";
import Image from "next/image";
import { Button } from "@/components/ui/moving-border";
import { useRouter } from 'next/navigation';

export const blogs = [
  {
    id: 1,
    image: "/assets/getting-started-with-nextjs.png",
    title: "Getting Started with Next.js",
    description: "A Beginner's Guide to the Modern React Framework",
    link: "https://next-wave.hashnode.dev/getting-started-with-nextjs-a-beginners-guide-to-the-modern-react-framework",
  },
  {
    id: 2,
    image: "/assets/nextjs-vs-react.webp",
    title: "Next.js vs React.js",
    description:
      "Understanding how Next.js builds on React to power modern web apps",
    link: "https://next-wave.hashnode.dev/nextjs-vs-reactjs-whats-the-real-difference",
  },
  {
    id: 3,
    image: "/assets/routing.jpeg",
    title: "Routing in Next.js",
    description:
      "A complete guide to navigating pages, links, and dynamic routes in Next.js",
    link: "https://next-wave.hashnode.dev/mastering-routing-in-nextjs-from-basics-to-advanced",
  },
  {
    id: 4,
    image: "/assets/rendering-methods.png",
    title: "Rendering Methods in Next.js",
    description:
      "A deep dive into how Server-Side Rendering and Client-Side Rendering shape user experience in Next.js",
    link: "https://next-wave.hashnode.dev/rendering-methods-in-nextjs-how-html-is-generated-and-delivered",
  },
];

const Blog = () => {
  const router = useRouter();

  return (
    <div className="pt-32">
      <section>
        <div className="mx-auto max-w-4xl text-center mb-16">
          <SectionHeading title="Blogs" highlighter="gs" />
          <p className="mt-4 text-xl text-muted-foreground">
            Insights, tutorials, and stories from my journey in web development
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
         
          {blogs.map(({ id, image, title, description, link }) => (
            <div
              key={id}
              className="rounded-[22px]  sm:p-10  dark:bg-zinc-900  bg-gray-100 "
              
            >
              <Image
                src={image}
                alt="blog img"
                width={400}
                height={400}
                className="object-contain rounded-lg hover:scale-110 transition-all duration-75 ease-in-out"
                
              />
              <p className=" font-semibold sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 text-2xl">
                {title}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {description}
              </p>
              <Button
                borderRadius="1.75rem"
                className=" cursor-pointer text-primary font-medium "
                onClick={() => window.open(link, "_blank")}
              >
                Click to Read
              </Button>
            </div>
          ))}
        </div>
      </section>
      <CallToAction
        title="Built Together. Made to Perform."
        highlighter="Built Together"
        description="Great products are built in collaboration. Let's team up to bring your next big idea to life — pixel-perfect and production-ready."
        buttonText="Let's Collaborate"
        className="max-w-xl"
        href="/contact"
      />
    </div>
  );
};

export default Blog;
