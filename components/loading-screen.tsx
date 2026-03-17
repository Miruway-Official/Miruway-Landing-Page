"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"

interface LoadingScreenProps {
  onComplete?: () => void
  duration?: number
}

export function LoadingScreen({ onComplete, duration = 2.5 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [showLoading, setShowLoading] = useState(true)
  const counterRef = useRef<{ val: number }>({ val: 0 })

  useEffect(() => {
    // Animate the counter from 0 to 100
    gsap.to(counterRef.current, {
      val: 100,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => {
        setProgress(Math.round(counterRef.current.val))
      },
      onComplete: () => {
        setIsComplete(true)
        // Delay before hiding the loading screen
        setTimeout(() => {
          setShowLoading(false)
          onComplete?.()
        }, 600)
      }
    })

    return () => {
      gsap.killTweensOf(counterRef.current)
    }
  }, [duration, onComplete])

  // Text split animation variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }

  const letterVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      rotateX: -90
    },
    visible: { 
      y: 0, 
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  }

  const exitContainerVariants = {
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  const brandName = "NESJAA"

  return (
    <AnimatePresence mode="wait">
      {showLoading && (
        <motion.div
          className="fixed inset-0 z-9999 bg-black flex flex-col items-center justify-center overflow-hidden"
          variants={exitContainerVariants}
          initial={{ y: 0 }}
          exit="exit"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Brand Name with Letter Animation */}
            <motion.div
              className="flex overflow-hidden mb-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {brandName.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter"
                  style={{ display: "inline-block" }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Progress Counter */}
            <motion.div
              className="flex items-baseline gap-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="text-7xl md:text-9xl font-bold text-gradient-pink tabular-nums">
                {progress}
              </span>
              <span className="text-2xl md:text-4xl font-medium text-accent/60">%</span>
            </motion.div>

            {/* Loading Text */}
            <motion.p
              className="mt-4 text-sm md:text-base text-accent/40 tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {isComplete ? "Complete" : "Loading"}
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              className="mt-8 w-48 md:w-64 h-[2px] bg-accent/10 overflow-hidden rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent origin-left"
                style={{ scaleX: progress / 100 }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <motion.div
            className="absolute top-6 left-6 text-xs text-white/30 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            ©2024
          </motion.div>

          <motion.div
            className="absolute top-6 right-6 text-xs text-white/30 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            PORTFOLIO
          </motion.div>

          <motion.div
            className="absolute bottom-6 left-6 text-xs text-white/30 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            FULL STACK DEVELOPER
          </motion.div>

          <motion.div
            className="absolute bottom-6 right-6 text-xs text-white/30 tracking-wider font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            V.1.0
          </motion.div>

          {/* Animated Lines */}
          <motion.div
            className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-accent/10 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-primary/10 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.4, duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
