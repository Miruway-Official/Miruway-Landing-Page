"use client"

import { useState, useEffect } from "react"

/**
 * Hook to detect if user prefers reduced motion
 * Respects prefers-reduced-motion media query for accessibility
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === "undefined") return

    // Get the media query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches)

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }

    // Fallback for older browsers
    mediaQuery.addListener(handleChange)
    return () => mediaQuery.removeListener(handleChange)
  }, [])

  return prefersReducedMotion
}

/**
 * Returns animation duration based on reduced motion preference
 * Returns 0 if user prefers reduced motion
 */
export function useAnimationDuration(defaultDuration: number = 0.5): number {
  const prefersReducedMotion = useReducedMotion()
  return prefersReducedMotion ? 0.01 : defaultDuration
}

/**
 * Returns simplified animation variants for reduced motion
 */
export function useMotionVariants<T extends Record<string, unknown>>(
  normalVariants: T,
  reducedVariants: T
): T {
  const prefersReducedMotion = useReducedMotion()
  return prefersReducedMotion ? reducedVariants : normalVariants
}

export default useReducedMotion
