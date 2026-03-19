"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import CountUp from "@/components/CountUp"

const ease: [number, number, number, number] = [0.25, 1, 0.5, 1]

const capabilities = [
  {
    area: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    area: "Backend",
    tools: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    area: "Tooling",
    tools: ["Git", "Docker", "Vercel", "Figma", "VS Code"],
  },
]

const stats = [
  { label: "Years of experience", to: 3, suffix: "+" },
  { label: "Projects delivered", to: 50, suffix: "+" },
  { label: "Technologies", to: 15, suffix: "+" },
]

export function AboutRedesign() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })

  return (
    <section id="about" ref={ref} className="py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Section marker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-4 mb-16 md:mb-24"
        >
          <span className="text-[0.75rem] text-muted-foreground tracking-wider uppercase">
            01
          </span>
          <div className="separator flex-1" />
          <span className="text-[0.75rem] text-muted-foreground tracking-wider uppercase">
            About
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left: Statement */}
          <div className="md:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="text-title font-heading font-semibold text-foreground mb-6"
            >
              A developer who cares about craft as much as code.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="text-body-lg text-muted-foreground leading-relaxed"
            >
              I believe great software is invisible. It guides people to their
              goals without getting in the way. Every project I take on is an
              opportunity to solve real problems through thoughtful engineering
              and considered design.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.35 }}
              className="mt-12 flex gap-10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-2xl md:text-3xl font-semibold text-primary">
                    <CountUp to={stat.to} duration={2} />{stat.suffix}
                  </div>
                  <div className="text-[0.8rem] text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Capabilities list */}
          <div className="md:col-span-6 md:col-start-7">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.area}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.2 + i * 0.1 }}
                className={`py-8 ${
                  i !== capabilities.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-[0.8rem] font-medium text-muted-foreground tracking-wider uppercase min-w-[80px]">
                    {cap.area}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 flex-1">
                    {cap.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[0.925rem] text-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
