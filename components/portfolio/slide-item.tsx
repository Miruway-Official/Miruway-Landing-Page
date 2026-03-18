"use client"

import { motion } from "framer-motion"
import { GlitchImage } from "../effects/glitch-image"

export interface ProjectData {
  id: number
  title: string
  subtitle: string
  image: string
  description: string
  tags: string[]
  link: string
}

interface SlideItemProps {
  project: ProjectData
  direction: number
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.9
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1]
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1]
    }
  })
}

const textVariants = {
  hidden: { 
    y: 100, 
    opacity: 0,
    skewY: 5
  },
  visible: { 
    y: 0, 
    opacity: 1,
    skewY: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.2
    }
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
}

const imageVariants = {
  hidden: { 
    scale: 1.2,
    opacity: 0
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1]
    }
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function SlideItem({ project, direction }: SlideItemProps) {
  // Split title for typography effect
  const titleWords = project.title.split(" ")
  
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
    >
      {/* Central Image Container */}
      <motion.div
        className="relative z-10"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <GlitchImage
          src={project.image}
          alt={project.title}
          width={320}
          height={420}
          className="object-cover"
          glitchIntensity="medium"
          autoGlitch={true}
          glitchInterval={4000}
        />
      </motion.div>

      {/* Bold Typography Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* First Word - Left Side */}
        <motion.div
          className="absolute left-4 md:left-8 lg:left-16"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold text-white leading-none tracking-tighter whitespace-nowrap">
            {titleWords[0] || ""}
          </h1>
        </motion.div>

        {/* Remaining Words - Right/Bottom */}
        {titleWords.length > 1 && (
          <motion.div
            className="absolute right-4 md:right-8 lg:right-16 bottom-1/3"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold text-white leading-none tracking-tighter whitespace-nowrap">
              {titleWords.slice(1).join(" ")}
            </h1>
          </motion.div>
        )}

        {/* Single Word Title - Centered Split */}
        {titleWords.length === 1 && project.title.length > 4 && (
          <motion.div
            className="absolute right-4 md:right-8 lg:right-16"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold text-white leading-none tracking-tighter">
              {/* Show subtitle or decoration */}
            </h1>
          </motion.div>
        )}
      </div>

      {/* Subtitle and Tags (hidden on mobile for cleaner look) */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-white/40 text-sm tracking-wider uppercase mb-2">
          {project.subtitle}
        </p>
        <div className="flex gap-2 justify-center">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span 
              key={i}
              className="text-xs text-white/30 px-2 py-1 border border-white/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default SlideItem
