import { Metadata } from "next";
import { Download, GraduationCap, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";
import SocialLinks from "@/components/social-links";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Shanu Tiwari - Software Engineer and Designer",
};

const About = () => {
  return (
    <div className="pt-32">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <SectionHeading title="About Me" highlighter="Me" />
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              A story of growth and discovery
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1 space-y-4">
              <div className="relative aspect-square w-full max-w-xs mx-auto overflow-hidden rounded-lg bg-primary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    Profile Image
                  </span>
                </div>
              </div>

              <SocialLinks />

              <div className="mt-6 flex flex-col space-y-4">
                <Button asChild variant="outline">
                  <a href="/resume" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </a>
                </Button>
              </div>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-foreground">
                Shanu Tiwari
              </h2>
              <p className="mt-1 text-lg text-primary">
                Software Engineer & Web Developer
              </p>

              <div className="mt-6 prose prose-gray dark:prose-invert">
                <p>
                  Hello! I'm Shanu, a dedicated software engineer with a
                  passion for creating elegant and high-performance web
                  applications. With a strong foundation in modern frontend
                  frameworks and backend technologies, I specialize in
                  building seamless digital experiences that balance technical
                  excellence with user-centered design.
                </p>

                <p>
                  My journey in software development began when I discovered
                  the power of creating solutions that solve real-world
                  problems. Since then, I've cultivated expertise in React,
                  Next.js, TypeScript, and various other technologies, always
                  staying at the forefront of industry best practices.
                </p>

                <p>
                  I believe in writing clean, maintainable code and am
                  dedicated to continuous learning and improvement. Whether
                  I'm optimizing application performance, implementing
                  responsive designs, or architecting scalable solutions, I
                  approach each project with enthusiasm and attention to
                  detail.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open source projects, or
                  sharing knowledge through technical writing and mentorship.
                  I'm always open to new challenges and collaborative
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
