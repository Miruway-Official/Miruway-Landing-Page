"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SlideItem, ProjectData } from "./slide-item"
import { SlideNavigation } from "./slide-navigation"
import { SlidePagination } from "./slide-pagination"
import { FloatingShapes } from "../effects/floating-shapes"

const defaultProjects: ProjectData[] = [
  {
    id: 1,
    title: "DRIFT",
    subtitle: "Creative Agency",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    description: "Brand identity and web design for a creative agency",
    tags: ["Branding", "Web Design", "Motion"],
    link: "#"
  },
  {
    id: 2,
    title: "GARDEN EIGHT",
    subtitle: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    description: "Full-featured online store with seamless checkout",
    tags: ["Next.js", "Stripe", "Supabase"],
    link: "#"
  },
  {
    id: 3,
    title: "STONE & STYLE",
    subtitle: "Architecture Portfolio",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    description: "Minimalist portfolio for an architecture firm",
    tags: ["React", "Three.js", "GSAP"],
    link: "#"
  },
  {
    id: 4,
    title: "AIRCORD",
    subtitle: "SaaS Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "Analytics dashboard with real-time data visualization",
    tags: ["Dashboard", "Analytics", "Real-time"],
    link: "#"
  },
  {
    id: 5,
    title: "MAXILLA",
    subtitle: "Mobile Application",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    description: "Cross-platform mobile app for fitness tracking",
    tags: ["React Native", "Firebase", "Health API"],
    link: "#"
  }
]

interface FullscreenSliderProps {
  projects?: ProjectData[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showNavigation?: boolean
  showPagination?: boolean
  showFloatingShapes?: boolean
}

export function FullscreenSlider({
  projects = defaultProjects,
  autoPlay = false,
  autoPlayInterval = 5000,
  showNavigation = true,
  showPagination = true,
  showFloatingShapes = true
}: FullscreenSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for prev, 1 for next

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }, [projects.length])

  const goToPrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }, [projects.length])

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }, [currentIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        goToNext()
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        goToPrev()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToNext, goToPrev])

  // Auto play
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(goToNext, autoPlayInterval)
    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, goToNext])

  // Touch/Swipe handling
  useEffect(() => {
    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].clientX
      const diff = touchStartX - touchEndX

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToNext()
        } else {
          goToPrev()
        }
      }
    }

    window.addEventListener("touchstart", handleTouchStart)
    window.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [goToNext, goToPrev])

  const currentProject = projects[currentIndex]

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Floating Shapes Background */}
      {showFloatingShapes && <FloatingShapes />}

      {/* Main Slide Content */}
      <AnimatePresence mode="wait" custom={direction}>
        <SlideItem
          key={currentProject.id}
          project={currentProject}
          direction={direction}
        />
      </AnimatePresence>

      {/* Navigation Arrows */}
      {showNavigation && (
        <SlideNavigation onPrev={goToPrev} onNext={goToNext} />
      )}

      {/* Pagination */}
      {showPagination && (
        <SlidePagination
          current={currentIndex}
          total={projects.length}
          onSelect={goToSlide}
        />
      )}

      {/* Header - Logo and Profile */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs text-white/60 tracking-wider">NESJAA ©2024</span>
        </div>
        <button className="text-xs text-white/60 tracking-wider hover:text-accent transition-colors uppercase">
          Profile
        </button>
      </motion.header>

      {/* View Website Link */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a 
          href={currentProject.link}
          className="flex items-center gap-2 text-xs text-white/40 hover:text-accent transition-colors tracking-wider uppercase"
        >
          <svg className="w-4 h-4 rotate-[-45deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          View Website
        </a>
      </motion.div>

      {/* Switch Color Button (decorative) */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-6 h-6 rounded-full border border-accent/30 hover:border-accent/60 hover:bg-accent/10 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        aria-label="Switch Color"
      />
    </div>
  )
}

export default FullscreenSlider
