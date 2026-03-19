"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import scrollToSection from "@/lib/scrollToSection";
import { motion, Variants } from "framer-motion";

export function Navbar() {
  const navbarVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <motion.div
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto flex items-center justify-between"
      >
        {/* Logo */}
        <Link 
          href="/" 
          className="text-lg font-bold tracking-tight text-foreground hover:text-accent transition-colors" 
          onClick={() => scrollToSection('hero')}
        >
          NesJaa
        </Link>

        {/* Minimal Menu - Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <button
            onClick={() => scrollToSection('tech')}
            className="hover:text-foreground transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="hover:text-foreground transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </div>

        {/* CTA */}
        <Button 
          onClick={() => scrollToSection('contact')}
          size="sm"
          className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-5"
        >
          Hire Me
        </Button>
      </motion.div>
    </nav>
  );
}

export default Navbar;
