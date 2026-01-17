"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Settings, 
  Smartphone,
  Globe,
  Palette,
  Terminal
} from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-6 w-6 text-pink-500" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"]
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6 text-purple-500" />,
    items: ["Node.js", "Express", "Supabase", "PostgreSQL", "Firebase", "Python"]
  },
  {
    category: "Tools & DevOps",
    icon: <Settings className="h-6 w-6 text-blue-500" />,
    items: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"]
  }
]

export function TechStack() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech Stack</h2>
        <p className="text-muted-foreground text-lg">My preferred weapons of choice for building digital products.</p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {skills.map((skill, idx) => (
          <motion.div key={idx} variants={item}>
            <Card className="p-6 h-full border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary-foreground border border-secondary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-white/5"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Stat value="3+" label="Years Experience" />
          <Stat value="20+" label="Projects Built" />
          <Stat value="100%" label="Client Satisfaction" />
          <Stat value="24/7" label="Support" />
        </div>
      </motion.div>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
        {value}
      </span>
      <span className="text-sm text-muted-foreground mt-2">{label}</span>
    </div>
  )
}
