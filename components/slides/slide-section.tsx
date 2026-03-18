"use client"

import { ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface SlideSectionProps {
  children: ReactNode
  className?: string
  id?: string
  fullWidth?: boolean // For sections that need full viewport width (like portfolio)
}

export function SlideSection({ children, className, id, fullWidth = false }: SlideSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  // For fullWidth sections (like portfolio slider), don't use container wrapper
  if (fullWidth) {
    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          "min-h-screen w-full relative overflow-hidden",
          "bg-transparent text-foreground",
          className
        )}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.76, 0, 0.24, 1]
          }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </section>
    )
  }

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "min-h-screen w-full flex items-center justify-center relative overflow-hidden",
        "bg-transparent text-foreground",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1]
        }}
        className="container mx-auto px-4 md:px-6 py-12 md:py-24 h-full flex flex-col justify-center"
      >
        {children}
      </motion.div>
    </section>
  )
}
