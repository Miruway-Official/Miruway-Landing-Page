"use client"

import { ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface SlideSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function SlideSection({ children, className, id }: SlideSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "snap-start min-h-screen w-full flex items-center justify-center relative overflow-hidden",
        "bg-background text-foreground",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-6 py-12 md:py-24 h-full flex flex-col justify-center"
      >
        {children}
      </motion.div>
    </section>
  )
}
