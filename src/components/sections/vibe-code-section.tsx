"use client";

import React, { useRef, memo } from "react";

import { VIBE_CODE_ICONS as VibeIcon } from "@/data/tech-stack";
import { Circle } from "@/components//ui/circle";
import { AnimatedBeam } from "@/components/animated-beam";
import SectionHeading from "@/components/section-heading";

const VibeCodeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const circleRef0 = useRef<HTMLDivElement>(null);
  const circleRef1 = useRef<HTMLDivElement>(null);
  const circleRef2 = useRef<HTMLDivElement>(null);
  const circleRef3 = useRef<HTMLDivElement>(null);
  const circleRef4 = useRef<HTMLDivElement>(null);
  const circleRef5 = useRef<HTMLDivElement>(null);
  const circleRef6 = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16">
      <SectionHeading
        title="Tech Stack, I Vibe Code With"
        highlighter="Vibe Code"
        className="leading-10"
      />
      <div
        className="relative flex h-[30rem] w-full items-center justify-center overflow-hidden rounded-3xl -mt-20"
        ref={containerRef}
      >
        <div className="flex size-full max-h-[200px] max-w-xs md:max-w-lg flex-col items-stretch justify-between gap-10">
          {/* Top row */}
          <div className="flex flex-row items-center justify-between">
            <Circle ref={circleRef3}>
              <VibeIcon.Framer />
            </Circle>
            <Circle ref={circleRef4}>
              <VibeIcon.TypeScript />
            </Circle>
          </div>

          {/* Middle row */}
          <div className="flex flex-row items-center justify-between">
            <Circle ref={circleRef1} className="rounded-full">
              <VibeIcon.Tailwind />
            </Circle>
            <Circle ref={circleRef0}>
              <VibeIcon.NextJS />
            </Circle>
            <Circle ref={circleRef5}>
              <VibeIcon.Firebase />
            </Circle>
          </div>

          {/* Bottom row */}
          <div className="flex flex-row items-center justify-between">
            <Circle ref={circleRef2}>
              <VibeIcon.Shadcn />
            </Circle>

            <Circle ref={circleRef6}>
              <VibeIcon.TanstackQuery />
            </Circle>
          </div>
        </div>

        {/* Animated beams connecting the circles */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={circleRef3}
          toRef={circleRef0}
          curvature={-75}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={circleRef1}
          toRef={circleRef0}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={circleRef2}
          toRef={circleRef0}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={circleRef4}
          toRef={circleRef0}
          curvature={-75}
          endYOffset={-10}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={circleRef5}
          toRef={circleRef0}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={circleRef0}
          toRef={circleRef6}
          curvature={-75}
          endYOffset={-10}
          reverse
        />
      </div>
    </section>
  );
};

// Add display name to the memoized component
const MemoizedVibeCodeSection = memo(VibeCodeSection);
MemoizedVibeCodeSection.displayName = "VibeCodeSection";

export default MemoizedVibeCodeSection;
