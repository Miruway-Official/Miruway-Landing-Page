"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import scrollToSection from "@/lib/scrollToSection"

export function NavbarRedesign() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-background/90 backdrop-blur-sm border-b border-border"
          : "py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-heading text-base font-semibold tracking-tight text-foreground"
        >
          Miruway
        </button>

        <div className="hidden md:flex items-center gap-10 text-[0.825rem] text-muted-foreground">
          {[
            { label: "About", id: "about" },
            { label: "Work", id: "work" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative hover:text-foreground transition-colors duration-300 py-1"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 text-[0.825rem]">
          <Link
            href="/login"
            className="font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 px-3 py-1.5"
          >
            Sign in
          </Link>
          <span className="text-border">|</span>
          <Link
            href="/signup"
            className="font-medium text-primary hover:text-foreground transition-colors duration-300 px-3 py-1.5"
          >
            Sign up
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
