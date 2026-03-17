"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Orb configurations
  const orbs = [
    {
      color: "bg-primary/20",
      initial: { x: -100, y: -100 },
      animate: {
        x: [0, 100, 0],
        y: [0, 50, 0],
        scale: [1, 1.2, 1],
      },
      duration: 20,
    },
    {
      color: "bg-purple-500/20",
      initial: { x: 400, y: 100 },
      animate: {
        x: [0, -100, 0],
        y: [0, 100, 0],
        scale: [1, 1.5, 1],
      },
      duration: 25,
    },
    {
      color: "bg-pink-500/20",
      initial: { x: 100, y: 400 },
      animate: {
        x: [0, 150, 0],
        y: [0, -50, 0],
        scale: [1, 1.3, 1],
      },
      duration: 18,
    },
    {
      color: "bg-blue-500/10",
      initial: { x: -200, y: 200 },
      animate: {
        x: [0, -50, 0],
        y: [0, -100, 0],
        scale: [1, 1.4, 1],
      },
      duration: 30,
    }
  ]

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Base gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0)_0%,rgba(17,24,39,1)_100%)] z-10" />

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[100px] ${orb.color}`}
          style={{
            width: "40vw",
            height: "40vw",
            left: orb.initial.x,
            top: orb.initial.y,
          }}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
