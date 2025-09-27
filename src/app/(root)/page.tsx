import { CTAWrapper } from "@/components/sections/cta-section";
import HeroSection from "@/components/sections/hero-section";
import VibeCodeSection from "@/components/sections/vibe-code-section";

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
