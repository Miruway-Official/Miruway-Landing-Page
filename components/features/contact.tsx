"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Mail, MessageSquare, Send } from "lucide-react"

export function Contact() {
  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? I'm always interested in hearing about new ideas and opportunities.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Email Me</p>
              <a href="mailto:hello@nesjaa.dev" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                hello@nesjaa.dev
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50">
            <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Socials</p>
              <p className="text-sm text-muted-foreground">@NesJaa on everything</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg shadow-primary/5">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input id="subject" placeholder="Project inquiry..." />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea 
                id="message" 
                placeholder="Tell me about your project..." 
                className="min-h-[120px] resize-none"
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg shadow-primary/20">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Card>
      </motion.div>
    </div>
  )
}
