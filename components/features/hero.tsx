"use client"

import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import scrollToSection from "@/lib/scrollToSection"

export function Hero() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl px-6">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm <span className="text-gradient-pink">NesJaa</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Full Stack Developer specializing in modern web applications
          with Next.js, React, and interactive experiences.
        </motion.p>

        <motion.div 
          className="flex gap-4 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button 
            size="lg" 
            className="rounded-full px-8 bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => scrollToSection('portfolio')}
          >
            View Work <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-3 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <SocialLink href="https://github.com" icon={<Github className="h-4 w-4" />} />
          <SocialLink href="https://linkedin.com" icon={<Linkedin className="h-4 w-4" />} />
          <SocialLink href="mailto:hello@nesjaa.dev" icon={<Mail className="h-4 w-4" />} />
        </motion.div>
      </div>
    </div>
  )
}

function SocialLink({ href, icon }: { href: string; icon: ReactNode }) {
  return (
    <Link 
      href={href} 
      target="_blank"
      className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
    >
      {icon}
    </Link>
  )
}
