import { Metadata } from "next";
import { ExternalLink, Github } from "lucide-react";

import { PROJECTS_DATA } from "@/data/project";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Projects",
  description: "Showcase of projects developed by Shanu Tiwari",
};

const Projects = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 pt-32">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <SectionHeading title="Featured Projects" highlighter="Projects" />
            <p className="mt-4 text-xl text-muted-foreground">
              A showcase of my work across various technologies and domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map((project, index) => (
              <div
                key={project.title + index}
                className="group rounded-xl border overflow-hidden bg-card transition-all hover:shadow-lg"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary-foreground">
                      Image Placeholder
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    {project.github && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button asChild size="sm">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
