"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "React", level: "Expert" },
  { name: "Next.js", level: "Expert" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "Tailwind CSS", level: "Expert" },
  { name: "Framer Motion", level: "Advanced" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "GraphQL", level: "Intermediate" },
];

export function TechStackSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-white mb-12 text-center md:text-left"
      >
        Tech Stack
        <span className="block text-sm font-normal text-[var(--accent)] mt-2 tracking-widest uppercase">
          Tools & Technologies
        </span>
      </motion.h2>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            variants={item}
            className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors cursor-default group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
              {tech.name[0]}
            </div>
            <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
            <span className="text-xs text-slate-400">{tech.level}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
