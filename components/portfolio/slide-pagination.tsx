"use client"

import { motion } from "framer-motion"

interface SlidePaginationProps {
  current: number
  total: number
  onSelect?: (index: number) => void
}

export function SlidePagination({ current, total, onSelect }: SlidePaginationProps) {
  // Format numbers with leading zero
  const formatNumber = (n: number) => String(n).padStart(1, "0")

  return (
    <motion.div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      {/* Current / Total Display */}
      <div className="flex items-baseline gap-1 text-white">
        <motion.span
          key={current}
          className="text-lg font-medium tabular-nums"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {formatNumber(current + 1)}
        </motion.span>
        <span className="text-white/30 text-sm">/</span>
        <span className="text-white/30 text-sm tabular-nums">
          {formatNumber(total)}
        </span>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect?.(index)}
            className="relative p-1 group"
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current 
                  ? "bg-accent" 
                  : "bg-white/20 group-hover:bg-accent/40"
              }`}
              animate={index === current ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Active Indicator Ring */}
            {index === current && (
              <motion.div
                className="absolute inset-0 rounded-full border border-accent/40"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

export default SlidePagination
