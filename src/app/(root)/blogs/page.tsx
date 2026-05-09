import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import CallToAction from "@/components/call-to-action";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/moving-border";
import { CometCard } from "@/components/ui/comet-card";
import { cn } from "@/lib/utils";

interface BlogCategory {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: {
    src: string;
    alt: string;
    wrapperClassName?: string;
  };
}

const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "nextjs-blogs",
    title: "Next.js",
    tagline: "Modern Web Development",
    description:
      "Getting started with Next.js — build fast, SEO-friendly apps. Learn SSR, SSG, and routing for modern React applications.",
    icon: {
      src: "/assets/nextjs-icon-svgrepo-com.svg",
      alt: "Next.js logo",
      wrapperClassName: "bg-white",
    },
  },
  {
    slug: "javascript",
    title: "Javascript Fundamentals",
    tagline: "Modern Web Development",
    description:
      "Master core programming concepts — variables, functions, objects, and modern ES6+ features for clean, efficient code.",
    icon: {
      src: "/assets/javascript-logo-svgrepo-com.svg",
      alt: "JavaScript logo",
    },
  },
  {
    slug: "operating-system",
    title: "Basics of Operating System",
    tagline: "Modern Web Development",
    description:
      "Understand how processes, memory, and file systems work to see how software interacts with hardware.",
    icon: {
      src: "/assets/window-operating-system-svgrepo-com.svg",
      alt: "Operating system logo",
      wrapperClassName: "bg-black",
    },
  },
];

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Insights, tutorials, and stories from my journey through web development, JavaScript, Next.js, and operating systems.",
};

const Blogs = () => {
  return (
    <div className="pt-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading title="Blogs" highlighter="gs" />
          <p className="mt-4 text-xl text-muted-foreground">
            Insights, tutorials, and stories from my journey in web development
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 justify-items-center gap-y-4 md:mt-0 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_CATEGORIES.map(
            ({ slug, title, tagline, description, icon }) => (
              <CometCard key={slug}>
                <Link
                  href={`/blogs/${slug}`}
                  className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-gray-100 p-2 dark:bg-[#1F2121] md:my-20 md:p-4"
                >
                  <div className="mx-2 flex-1">
                    <div className="mt-2 flex aspect-3/4 w-full flex-col items-center justify-between">
                      <div
                        className={cn(
                          "mt-2 flex h-16 w-16 items-center justify-center rounded-full",
                          icon.wrapperClassName,
                        )}
                      >
                        <Image
                          src={icon.src}
                          alt={icon.alt}
                          width={64}
                          height={64}
                          className="rounded-full object-contain transition-transform duration-150 ease-in-out hover:scale-110"
                        />
                      </div>

                      <h2 className="text-center text-3xl font-bold">
                        {title}
                      </h2>

                      <p className="my-4 font-medium">{tagline}</p>

                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {description}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-2">
                        <Button
                          as="span"
                          borderClassName="dark:saturate-0"
                          className="group cursor-pointer font-medium text-primary dark:text-white dark:saturate-0"
                        >
                          Start Reading
                          <ArrowRight className="h-5 w-5 pl-1 transition-transform duration-200 group-hover:translate-x-1.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </CometCard>
            ),
          )}
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

export default Blogs;
