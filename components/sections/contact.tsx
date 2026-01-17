"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function ContactSection() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-12 rounded-[3rem] w-full max-w-3xl border-t border-l border-white/10 shadow-[0_0_50px_-12px_var(--primary)]"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's Work Together
        </h2>
        <p className="text-slate-400 mb-10 max-w-lg mx-auto text-lg">
          Have a project in mind? I'm currently open for new opportunities.
        </p>

        <a 
          href="mailto:contact@example.com" 
          className="inline-block px-10 py-4 bg-[var(--primary)] hover:bg-[var(--accent)] text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-[var(--primary)]/30 mb-12"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-8">
          {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ y: -5, color: "var(--accent)" }}
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <footer className="absolute bottom-8 text-slate-600 text-xs">
        © 2026 Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
