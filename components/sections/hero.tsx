"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Glow Effects - Mimicking the reference image's blue vertical streaks */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[var(--primary)] to-transparent opacity-50 blur-sm" />
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[var(--secondary)] to-transparent opacity-50 blur-sm" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--primary)] rounded-full opacity-10 blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center text-center space-y-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[var(--accent)] text-xl font-medium tracking-widest uppercase"
        >
          Portfolio
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="text-6xl md:text-8xl font-bold text-white tracking-tighter glow-text"
        >
          CREATIVE
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
            DEVELOPER
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-slate-400 max-w-lg text-lg"
        >
          Crafting digital experiences with code and motion.
          Specializing in Next.js, Framer Motion, and modern UI.
        </motion.p>
      </div>

      {/* Right Side Stats Card - Mimicking the reference image */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 glass-card p-6 rounded-3xl w-64"
      >
        <h3 className="text-4xl font-bold text-white mb-2">5+</h3>
        <p className="text-slate-400 text-sm mb-4">Years of Experience</p>
        <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ delay: 1, duration: 1.5 }}
            className="h-full bg-[var(--accent)]" 
          />
        </div>
        <div className="mt-4 flex justify-between items-end">
          <span className="text-slate-300 text-sm">Satisfaction</span>
          <span className="text-[var(--accent)] font-bold">100%</span>
        </div>
      </motion.div>

      {/* Bottom Left Circular Button - Mimicking the reference image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-10 md:left-20"
      >
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-[var(--primary)] rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
          <div className="relative w-24 h-24 md:w-32 md:h-32 glass-button rounded-full flex items-center justify-center border-2 border-[var(--primary)] group-hover:scale-105 transition-transform">
            <span className="text-white font-bold tracking-widest text-xs md:text-sm">HIRE ME</span>
          </div>
        </div>
      </motion.div>

       {/* Bottom Scroll Indicator */}
       <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-slate-500 w-6 h-6" />
      </motion.div>
    </div>
  );
}
