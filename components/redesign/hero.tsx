"use client"

import { useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import scrollToSection from "@/lib/scrollToSection"

const ease: [number, number, number, number] = [0.25, 1, 0.5, 1]

const rotatingWords = ["matter.", "inspire.", "perform.", "last."]

export function HeroRedesign() {
  const typeRef = useRef<HTMLSpanElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  const typeWord = useCallback((tl: gsap.core.Timeline, word: string) => {
    // Type in character by character
    for (let i = 0; i <= word.length; i++) {
      const slice = word.slice(0, i)
      tl.to(typeRef.current, {
        duration: 0.06,
        onStart: () => {
          if (typeRef.current) typeRef.current.textContent = slice
        },
      })
    }
    // Hold the completed word
    tl.to({}, { duration: 2.2 })
    // Delete character by character (faster)
    for (let i = word.length; i >= 0; i--) {
      const slice = word.slice(0, i)
      tl.to(typeRef.current, {
        duration: 0.035,
        onStart: () => {
          if (typeRef.current) typeRef.current.textContent = slice
        },
      })
    }
    // Brief pause before next word
    tl.to({}, { duration: 0.3 })
  }, [])

  useEffect(() => {
    // Blinking cursor
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      })
    }

    // Build the master timeline after hero entrance (delay ~1.2s)
    const startDelay = setTimeout(() => {
      const tl = gsap.timeline({ repeat: -1 })
      tlRef.current = tl

      for (const word of rotatingWords) {
        typeWord(tl, word)
      }
    }, 1200)

    return () => {
      clearTimeout(startDelay)
      tlRef.current?.kill()
      gsap.killTweensOf(cursorRef.current)
    }
  }, [typeWord])

  return (
    <section
      id="hero"
      className="min-h-svh flex flex-col justify-end pb-16 md:pb-24 pt-32 px-6 md:px-10 max-w-[1200px] mx-auto"
    >
      {/* Overline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.1 }}
        className="text-muted-foreground text-[0.825rem] tracking-wide mb-6 md:mb-8"
      >
        Full Stack Developer based in Bangkok
      </motion.p>

      {/* Main headline - asymmetric, left-aligned */}
      <div className="max-w-[900px]">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="text-display font-heading font-semibold text-foreground"
        >
          I build digital
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="text-display font-heading font-semibold text-foreground"
        >
          experiences that
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="text-display font-heading font-semibold"
        >
          <span ref={typeRef} className="text-gradient">
            {rotatingWords[0]}
          </span>
          <span
            ref={cursorRef}
            className="inline-block w-[3px] md:w-[4px] h-[0.85em] bg-[var(--gradient-end)] ml-1 align-middle translate-y-[0.04em]"
          />
        </motion.h1>
      </div>

      {/* Subtitle + CTA row */}
      <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.6 }}
          className="text-body-lg text-muted-foreground max-w-md"
        >
          Specializing in Next.js, React, and TypeScript. I craft
          performant, accessible interfaces with meticulous attention to detail.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.7 }}
          onClick={() => scrollToSection("work")}
          className="group flex items-center gap-3 text-[0.925rem] font-medium text-foreground"
        >
          <span>See selected work</span>
          <span className="inline-block w-8 h-px bg-foreground transition-all duration-500 group-hover:w-14 group-hover:bg-[var(--gradient-start)]" />
        </motion.button>
      </div>
    </section>
  )
}
