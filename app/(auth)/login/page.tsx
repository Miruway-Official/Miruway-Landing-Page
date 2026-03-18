"use client"

import dynamic from "next/dynamic"
import { LoginForm } from "@/components/login-form"

const LightRays = dynamic(() => import("@/components/LightRays"), { ssr: false })

export default function LoginPage() {
  return (
    <>
      {/* Same WebGL background as homepage */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <LightRays
          raysOrigin="top-center"
          raysColor="#A855F7"
          raysSpeed={0.4}
          lightSpread={1.5}
          rayLength={2.5}
          fadeDistance={1.2}
          saturation={1.2}
          followMouse
          mouseInfluence={0.08}
          noiseAmount={0.02}
          distortion={0.03}
          pulsating
        />
      </div>

      <div className="relative z-10">
        <LoginForm />
      </div>
    </>
  )
}
