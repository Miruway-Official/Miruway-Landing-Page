"use client"

import { useState, useEffect } from "react"
import { SlideContainer } from "@/components/slides/slide-container"
import { SlideSection } from "@/components/slides/slide-section"
import { Hero } from "@/components/features/hero"
import { TechStack } from "@/components/features/tech-stack"
import { Contact } from "@/components/features/contact"
import { Navbar } from "@/components/navbar"
import { LoadingScreen } from "@/components/loading-screen"
import { FullscreenSlider } from "@/components/portfolio/fullscreen-slider"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isLoading])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Small delay before showing content for smooth transition
    setTimeout(() => setShowContent(true), 100)
  }

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen 
            onComplete={handleLoadingComplete} 
            duration={2.5}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        
        <SlideContainer className="bg-black">
          
          {/* Slide 1: Hero */}
          <SlideSection id="hero" className="bg-black">
            <Hero />
          </SlideSection>

          {/* Slide 2: Tech Stack */}
          <SlideSection id="tech" className="bg-black">
            <TechStack />
          </SlideSection>

          {/* Slide 3: Portfolio - Fullscreen Slider */}
          <SlideSection id="portfolio" className="bg-black p-0!">
            <div className="w-full h-screen">
              <FullscreenSlider 
                showFloatingShapes={true}
                autoPlay={false}
              />
            </div>
          </SlideSection>

          {/* Slide 4: Contact */}
          <SlideSection id="contact" className="bg-linear-to-b from-black to-primary/10">
            <Contact />
          </SlideSection>

        </SlideContainer>
      </motion.div>
    </>
  )
}
