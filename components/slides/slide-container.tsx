"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SlideContainerProps {
  children: ReactNode
  className?: string
}

export function SlideContainer({ children, className }: SlideContainerProps) {
  return (
    <main 
      className={cn(
        "h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth",
        "scrollbar-none", // You might want to hide scrollbar via CSS or utility
        className
      )}
    >
      {children}
    </main>
  )
}
