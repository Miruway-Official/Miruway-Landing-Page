"use client"

import dynamic from "next/dynamic"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { NavbarRedesign } from "@/components/redesign/navbar"
import { HeroRedesign } from "@/components/redesign/hero"
import { LogoMarquee } from "@/components/redesign/logo-marquee"
import { AboutRedesign } from "@/components/redesign/about"
import { WorkRedesign } from "@/components/redesign/work"
import { OpenSourceRedesign } from "@/components/redesign/open-source"
import { CurvedDivider } from "@/components/redesign/curved-divider"
import { ContactRedesign } from "@/components/redesign/contact"
import { FooterRedesign } from "@/components/redesign/footer"

const LightRays = dynamic(() => import("@/components/LightRays"), { ssr: false })

export default function Home() {
  return (
    <SmoothScrollProvider>
      {/* Fixed WebGL background */}
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
        <NavbarRedesign />
        <main className="scrollbar-none">
          <HeroRedesign />
          <LogoMarquee />
          <AboutRedesign />
          <WorkRedesign />
          <OpenSourceRedesign />
          <CurvedDivider />
          <ContactRedesign />
        </main>
        <FooterRedesign />
      </div>
    </SmoothScrollProvider>
  )
}
