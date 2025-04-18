import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";

interface CallToActionProps {
  title?: string;
  description?: string;
  highlighter?: string;
  buttonText?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title = "Ready to build your next AI Agent?",
  description,
  highlighter = "AI Agent",
  buttonText = "Let's Connect",
  href = "/contact",
  className,
  children,
}) => {
  return (
    <section className="relative z-10 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="container text-center bg-gradient-to-t from-background to-muted/70 dark:from-neutral-950 dark:to-neutral-900/70 backdrop-blur-lg rounded-2xl p-10 shadow-xl border border-neutral-200 dark:border-neutral-800">
        <div className="mb-10">
          {children ? (
            children
          ) : (
            <SectionHeading
              title={title}
              highlighter={highlighter}
              className="md:text-6xl"
            />
          )}
        </div>
        <div className={cn("space-y-2 mt-14 max-w-sm mx-auto", className)}>
          <Link href={href} passHref>
            <Button
              className="font-semibold shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              size="lg"
              aria-label={buttonText}
            >
              {buttonText}
            </Button>
          </Link>
          {description && (
            <p className="mt-4 mx-auto text-muted-foreground text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
