"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <div className="flex flex-col items-start gap-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Badge variant="outline" className="px-4 py-1.5 text-sm border-primary/50 text-primary bg-primary/5 backdrop-blur-sm rounded-full">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new projects
        </Badge>
      </motion.div>

      <div className="space-y-2">
        <motion.h1 
          className="text-4xl md:text-7xl font-bold tracking-tight text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I'm <span className="text-gradient-pink">NesJaa</span>
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-5xl font-semibold text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Full Stack Developer
        </motion.h2>
      </div>

      <motion.p 
        className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Building beautiful, performant web applications with modern technologies. 
        Specializing in Next.js, React, and interactive animations.
      </motion.p>

      <motion.div 
        className="flex flex-wrap gap-4 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
          View Projects <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg" className="rounded-full px-8">
          Download CV <Download className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>

      <motion.div
        className="flex gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <SocialLink href="https://github.com" icon={<Github className="h-5 w-5" />} />
        <SocialLink href="https://linkedin.com" icon={<Linkedin className="h-5 w-5" />} />
        <SocialLink href="mailto:hello@example.com" icon={<Mail className="h-5 w-5" />} />
      </motion.div>
    </div>
  )
}

function SocialLink({ href, icon }: { href: string; icon: ReactNode }) {
  return (
    <Link 
      href={href} 
      target="_blank"
      className="p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 text-secondary-foreground transition-colors"
    >
      {icon}
    </Link>
  )
}

import { ReactNode } from "react"
