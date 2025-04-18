import {
  GaugeCircle,
  Layers,
  Ruler,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import { CTAWrapper } from "@/components/sections/cta-section";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import HeroSection from "@/components/sections/hero-section";
import SectionHeading from "@/components/section-heading";
import VibeCodeSection from "@/components/sections/vibe-code-section";
import MicroInteraction from "@/components/micro-interaction";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <section className="my-16 mx-4 py-16 md:py-24 bg-linear-to-t from-background to-muted/70 rounded-2xl">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col justify-center items-center">
            <SectionHeading title="Complex Problems" />
            <h1 className="md:text-7xl text-5xl font-solitreo font-bold text-center text-foreground dark:text-white relative z-20">
              Made Simple
            </h1>
            <div className="w-[30rem] md:w-[40rem] h-20 relative">
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px w-1/4" />
            </div>
          </div>

          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={
                <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Pixel-Perfect Precision"
              description="Figma-to-DOM accuracy. Responsive math. Layouts that lock like Tetris."
            />

            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={
                <Layers className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Design System Architect"
              description="Token-driven, scalable UI components. Zero redundancy. Infinite consistency."
            />

            <GridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/9]"
              icon={
                <Ruler className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Micro-Interactions Aesthetics"
              description="Subtle animations. Real-time feedback. UX that *feels* alive and reactive."
              isMiddle
            />

            <GridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/9/2/13]"
              icon={
                <GaugeCircle className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Performance-First Frontend"
              description="Hydration strategy. Lazy boundaries. Lighthouse 💯 without hacks."
            />

            <GridItem
              area="md:[grid-area:3/1/4/13] xl:[grid-area:2/9/3/13]"
              icon={
                <TerminalSquare className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="DX-Driven Codebase"
              description="CLI tooling. Atomic commits. Type-safe everything. Your future team will thank me."
            />
          </ul>
        </div>
      </section>
      <VibeCodeSection />
      <CTAWrapper
        title="Automate. Simplify. Thrive"
        imageSrc="/assets/agent-cta-background.webp"
        imageAlt="Agent CTA Background"
        buttonLabel="Let's Build Together"
        buttonHref="/contact"
        subtitle="Creating something big? Let's talk."
      />
    </div>
  );
};

export default Home;

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  isMiddle?: boolean;
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  isMiddle,
}: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          borderWidth={2}
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#d4d4d4] dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            {isMiddle && (
              <span className="hidden xl:block">
                <MicroInteraction />
              </span>
            )}
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3 text-left">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
