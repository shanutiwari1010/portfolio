import { Metadata } from "next";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

import { EXPERIENCE_DATA } from "@/data/experience";
import { EDUCATION_DATA } from "@/data/education";
import SectionHeading from "@/components/section-heading";
import { Spotlight } from "@/components/spotlight";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience and career journey of Shanu Tiwari",
};

const Experience = () => {
  return (
    <div className="pt-32">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <SectionHeading
              title="Professional Experience"
              highlighter="Experience"
            />
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              My career journey and professional growth
            </p>
          </div>

          <div className="mt-12 space-y-16">
            <div>
              <h2 className="text-2xl font-bold flex items-center">
                <Briefcase className="h-7 w-7 mr-2 text-primary" />
                Work Experience
              </h2>

              <div className="mt-6 space-y-12">
                {EXPERIENCE_DATA.map((exp, index) => (
                  <div
                    key={exp.title + index}
                    className="relative border-l-2 border-primary/20 pl-8 pb-12"
                  >
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1 sm:mt-0">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-lg text-primary">
                      {exp.company} | {exp.location}
                    </p>

                    <ul className="mt-4 space-y-2 list-disc pl-5">
                      {exp.description.map((item, idx) => (
                        <li key={item + idx} className="text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>

                    {exp.skills && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold flex items-center">
                <GraduationCap className="h-7 w-7 mr-2 text-primary" />
                Education
              </h2>

              <div className="mt-6 space-y-12">
                {EDUCATION_DATA.map((edu, index) => (
                  <div
                    key={edu.institution + index}
                    className="relative border-l-2 border-primary/20 pl-8 pb-12 last:pb-0"
                  >
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1 sm:mt-0">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>

                    <p className="text-lg text-primary">
                      {edu.institution} | {edu.location}
                    </p>

                    <p className="mt-4 text-muted-foreground">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
