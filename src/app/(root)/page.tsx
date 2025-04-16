import HeroSection from "@/components/sections/hero-section";
import VibeCodeSection from "@/components/sections/vibe-code-section";
import SectionHeading from "@/components/section-heading";
import { CTAWrapper } from "@/components/sections/cta-section";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <VibeCodeSection />
      <section className="my-16 md:py-24 bg-linear-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div>
              <SectionHeading title="Complex Problems" />
              <SectionHeading title="Made Simple" />
            </div>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I transform challenging requirements into elegant, user-friendly
              solutions. With a focus on clean code and optimized performance, I
              deliver software that exceeds expectations.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-6 shadow-xs transition-all hover:shadow-md">
              <h3 className="text-xl font-semibold text-foreground">
                Performance Focused
              </h3>
              <p className="mt-3 text-muted-foreground">
                Optimized applications that deliver exceptional speed and
                responsiveness across all devices.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-xs transition-all hover:shadow-md">
              <h3 className="text-xl font-semibold text-foreground">
                Responsive Design
              </h3>
              <p className="mt-3 text-muted-foreground">
                Pixel-perfect interfaces that adapt beautifully to any screen
                size or device.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-xs transition-all hover:shadow-md">
              <h3 className="text-xl font-semibold text-foreground">
                Modern Architecture
              </h3>
              <p className="mt-3 text-muted-foreground">
                Clean, maintainable code built with the latest frameworks and
                best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
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
