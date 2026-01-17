"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    image: "/api/placeholder/600/400", // Placeholder
    description: "A modern shopping experience built with Next.js and Stripe."
  },
  {
    title: "Dashboard Analytics",
    category: "Frontend",
    image: "/api/placeholder/600/400",
    description: "Real-time data visualization dashboard for SaaS."
  },
  {
    title: "Social Network",
    category: "Mobile App",
    image: "/api/placeholder/600/400",
    description: "Community platform connecting developers worldwide."
  },
  {
    title: "AI Image Generator",
    category: "AI Integration",
    image: "/api/placeholder/600/400",
    description: "Generative art tool using Stable Diffusion API."
  }
];

export function ProjectsSection() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-white mb-8"
      >
        Selected Work
        <span className="block text-sm font-normal text-[var(--accent)] mt-2 tracking-widest uppercase">
          Recent Projects
        </span>
      </motion.h2>

      {/* Horizontal Scroll Container */}
      <div className="w-full overflow-x-auto pb-8 -mx-4 px-4 md:-mx-8 md:px-8 hide-scrollbar">
        <div className="flex gap-8 w-max">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="w-[300px] md:w-[450px] flex-shrink-0 glass-card rounded-3xl overflow-hidden group hover:border-[var(--accent)] transition-colors"
            >
              <div className="h-48 md:h-64 bg-slate-800/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent z-10 opacity-60" />
                {/* Placeholder for project image */}
                <div className="w-full h-full bg-slate-700/30 flex items-center justify-center text-slate-500">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-[var(--accent)] tracking-wider uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
