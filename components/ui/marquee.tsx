"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface MarqueeProps {
  children: ReactNode
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  speed?: "slow" | "normal" | "fast"
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  speed = "normal"
}: MarqueeProps) {
  const speedClass = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee-fast"
  }

  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:2rem]",
        pauseOnHover && "hover:[&>*]:pause",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap]",
          speedClass[speed],
          reverse && "direction-reverse"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap]",
          speedClass[speed],
          reverse && "direction-reverse"
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default Marquee
