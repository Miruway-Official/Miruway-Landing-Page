"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

interface ShapeConfig {
  id: number
  top?: string
  bottom?: string
  left?: string
  right?: string
  width: string
  height: string
  borderRadius: string
  duration: number
  delay: number
  opacity: number
  color: "primary" | "accent" | "secondary" | "highlight"
}

const defaultShapes: ShapeConfig[] = [
  {
    id: 1,
    top: "-8%",
    left: "42%",
    width: "220px",
    height: "180px",
    borderRadius: "40% 60% 70% 30% / 30% 30% 70% 70%",
    duration: 20,
    delay: 0,
    opacity: 0.6,
    color: "accent" // Neon Pink
  },
  {
    id: 2,
    bottom: "-12%",
    right: "35%",
    width: "200px",
    height: "160px",
    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    duration: 25,
    delay: 2,
    opacity: 0.5,
    color: "secondary" // Deep Purple
  },
  {
    id: 3,
    top: "45%",
    left: "-6%",
    width: "140px",
    height: "120px",
    borderRadius: "50% 50% 30% 70% / 50% 60% 40% 50%",
    duration: 18,
    delay: 1,
    opacity: 0.4,
    color: "primary" // Berry Pink
  },
  {
    id: 4,
    top: "35%",
    right: "-5%",
    width: "160px",
    height: "140px",
    borderRadius: "30% 70% 50% 50% / 40% 50% 50% 60%",
    duration: 22,
    delay: 3,
    opacity: 0.45,
    color: "highlight" // Soft Pink
  },
  {
    id: 5,
    bottom: "20%",
    left: "10%",
    width: "100px",
    height: "90px",
    borderRadius: "45% 55% 60% 40% / 55% 45% 55% 45%",
    duration: 15,
    delay: 0.5,
    opacity: 0.35,
    color: "accent"
  }
]

// Color mapping to CSS variables
const colorMap = {
  primary: "var(--primary)", // Berry Pink
  accent: "var(--accent)", // Neon Pink
  secondary: "var(--secondary)", // Deep Purple
  highlight: "var(--highlight)" // Soft Pink
}

interface FloatingShapesProps {
  shapes?: ShapeConfig[]
  enableParallax?: boolean
  className?: string
}

export function FloatingShapes({ 
  shapes = defaultShapes, 
  enableParallax = true,
  className = ""
}: FloatingShapesProps) {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring for parallax
  const springConfig = { damping: 50, stiffness: 100 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  useEffect(() => {
    setMounted(true)

    if (!enableParallax) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      // Normalize to -1 to 1 range
      mouseX.set((clientX / innerWidth - 0.5) * 2)
      mouseY.set((clientY / innerHeight - 0.5) * 2)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [enableParallax, mouseX, mouseY])

  if (!mounted) return null

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
      {shapes.map((shape) => (
        <FloatingShape
          key={shape.id}
          shape={shape}
          smoothX={smoothX}
          smoothY={smoothY}
          enableParallax={enableParallax}
        />
      ))}
    </div>
  )
}

interface FloatingShapeProps {
  shape: ShapeConfig
  smoothX: ReturnType<typeof useSpring>
  smoothY: ReturnType<typeof useSpring>
  enableParallax: boolean
}

function FloatingShape({ shape, smoothX, smoothY, enableParallax }: FloatingShapeProps) {
  // Calculate parallax offset based on shape position (depth effect)
  const parallaxMultiplier = (shape.id % 3 + 1) * 15 // Different depths

  const parallaxX = useTransform(smoothX, [-1, 1], [-parallaxMultiplier, parallaxMultiplier])
  const parallaxY = useTransform(smoothY, [-1, 1], [-parallaxMultiplier, parallaxMultiplier])

  const positionStyle: React.CSSProperties = {
    position: "absolute",
    width: shape.width,
    height: shape.height,
    ...(shape.top && { top: shape.top }),
    ...(shape.bottom && { bottom: shape.bottom }),
    ...(shape.left && { left: shape.left }),
    ...(shape.right && { right: shape.right }),
  }

  // Get the color from colorMap or default
  const bgColor = shape.color ? colorMap[shape.color] : colorMap.accent

  return (
    <motion.div
      style={{
        ...positionStyle,
        x: enableParallax ? parallaxX : 0,
        y: enableParallax ? parallaxY : 0,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: shape.opacity, scale: 1 }}
      transition={{ delay: shape.delay * 0.3, duration: 1 }}
    >
      <motion.div
        className="w-full h-full blur-[80px]"
        style={{ 
          borderRadius: shape.borderRadius,
          backgroundColor: bgColor 
        }}
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, -8, 0],
          scale: [1, 1.03, 1],
          borderRadius: [
            shape.borderRadius,
            "60% 40% 50% 50% / 50% 60% 40% 50%",
            "40% 60% 60% 40% / 60% 40% 60% 40%",
            shape.borderRadius
          ]
        }}
        transition={{
          duration: shape.duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: shape.delay
        }}
      />
    </motion.div>
  )
}

export default FloatingShapes
