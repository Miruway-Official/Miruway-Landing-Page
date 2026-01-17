import { BarbaProvider } from "@/components/barba-provider";
import { Slide } from "@/components/ui/slide";
import { HeroSection } from "@/components/sections/hero";
import { TechStackSection } from "@/components/sections/tech-stack";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <BarbaProvider>
      <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar bg-[var(--background)]">
        {/* Section 1: Hero */}
        <Slide id="hero" className="snap-start">
          <HeroSection />
        </Slide>

        {/* Section 2: Tech Stack */}
        <Slide id="tech-stack" className="snap-start bg-black/10">
          <TechStackSection />
        </Slide>

        {/* Section 3: Projects */}
        <Slide id="projects" className="snap-start">
          <ProjectsSection />
        </Slide>

        {/* Section 4: Contact */}
        <Slide id="contact" className="snap-start bg-black/10">
          <ContactSection />
        </Slide>
      </main>
    </BarbaProvider>
  );
}
