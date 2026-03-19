"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

const ease: [number, number, number, number] = [0.25, 1, 0.5, 1]

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  year: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Drift",
    category: "Brand & Web Design",
    description: "Brand identity and web design for a creative agency pushing boundaries in digital storytelling.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["Branding", "Web Design", "Motion"],
    year: "2025",
  },
  {
    id: 2,
    title: "Garden Eight",
    category: "E-Commerce",
    description: "Full-featured online store with seamless checkout and inventory management.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tags: ["Next.js", "Stripe", "Supabase"],
    year: "2025",
  },
  {
    id: 3,
    title: "Stone & Style",
    category: "Portfolio",
    description: "Minimalist portfolio showcasing architectural work through immersive visual narratives.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    tags: ["React", "Three.js", "GSAP"],
    year: "2024",
  },
  {
    id: 4,
    title: "Aircord",
    category: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization and team collaboration.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Dashboard", "Analytics", "Real-time"],
    year: "2024",
  },
]

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease, delay: index * 0.08 }}
    >
      <a
        href="#"
        className="group block py-8 md:py-10 border-b border-border"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
          {/* Title */}
          <div className="md:flex-1">
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground group-hover:text-[#A855F7] transition-colors duration-400">
              {project.title}
            </h3>
          </div>

          {/* Category */}
          <div className="md:w-[200px]">
            <span className="text-[0.825rem] text-muted-foreground">
              {project.category}
            </span>
          </div>

          {/* Tags */}
          <div className="md:w-[240px] flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[0.75rem] text-muted-foreground px-2.5 py-1 border border-border rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Year */}
          <div className="md:w-[60px] text-right">
            <span className="text-[0.825rem] text-muted-foreground">
              {project.year}
            </span>
          </div>
        </div>

        {/* Hover image preview */}
        <motion.div
          className="overflow-hidden mt-4 md:mt-0 md:absolute md:right-[140px] md:top-1/2 md:-translate-y-1/2 pointer-events-none z-20"
          initial={false}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.95,
          }}
          transition={{ duration: 0.35, ease }}
          style={{ display: isHovered ? "block" : "none" }}
        >
          <div className="hidden md:block relative w-[280px] h-[180px] rounded overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="280px"
            />
          </div>
        </motion.div>
      </a>
    </motion.div>
  )
}

export function WorkRedesign() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })

  return (
    <section id="work" ref={ref} className="py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Section marker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-4 mb-16 md:mb-24"
        >
          <span className="text-[0.75rem] text-muted-foreground tracking-wider uppercase">
            02
          </span>
          <div className="separator flex-1" />
          <span className="text-[0.75rem] text-muted-foreground tracking-wider uppercase">
            Work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="text-title font-heading font-semibold text-foreground mb-16 max-w-lg"
        >
          Selected projects I've brought to life.
        </motion.h2>

        {/* Project list */}
        <div className="relative border-t border-border">
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
