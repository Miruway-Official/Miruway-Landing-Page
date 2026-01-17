"use client"

import { SignupForm } from "@/components/signup-form"
import { motion } from "framer-motion"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 md:p-10 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-sm md:max-w-4xl relative z-10"
      >
        <SignupForm />
      </motion.div>
    </div>
  )
}