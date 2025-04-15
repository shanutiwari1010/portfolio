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
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 pt-32">
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

        {/* Skills Section */}
        <section className="bg-muted/20 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-foreground">
                Skills & Technologies
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                The tools and technologies I work with
              </p>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express",
                  "TailwindCSS",
                  "Framer Motion",
                  "Redux",
                  "GraphQL",
                  "PostgreSQL",
                  "MongoDB",
                  "Docker",
                  "Kubernetes",
                  "AWS",
                  "Git",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="rounded-lg border bg-card p-4 flex items-center"
                  >
                    <Star className="h-4 w-4 text-primary mr-2" />
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-foreground">Experience</h2>
              <p className="mt-4 text-xl text-muted-foreground">
                My professional journey
              </p>

              <div className="mt-10 space-y-10">
                <div className="relative border-l border-primary/20 pl-6 pb-10">
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full border-4 border-background bg-primary" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Senior Frontend Developer
                    </h3>
                    <p className="text-primary">
                      TechInnovate Solutions - 2022 - Present
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      Leading frontend development for enterprise SaaS
                      applications, optimizing performance, and implementing
                      best practices for scalable architectures.
                    </p>
                  </div>
                </div>

                <div className="relative border-l border-primary/20 pl-6 pb-10">
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full border-4 border-background bg-primary" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Full Stack Developer
                    </h3>
                    <p className="text-primary">
                      Digital Creations Inc. - 2020 - 2022
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      Developed and maintained web applications using React,
                      Node.js, and PostgreSQL. Collaborated with designers and
                      product managers to implement new features and
                      improvements.
                    </p>
                  </div>
                </div>

                <div className="relative border-l border-primary/20 pl-6">
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full border-4 border-background bg-primary" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Frontend Developer
                    </h3>
                    <p className="text-primary">
                      WebSolutions Co. - 2018 - 2020
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      Built responsive web interfaces using modern JavaScript
                      frameworks. Improved application performance and user
                      experience through code optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-muted/20 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-foreground">Education</h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Academic background and professional certifications
              </p>

              <div className="mt-10 space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <GraduationCap className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Master of Computer Science
                    </h3>
                    <p className="text-primary">
                      Stanford University - 2016 - 2018
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      Specialized in Human-Computer Interaction and Software
                      Engineering with a focus on web technologies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <GraduationCap className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Bachelor of Engineering in Computer Science
                    </h3>
                    <p className="text-primary">
                      University of California, Berkeley - 2012 - 2016
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      Graduated with honors. Participated in various hackathons
                      and coding competitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
