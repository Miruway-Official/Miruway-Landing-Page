"use client"

import { motion } from "framer-motion"

interface SlideNavigationProps {
  onPrev: () => void
  onNext: () => void
}

export function SlideNavigation({ onPrev, onNext }: SlideNavigationProps) {
  return (
    <>
      {/* Previous Button - Left Side */}
      <motion.button
        className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 group"
        onClick={onPrev}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous slide"
      >
        <div className="relative p-3">
          {/* Arrow Icon */}
          <svg 
            className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors rotate-180" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          
          {/* Hover Circle */}
          <motion.div
            className="absolute inset-0 rounded-full border border-white/0 group-hover:border-accent/30"
            initial={false}
            whileHover={{ scale: 1.5, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.button>

      {/* Next Button - Right Side */}
      <motion.button
        className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 group"
        onClick={onNext}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next slide"
      >
        <div className="relative p-3">
          {/* Arrow Icon */}
          <svg 
            className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          
          {/* Hover Circle */}
          <motion.div
            className="absolute inset-0 rounded-full border border-white/0 group-hover:border-accent/30"
            initial={false}
            whileHover={{ scale: 1.5, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.button>
    </>
  )
}

export default SlideNavigation
