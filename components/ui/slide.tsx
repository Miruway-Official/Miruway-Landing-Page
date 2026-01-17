"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Slide({ children, className, id }: SlideProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "h-screen w-full snap-start overflow-y-auto overflow-x-hidden relative",
        "flex flex-col items-center justify-center",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 min-h-full flex flex-col justify-center"
      >
        {children}
      </motion.div>
    </section>
  );
}
