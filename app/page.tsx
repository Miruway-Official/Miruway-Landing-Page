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
import { FloatingShapes } from "@/components/effects/floating-shapes"
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
            duration={1.8}
          />
        )}
      </AnimatePresence>

      {/* Global Floating Shapes Background - Visible on ALL sections */}
      <FloatingShapes />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        
        <SlideContainer>
          
          {/* Slide 1: Hero */}
          <SlideSection id="hero">
            <Hero />
          </SlideSection>

          {/* Slide 2: Tech Stack */}
          <SlideSection id="tech">
            <TechStack />
          </SlideSection>

          {/* Slide 3: Portfolio - Fullscreen Slider */}
          <SlideSection id="portfolio" fullWidth>
            <FullscreenSlider 
              showFloatingShapes={false}
              autoPlay={false}
            />
          </SlideSection>

          {/* Slide 4: Contact */}
          <SlideSection id="contact">
            <Contact />
          </SlideSection>

        </SlideContainer>
      </motion.div>
    </>
  )
}
