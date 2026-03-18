"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, Variants } from "framer-motion"
import { Send } from "lucide-react"

// Premium easing curve (matches Work section)
const premiumEase = [0.76, 0, 0.24, 1]

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
}

const headingVariants: Variants = {
  hidden: { 
    y: 60, 
    opacity: 0, 
    skewY: 3 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    skewY: 0,
    transition: {
      duration: 0.8,
      ease: premiumEase
    }
  }
}

const formContainerVariants: Variants = {
  hidden: { 
    y: 40, 
    opacity: 0,
    scale: 0.98
  },
  visible: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: premiumEase,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const fieldVariants: Variants = {
  hidden: { 
    y: 20, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: premiumEase
    }
  }
}

const buttonVariants: Variants = {
  hidden: { 
    y: 20, 
    opacity: 0,
    scale: 0.95
  },
  visible: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: premiumEase
    }
  }
}

export function Contact() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center py-20">
      <div className="w-full max-w-2xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Heading */}
          <div className="text-center mb-12 overflow-hidden">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-4"
              variants={headingVariants}
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg"
              variants={headingVariants}
            >
              Have a project in mind? Let's talk.
            </motion.p>
          </div>

          {/* Form Container */}
          <motion.div
            variants={formContainerVariants}
            className="p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
          >
            <form className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <motion.div className="space-y-2" variants={fieldVariants}>
                  <label htmlFor="name" className="text-sm text-muted-foreground font-medium">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="h-12 bg-white/5 border-white/10 focus:border-accent/50 rounded-xl transition-colors"
                  />
                </motion.div>
                <motion.div className="space-y-2" variants={fieldVariants}>
                  <label htmlFor="email" className="text-sm text-muted-foreground font-medium">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    className="h-12 bg-white/5 border-white/10 focus:border-accent/50 rounded-xl transition-colors"
                  />
                </motion.div>
              </div>
              
              {/* Message */}
              <motion.div className="space-y-2" variants={fieldVariants}>
                <label htmlFor="message" className="text-sm text-muted-foreground font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  className="min-h-[160px] resize-none bg-white/5 border-white/10 focus:border-accent/50 rounded-xl transition-colors"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={buttonVariants}>
                <Button 
                  type="submit"
                  className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full text-base font-medium"
                  asChild
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </motion.button>
                </Button>
              </motion.div>
            </form>

            {/* Direct email link */}
            <motion.div 
              className="mt-8 pt-6 border-t border-white/5 text-center"
              variants={fieldVariants}
            >
              <p className="text-sm text-muted-foreground">
                Or email me directly at{" "}
                <motion.a 
                  href="mailto:hello@nesjaa.dev" 
                  className="text-accent hover:underline"
                  whileHover={{ scale: 1.05 }}
                  style={{ display: "inline-block" }}
                >
                  hello@nesjaa.dev
                </motion.a>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
