"use client"

import { Suspense, lazy, useState, useEffect } from "react"
import { motion } from "framer-motion"

// Lazy load the 3D scene to improve initial load time
const CrystalScene = lazy(() => import("./crystal-object").then(mod => ({ default: mod.CrystalScene })))

interface SceneContainerProps {
  className?: string
  variant?: "single" | "cluster" | "scattered"
  showLoader?: boolean
  fallback?: React.ReactNode
}

// Loading placeholder
function SceneLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="w-16 h-16 border border-white/20 rounded-full"
        animate={{ 
          rotate: 360,
          borderColor: ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.5)", "rgba(255,255,255,0.2)"]
        }}
        transition={{ 
          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
          borderColor: { duration: 1.5, repeat: Infinity }
        }}
      >
        <motion.div
          className="w-full h-full border-t-2 border-white rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  )
}

export function SceneContainer({ 
  className = "",
  variant = "cluster",
  showLoader = true,
  fallback
}: SceneContainerProps) {
  const [isClient, setIsClient] = useState(false)
  const [hasWebGL, setHasWebGL] = useState(true)

  useEffect(() => {
    setIsClient(true)
    
    // Check WebGL support
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      setHasWebGL(!!gl)
    } catch {
      setHasWebGL(false)
    }
  }, [])

  // SSR fallback
  if (!isClient) {
    return fallback || (showLoader ? <SceneLoader /> : null)
  }

  // No WebGL fallback
  if (!hasWebGL) {
    return (
      <div className={`w-full h-full flex items-center justify-center ${className}`}>
        <div className="text-white/30 text-sm">
          3D not supported in this browser
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <Suspense fallback={showLoader ? <SceneLoader /> : fallback}>
        <CrystalScene variant={variant} background="transparent" />
      </Suspense>
    </div>
  )
}

export default SceneContainer
