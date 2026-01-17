import { SlideContainer } from "@/components/slides/slide-container"
import { SlideSection } from "@/components/slides/slide-section"
import { Hero } from "@/components/features/hero"
import { TechStack } from "@/components/features/tech-stack"
import { Portfolio } from "@/components/features/portfolio"
import { Contact } from "@/components/features/contact"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      <SlideContainer className="bg-background">
        
        {/* Slide 1: Hero */}
        <SlideSection id="hero">
          <Hero />
        </SlideSection>

        {/* Slide 2: Tech Stack */}
        <SlideSection id="tech" className="bg-secondary/5">
          <TechStack />
        </SlideSection>

        {/* Slide 3: Portfolio */}
        <SlideSection id="portfolio">
          <Portfolio />
        </SlideSection>

        {/* Slide 4: Contact */}
        <SlideSection id="contact" className="bg-gradient-to-b from-background to-primary/5">
          <Contact />
        </SlideSection>

      </SlideContainer>
    </>
  )
}
