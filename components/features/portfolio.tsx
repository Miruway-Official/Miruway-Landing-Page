"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, checkout, and admin dashboard.",
    tags: ["Next.js", "Stripe", "Supabase"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    links: { demo: "#", github: "#" },
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization and reporting.",
    tags: ["React", "Tremor", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    links: { demo: "#", github: "#" },
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    title: "Social Media App",
    description: "Connect with friends, share moments, and chat in real-time.",
    tags: ["Vue", "Firebase", "PWA"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    links: { demo: "#", github: "#" },
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "AI Content Generator",
    description: "Generate blog posts and social media captions using OpenAI GPT-4.",
    tags: ["Next.js", "OpenAI API", "Edge Functions"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    links: { demo: "#", github: "#" },
    gradient: "from-emerald-500 to-teal-500"
  }
]

export function Portfolio() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            A selection of projects that showcase my passion for building high-quality web applications.
          </p>
        </div>
        <Button variant="ghost" className="hidden md:flex gap-2">
          View All Projects <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="relative">
        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="min-w-[85vw] md:min-w-[400px] snap-center first:pl-4 last:pr-4 md:first:pl-0 md:last:pr-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden border-0 bg-card/50 backdrop-blur-sm group">
                {/* Project Image Placeholder / Gradient */}
                <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative flex items-end`}>
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                      <Link href={project.links.github} className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="h-5 w-5" />
                      </Link>
                      <Link href={project.links.demo} className="text-muted-foreground hover:text-foreground transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="md:hidden mt-4 text-center">
        <Button variant="ghost" className="gap-2">
          View All Projects <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
