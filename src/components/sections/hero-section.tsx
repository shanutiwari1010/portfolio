"use client";

import Link from "next/link";
import Image from "next/image";
import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, BriefcaseBusiness, ExternalLink } from "lucide-react";

import { SOCIAL_URLS } from "@/constants";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { AnimatedShinyText } from "@/components/animated-shiny-text";
import AccentText from "@/components/accent-text";
import SocialLinks from "@/components/social-links";

const words = [
  "Software Engineer",
  "Frontend Engineer",
  "Developer & Designer",
];

const imagesData = [
  {
    id: 1,
    src: "/assets/selfie.jpg",
    alt: "Selfie of Shanu",
    width: 400,
    height: 400,
    classes:
      "w-52 h-52 overflow-hidden flex flex-row items-center justify-center shadow-2xl rounded-[52px] border-4 border-black transition-all hover:shadow-sm hover:scale-90 max-xl:w-40 max-xl:h-40 max-lg:w-24 max-lg:h-24 max-xl:rounded-[42px] max-lg:rounded-2xl max-lg:border-2 max-md:hidden absolute rotate-6 right-72",
    additionalStyles: "",
  },
  {
    id: 2,
    src: "/assets/citypalace.jpeg",
    alt: "City palace view",
    width: 400,
    height: 400,
    classes:
      "w-52 h-52 overflow-hidden flex flex-row items-center justify-center shadow-2xl rounded-[52px] border-4 border-black transition-all hover:shadow-sm hover:scale-90 max-xl:w-40 max-xl:h-40 max-lg:w-24 max-lg:h-24 max-xl:rounded-[42px] max-lg:rounded-2xl max-lg:border-2 max-md:hidden absolute -rotate-6 right-14",
    additionalStyles: "scale-150 relative left-12",
  },
  {
    id: 3,
    src: "/assets/laptop.jpg",
    alt: "Working on a laptop",
    width: 850,
    height: 850,
    classes:
      "w-52 h-52 overflow-hidden flex flex-row items-center justify-center shadow-2xl rounded-[52px] border-4 border-black transition-all hover:shadow-sm hover:scale-90 max-xl:w-40 max-xl:h-40 max-lg:w-24 max-lg:h-24 max-xl:rounded-[42px] max-lg:rounded-2xl max-lg:border-2 max-md:hidden absolute -rotate-6 right-72 top-48",
    additionalStyles: "scale-150 relative left-12",
  },
  {
    id: 4,
    src: "/assets/sunkissed.jpeg",
    alt: "Sunkissed portrait",
    width: 400,
    height: 400,
    classes:
      "w-52 h-52 overflow-hidden flex flex-row items-center justify-center shadow-2xl rounded-[52px] border-4 border-black transition-all hover:shadow-sm hover:scale-90 max-xl:w-40 max-xl:h-40 max-lg:w-24 max-lg:h-24 max-xl:rounded-[42px] max-lg:rounded-2xl max-lg:border-2 max-md:hidden absolute rotate-6 right-14 top-48",
    additionalStyles: "",
  },
  {
    id: 5,
    src: "/assets/mirrorselfie.jpg",
    alt: "Mirror selfie",
    width: 400,
    height: 400,
    classes:
      "w-52 h-52 overflow-hidden flex flex-row items-center justify-center shadow-2xl rounded-[52px] border-4 border-black transition-all hover:shadow-sm hover:scale-90 max-xl:w-40 max-xl:h-40 max-lg:w-24 max-lg:h-24 max-xl:rounded-[42px] max-lg:rounded-2xl max-lg:border-2 max-md:hidden absolute right-44 top-24",
    additionalStyles: "",
  },
];

const HeroSection: React.FunctionComponent = () => {
  const renderedImages = useMemo(() => {
    return imagesData.map((image) => (
      <div
        key={image.id}
        className={`${image.classes} shadow-2xl border-4 border-black transition-all hover:shadow-sm hover:scale-90`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          style={{ color: "transparent" }}
          className={image.additionalStyles}
          priority
        />
      </div>
    ));
  }, []);

  return (
    <section className="relative overflow-hidden bg-background pt-32 md:pt-40 pb-16 md:pb-20 min-h-screen">
      <div className="flex flex-col md:flex-row px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-2 max-w-2xl">
          <Link
            href={SOCIAL_URLS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 w-fit rounded-3xl bg-linear-to-r from-orange-100 to-orange-50/0"
          >
            <div className="p-1 w-fit rounded-3xl bg-linear-to-r from-orange-200 to-orange-50/50">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 text-sm font-medium transition hover:text-neutral-600 hover:duration-300 dark:hover:text-neutral-700">
                <span>🎯 Actively Looking for SDE roles</span>
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out" />
              </AnimatedShinyText>
            </div>
          </Link>
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            I'm <AccentText>Shanu Tiwari</AccentText>
          </motion.h1>
          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FlipWords words={words} />
          </motion.h1>
          <div className="space-y-6">
            <motion.p
              className="mt-6 text-lg leading-8 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I build exceptional digital experiences with a focus on
              performance, accessibility, and cutting-edge technologies.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild>
                <Link
                  href={SOCIAL_URLS.mail}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hire Me <BriefcaseBusiness className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link
                  href={SOCIAL_URLS.meeting}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Meeting <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="mt-5 self-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SocialLinks />
          </motion.div>
        </div>
        <div className="images-wrapper flex-1 relative">{renderedImages}</div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
