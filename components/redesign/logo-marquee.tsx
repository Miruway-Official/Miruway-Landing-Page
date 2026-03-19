"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { LogoLoop } from "@/components/LogoLoop"

const ease: [number, number, number, number] = [0.25, 1, 0.5, 1]

// Tech stack logos as text nodes styled with the current theme
const techLogos = [
  { node: <span className="font-heading font-semibold tracking-tight">Next.js</span>, title: "Next.js" },
  { node: <span className="font-heading font-semibold tracking-tight">React</span>, title: "React" },
  { node: <span className="font-heading font-semibold tracking-tight">TypeScript</span>, title: "TypeScript" },
  { node: <span className="font-heading font-semibold tracking-tight">Tailwind</span>, title: "Tailwind CSS" },
  { node: <span className="font-heading font-semibold tracking-tight">Node.js</span>, title: "Node.js" },
  { node: <span className="font-heading font-semibold tracking-tight">Supabase</span>, title: "Supabase" },
  { node: <span className="font-heading font-semibold tracking-tight">PostgreSQL</span>, title: "PostgreSQL" },
  { node: <span className="font-heading font-semibold tracking-tight">Docker</span>, title: "Docker" },
  { node: <span className="font-heading font-semibold tracking-tight">GraphQL</span>, title: "GraphQL" },
  { node: <span className="font-heading font-semibold tracking-tight">Framer Motion</span>, title: "Framer Motion" },
  { node: <span className="font-heading font-semibold tracking-tight">GSAP</span>, title: "GSAP" },
  { node: <span className="font-heading font-semibold tracking-tight">Three.js</span>, title: "Three.js" },
]

// Background color matching --background for fade edges
const FADE_COLOR = "oklch(11% 0.025 290)"

export function LogoMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section ref={ref} className="py-16 md:py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease }}
      >
        {/* Label */}
        <p className="text-center text-[0.75rem] text-muted-foreground tracking-wider uppercase mb-10">
          Technologies I work with
        </p>

        {/* First row — left */}
        <div className="text-muted-foreground/40 mb-4">
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={22}
            gap={48}
            fadeOut
            fadeOutColor={FADE_COLOR}
            pauseOnHover
            scaleOnHover
          />
        </div>

        {/* Second row — right, different speed for visual interest */}
        <div className="text-muted-foreground/25">
          <LogoLoop
            logos={[...techLogos].reverse()}
            speed={40}
            direction="right"
            logoHeight={18}
            gap={56}
            fadeOut
            fadeOutColor={FADE_COLOR}
          />
        </div>
      </motion.div>
    </section>
  )
}
