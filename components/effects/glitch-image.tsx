"use client"

import { motion, useAnimationControls } from "framer-motion"
import Image from "next/image"
import { useEffect, useState, useCallback } from "react"

interface GlitchImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  containerClassName?: string
  glitchIntensity?: "low" | "medium" | "high"
  autoGlitch?: boolean
  glitchInterval?: number
  rounded?: boolean
}

export function GlitchImage({
  src,
  alt,
  width = 400,
  height = 500,
  className = "",
  containerClassName = "",
  glitchIntensity = "medium",
  autoGlitch = true,
  glitchInterval = 3000,
  rounded = true
}: GlitchImageProps) {
  const [isGlitching, setIsGlitching] = useState(false)
  const controls = useAnimationControls()

  const intensityConfig = {
    low: { offset: 2, duration: 0.1 },
    medium: { offset: 4, duration: 0.15 },
    high: { offset: 8, duration: 0.2 }
  }

  const { offset, duration } = intensityConfig[glitchIntensity]

  const triggerGlitch = useCallback(async () => {
    setIsGlitching(true)
    
    // Run rapid glitch animation
    await controls.start({
      x: [0, -offset, offset, -offset/2, offset/2, 0],
      transition: { duration: duration * 2, ease: "easeInOut" }
    })
    
    setIsGlitching(false)
  }, [controls, offset, duration])

  useEffect(() => {
    if (!autoGlitch) return

    // Initial glitch after mount
    const initialTimeout = setTimeout(triggerGlitch, 1000)
    
    // Periodic glitch
    const interval = setInterval(() => {
      // Random chance to glitch (70%)
      if (Math.random() > 0.3) {
        triggerGlitch()
      }
    }, glitchInterval)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [autoGlitch, glitchInterval, triggerGlitch])

  const borderRadiusClass = rounded ? "rounded-[2rem]" : ""

  return (
    <div 
      className={`relative ${containerClassName}`}
      style={{ width, height }}
      onMouseEnter={() => !autoGlitch && triggerGlitch()}
    >
      {/* SVG Filters for RGB Channel Separation */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="red-channel">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
            />
          </filter>
          <filter id="cyan-channel">
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
            />
          </filter>
          <filter id="blue-channel">
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Container with rounded corners and overflow hidden */}
      <motion.div
        className={`relative w-full h-full overflow-hidden ${borderRadiusClass} bg-white`}
        animate={controls}
      >
        {/* Base Image */}
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${className}`}
          priority
        />

        {/* Red Channel Layer (shifts left) */}
        <motion.div
          className="absolute inset-0"
          style={{
            filter: "url(#red-channel)",
            mixBlendMode: "screen",
          }}
          animate={isGlitching ? {
            x: [-offset, offset, -offset/2, 0],
            opacity: [0.8, 1, 0.8, 0]
          } : { x: 0, opacity: 0 }}
          transition={{ duration: duration * 2 }}
        >
          <Image
            src={src}
            alt=""
            fill
            className={`object-cover ${className}`}
            aria-hidden="true"
          />
        </motion.div>

        {/* Cyan/Blue Channel Layer (shifts right) */}
        <motion.div
          className="absolute inset-0"
          style={{
            filter: "url(#cyan-channel)",
            mixBlendMode: "screen",
          }}
          animate={isGlitching ? {
            x: [offset, -offset, offset/2, 0],
            opacity: [0.8, 1, 0.8, 0]
          } : { x: 0, opacity: 0 }}
          transition={{ duration: duration * 2 }}
        >
          <Image
            src={src}
            alt=""
            fill
            className={`object-cover ${className}`}
            aria-hidden="true"
          />
        </motion.div>

        {/* Scanline Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.1) 2px,
              rgba(0, 0, 0, 0.1) 4px
            )`,
            opacity: isGlitching ? 0.5 : 0.15
          }}
          animate={isGlitching ? { opacity: [0.15, 0.5, 0.15] } : {}}
          transition={{ duration: duration }}
        />

        {/* Random Horizontal Glitch Lines */}
        {isGlitching && (
          <>
            <motion.div
              className="absolute left-0 right-0 h-[3px] bg-white/30"
              style={{ top: `${Math.random() * 100}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: duration }}
            />
            <motion.div
              className="absolute left-0 right-0 h-[2px] bg-cyan-400/50"
              style={{ top: `${Math.random() * 100}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: duration, delay: duration / 2 }}
            />
            <motion.div
              className="absolute left-0 right-0 h-[4px] bg-red-400/30"
              style={{ top: `${Math.random() * 100}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: [0, 0.7, 0] }}
              transition={{ duration: duration * 0.8 }}
            />
          </>
        )}
      </motion.div>
    </div>
  )
}

export default GlitchImage
