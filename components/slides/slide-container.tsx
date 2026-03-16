"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

interface SlideContainerProps {
  children: ReactNode
  className?: string
}

export function SlideContainer({ children, className }: SlideContainerProps) {
  return (
    <SmoothScrollProvider>
      <main 
        className={cn(
          "min-h-screen w-full bg-black",
          "scrollbar-none",
          className
        )}
      >
        {children}
      </main>
    </SmoothScrollProvider>
  )
}
