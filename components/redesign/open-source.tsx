"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const ease: [number, number, number, number] = [0.25, 1, 0.5, 1]

const ACCOUNTS = {
  personal: {
    label: "NesJaaTH",
    href: "https://github.com/NesJaaTH",
  },
  org: {
    label: "Miruway-Official",
    href: "https://github.com/Miruway-Official",
  },
} as const

type Repo = {
  name: string
  description: string
  language: string
  languageColor: string
  href: string
  account: keyof typeof ACCOUNTS
}

// Edit descriptions here — they are intentionally hand-written, not pulled from
// the GitHub API (most of these repos have no description set upstream).
const repos: Repo[] = [
  {
    name: "Miruway-Bordgame-Coup",
    description:
      "Digital adaptation of the Coup bluffing card game with online multiplayer for 2–6 players.",
    language: "TypeScript",
    languageColor: "#3178C6",
    href: "https://github.com/Miruway-Official/Miruway-Bordgame-Coup",
    account: "org",
  },
  {
    name: "Miruway-Landing-Page",
    description:
      "This site. Next.js 16 with WebGL light rays, GSAP typography and an OKLCH design system.",
    language: "TypeScript",
    languageColor: "#3178C6",
    href: "https://github.com/Miruway-Official/Miruway-Landing-Page",
    account: "org",
  },
  {
    name: "ai-configs",
    description:
      "Central repository for managing AI assistant configuration files across multiple projects.",
    language: "TypeScript",
    languageColor: "#3178C6",
    href: "https://github.com/NesJaaTH/ai-configs",
    account: "personal",
  },
  {
    name: "interview-question-009",
    description:
      "Single-page comment app. Go + Fiber v3 + GORM on the back, Vue 3 + Pinia on the front.",
    language: "Go",
    languageColor: "#00ADD8",
    href: "https://github.com/NesJaaTH/interview-question-009",
    account: "personal",
  },
  {
    name: "SphereMorphButton",
    description:
      "Experimental morphing sphere button component built with React and TypeScript.",
    language: "TypeScript",
    languageColor: "#3178C6",
    href: "https://github.com/NesJaaTH/SphereMorphButton",
    account: "personal",
  },
  {
    name: "TaskManager",
    description: "Task management service written in C#.",
    language: "C#",
    languageColor: "#512BD4",
    href: "https://github.com/NesJaaTH/TaskManager",
    account: "personal",
  },
]

export function OpenSourceRedesign() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })

  return (
    <section
      id="open-source"
      ref={ref}
      className="py-28 md:py-40 px-6 md:px-10"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section marker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-4 mb-16 md:mb-24"
        >
          <span className="text-[0.75rem] text-muted-foreground tracking-wider uppercase">
            03
          </span>
          <div className="separator flex-1" />
          <span className="text-[0.75rem] text-muted-foreground tracking-wider uppercase">
            Open Source
          </span>
        </motion.div>

        {/* Intro + account links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
          <div className="md:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="text-title font-heading font-semibold text-foreground"
            >
              Most of what I build
              <br />
              <span className="text-gradient">lives on GitHub.</span>
            </motion.h2>
          </div>

          <div className="md:col-span-5 md:col-start-8 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="text-body-lg text-muted-foreground"
            >
              Client work, side experiments and the tooling that keeps both
              moving. Two accounts, one habit of shipping in the open.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3"
            >
              {Object.values(ACCOUNTS).map((account) => (
                <a
                  key={account.label}
                  href={account.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[0.925rem] font-medium text-foreground hover:text-primary transition-colors duration-300"
                >
                  <span>@{account.label}</span>
                  <span className="inline-block w-8 h-px bg-current transition-all duration-500 group-hover:w-14" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Repo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.href}
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.25 + i * 0.07 }}
              className="group bg-background p-8 flex flex-col gap-4 transition-colors duration-300 hover:bg-foreground/[0.03]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-[0.975rem] font-medium text-foreground group-hover:text-primary transition-colors duration-300 break-words">
                  {repo.name}
                </h3>
                <span
                  aria-hidden="true"
                  className="text-muted-foreground shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </div>

              <p className="text-[0.875rem] text-muted-foreground leading-relaxed flex-1">
                {repo.description}
              </p>

              <div className="flex items-center gap-4 pt-2 text-[0.75rem] text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  {repo.language}
                </span>
                <span className="text-border">/</span>
                <span className="tracking-wider uppercase">
                  {ACCOUNTS[repo.account].label}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
