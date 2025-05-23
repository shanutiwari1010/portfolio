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

      <VibeCodeSection />
      <CTAWrapper
        title="Got a Project in Mind?"
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
