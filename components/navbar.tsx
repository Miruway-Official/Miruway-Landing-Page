"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import scrollToSection from "@/lib/scrollToSection";
import { motion, Variants } from "framer-motion";

export function Navbar() {

  const navbarVariants: Variants = {
    hidden: {
      width: "60px",
      opacity: 0,
      scale: 0.5
    },
    visible: {
      width: "100%",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, 0.05, 0.01, 0.9],
        delayChildren: 0.6,
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 sm:py-4 flex justify-center">
      <motion.div
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className="glass container mx-auto rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between backdrop-blur-md bg-background/80 border border-white/8 overflow-hidden"
        style={{ maxWidth: '1280px' }}
      >
        {/* Logo */}
        <motion.div variants={itemVariants}>
            <Link href="/" className="text-lg sm:text-xl font-bold tracking-tight text-foreground whitespace-nowrap" onClick={() => scrollToSection('hero')}>
                NesJaa
            </Link>
        </motion.div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-muted-foreground">
          {[
            { label: "Home", action: () => scrollToSection('hero') },
            { label: "Tech Stack", action: () => scrollToSection('tech') },
            { label: "Portfolio", action: () => scrollToSection('portfolio') },
            { label: "Contact", action: () => scrollToSection('contact') },
          ].map((item, index) => (
            <motion.button
                key={index}
                variants={itemVariants}
                onClick={item.action}
                className="hover:text-primary transition-colors whitespace-nowrap"
            >
                {item.label}
            </motion.button>
          ))}
        </div>

        {/* Action Button */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 sm:gap-4">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-4 sm:px-6 text-xs sm:text-sm h-8 sm:h-9 transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            <span>Hire Me</span>
          </Button>
        </motion.div>

      </motion.div>
    </nav>
  );
}

export default Navbar;
