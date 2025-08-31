"use client";

import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/moving-border";
import CallToAction from "@/components/call-to-action";
import { CometCard } from "@/components/ui/comet-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="pt-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-4xl text-center ">
          <SectionHeading title="Blogs" highlighter="gs" />
          <p className="mt-4 text-xl text-muted-foreground">
            Insights, tutorials, and stories from my journey in web development
          </p>
        </div>

        <div className="flex flex-wrap  items-center justify-evenly p-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <CometCard className="">
            <Link
              href="blogs/nextjs-blogs"
              className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-gray-100 dark:bg-[#1F2121] p-2  md:my-20 md:p-4 "
            >
              <div className="mx-2 flex-1">
                <div className="flex flex-col justify-between items-center mt-2 aspect-[3/4] w-full">
                  <div className="w-16 h-16 mt-2 rounded-full flex items-center justify-center relative ">
                    <Image
                      src="/assets/nextjs-icon-svgrepo-com.svg"
                      alt="blog img"
                      width={400}
                      height={400}
                      className="object-contain mb-5 bg-white rounded-full border-none hover:scale-110 transition-all duration-75 ease-in-out"
                    />
                  </div>
                  <h1 className="font-bold text-3xl">Next.js</h1>
                  <p className="my-4 font-medium">Modern Web Development</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Getting Started with Next.js - Build fast and SEO-friendly
                    apps with Next.js. Learn SSR, SSG, and routing to create
                    modern React applications.
                  </p>
                  <div className="flex flex-wrap items-center mt-6 gap-2 ">
                    <Button
                      borderClassName="dark:saturate-0"
                      className="dark:saturate-0 dark:text-white cursor-pointer text-primary font-medium"
                    >
                      Start Reading
                      <ArrowRight className="pl-1 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </CometCard>
          <CometCard className="">
            <Link
              href="blogs/javascript"
              className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-gray-100 dark:bg-[#1F2121] p-2  md:my-20 md:p-4 "
            >
              <div className="mx-2 flex-1">
                <div className="flex flex-col justify-between items-center mt-2  aspect-[3/4] w-full">
                  <div className="w-16 h-16 mt-2 rounded-full flex items-center justify-center relative ">
                    <Image
                      src="/assets/javascript-logo-svgrepo-com.svg"
                      alt="blog img"
                      width={400}
                      height={400}
                      className="object-contain mb-5 rounded-lg hover:scale-110 transition-all duration-75 ease-in-out"
                    />
                  </div>
                  <h1 className="font-bold text-3xl text-center ">
                    Javascript Fundamentals
                  </h1>
                  <p className="my-4 font-medium">Modern Web Development</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Master core programming concepts — variables, functions,
                    objects, and modern ES6+ features for clean, efficient code.
                  </p>
                  <div className="flex flex-wrap items-center mt-6 gap-2 ">
                    <Button
                      borderClassName="dark:saturate-0"
                      className="dark:saturate-0 dark:text-white cursor-pointer text-primary font-medium"
                    >
                      Start Reading
                      <ArrowRight className="pl-1 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </CometCard>
          <CometCard className="">
            <Link
              href="blogs/operating-system"
              className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-gray-100  dark:bg-[#1F2121] p-2 md:my-20 md:p-4 "
            >
              <div className="mx-2 flex-1">
                <div className="flex flex-col justify-between items-center mt-2 aspect-[3/4] w-full">
                  <div className="w-16 h-16 mt-2 bg-black rounded-full flex items-center justify-center relative ">
                    <Image
                      src="/assets/window-operating-system-svgrepo-com.svg"
                      alt="blog img"
                      width={400}
                      height={400}
                      className="object-contain rounded-lg mb-5 hover:scale-110 transition-all duration-75 ease-in-out"
                    />
                  </div>
                  <h1 className="font-bold text-3xl text-center">
                    Basics of Operating System
                  </h1>
                  <p className="my-4 font-medium">Modern Web Development</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Understand how processes, memory, and file systems work to
                    see how software interacts with hardware.
                  </p>
                  <div className="flex flex-wrap items-center mt-6 gap-2 ">
                    <Button
                      borderClassName="dark:saturate-0"
                      className="dark:saturate-0 dark:text-white cursor-pointer text-primary font-medium"
                    >
                      Start Reading
                      <ArrowRight className="pl-1 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </CometCard>
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
