"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const ease: [number, number, number, number] = [0.25, 1, 0.5, 1]

export function ContactRedesign() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })

  return (
    <section id="contact" ref={ref} className="py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Section marker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-4 mb-16 md:mb-24"
        >
          <span className="text-[0.75rem] text-muted-foreground tracking-wider uppercase">
            04
          </span>
          <div className="separator flex-1" />
          <span className="text-[0.75rem] text-muted-foreground tracking-wider uppercase">
            Contact
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left: Big statement */}
          <div className="md:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="text-title font-heading font-semibold text-foreground"
            >
              Have a project in mind?
              <br />
              <span className="text-gradient">Let's make it real.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="mt-6 text-body-lg text-muted-foreground max-w-sm"
            >
              I'm always interested in hearing about new projects and opportunities.
            </motion.p>
          </div>

          {/* Right: Contact form */}
          <div className="md:col-span-5 md:col-start-8">
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.25 }}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[0.8rem] font-medium text-muted-foreground mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-border py-3 text-[0.925rem] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[0.8rem] font-medium text-muted-foreground mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent border-b border-border py-3 text-[0.925rem] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[0.8rem] font-medium text-muted-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-border py-3 text-[0.925rem] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 mt-4 text-[0.925rem] font-medium text-foreground hover:text-primary transition-colors duration-300"
              >
                <span>Send message</span>
                <span className="inline-block w-8 h-px bg-current transition-all duration-500 group-hover:w-14" />
              </button>
            </motion.form>

            {/* Direct email */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.45 }}
              className="mt-10 pt-8 border-t border-border"
            >
              <p className="text-[0.825rem] text-muted-foreground">
                Or reach me directly at
              </p>
              <a
                href="mailto:hello@nesjaa.dev"
                className="text-[0.925rem] text-foreground hover:text-primary transition-colors duration-300 mt-1 inline-block"
              >
                hello@nesjaa.dev
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
