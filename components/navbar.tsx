"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import scrollToSection from "@/lib/scrollToSection";
import { motion, Variants } from "framer-motion"; // 1. Import framer-motion

export default function NavbarLanding() {

  // 2. กำหนด Animation Variants
  const navbarVariants: Variants = {
    hidden: {
      width: "60px", // เริ่มต้นความกว้างเท่าความสูง (เพื่อให้เป็นวงกลม)
      opacity: 0,
      scale: 0.5
    },
    visible: {
      width: "100%", // ขยายเต็ม container
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, 0.05, 0.01, 0.9], // Custom cubic-bezier for smooth animation
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
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center">
      {/* 3. เปลี่ยน div เป็น motion.div และใส่ variants */}
      <motion.div 
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className="glass container mx-auto rounded-full px-6 py-3 flex items-center justify-between backdrop-blur-md bg-slate-950/60 border border-white/10 overflow-hidden" // เพิ่ม overflow-hidden เพื่อไม่ให้ของล้นตอนเป็นวงกลม
        style={{ maxWidth: '1280px' }} // กำหนด max-width เพื่อไม่ให้ขยายเกิน container ปกติ
      >
        
        {/* Logo */}
        <motion.div variants={itemVariants}>
            <Link href="/" className="text-2xl font-bold tracking-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 whitespace-nowrap">
                Miruway
            </Link>
        </motion.div>

        {/* Menu (Anchor Links) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {[
            { label: "หน้าหลัก", action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
            { label: "ผลิตภัณฑ์", action: () => scrollToSection('products') },
            { label: "เกี่ยวกับเรา", action: () => scrollToSection('about') },
            { label: "ติดต่อเรา", action: () => scrollToSection('footer') },
          ].map((item, index) => (
            <motion.button 
                key={index}
                variants={itemVariants}
                onClick={item.action} 
                className="hover:text-white transition-colors whitespace-nowrap"
            >
                {item.label}
            </motion.button>
          ))}
        </div>

        {/* Action Button: Enter Shop */}
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block text-sm text-slate-300 hover:text-white transition-colors font-medium whitespace-nowrap">
             เข้าสู่ระบบ
          </Link>
          <Link href="/shop">
            <Button className="rounded-full bg-white text-slate-950 hover:bg-slate-200 font-bold px-6 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all whitespace-nowrap">
              <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
              เข้าสู่ร้านค้า
            </Button>
          </Link>
        </motion.div>

      </motion.div>
    </nav>
  );
}