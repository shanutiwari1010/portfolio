import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";

interface CTAWrapperProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  buttonLabel: string;
  buttonHref: string;
  subtitle?: string;
}

export function CTAWrapper({
  title,
  imageSrc,
  imageAlt,
  buttonLabel,
  buttonHref,
  subtitle,
}: Readonly<CTAWrapperProps>) {
  return (
    <section
      id="cta"
      className="flex flex-col items-center justify-center w-full my-24 md:my-48"
    >
      <div className="w-full">
        <div className="relative z-20 h-[400px] overflow-hidden w-full border border-border rounded-xl bg-gradient-to-r from-orange-400 dark:from-orange-300 via-orange-200 dark:via-orange-500 to-orange-400 dark:to-orange-300 shadow-xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            decoding="async"
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 -top-32 md:-top-40 flex flex-col items-center justify-center">
            <div className="max-w-xs md:max-w-xl text-center mt-6">
              <SectionHeading title={title} />
            </div>
            <div className="absolute bottom-14 flex flex-col items-center justify-center gap-2">
              <Link href={buttonHref}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full scale-110 shadow-lg"
                >
                  {buttonLabel}
                </Button>
              </Link>
              {subtitle && (
                <span className="text-foreground text-base mt-2">
                  {subtitle}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}