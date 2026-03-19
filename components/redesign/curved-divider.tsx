"use client"

import dynamic from "next/dynamic"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const CurvedLoop = dynamic(() => import("@/components/CurvedLoop"), { ssr: false })

const ease: [number, number, number, number] = [0.25, 1, 0.5, 1]

export function CurvedDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease }}
      className="py-8 md:py-16 overflow-hidden"
      aria-hidden="true"
    >
      <CurvedLoop
        marqueeText="Let's build something great together "
        speed={1.5}
        curveAmount={200}
        direction="left"
        interactive
        className="curved-divider-text"
      />
    </motion.section>
  )
}
