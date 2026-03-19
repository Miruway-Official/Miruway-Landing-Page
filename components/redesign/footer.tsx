"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const ease: [number, number, number, number] = [0.25, 1, 0.5, 1]

const links = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:hello@nesjaa.dev" },
]

export function FooterRedesign() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <footer ref={ref} className="px-6 md:px-10 py-10 border-t border-border">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, ease }}
        className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        <span className="text-[0.8rem] text-muted-foreground">
          &copy; {new Date().getFullYear()} Miruway
        </span>

        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.8rem] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  )
}
