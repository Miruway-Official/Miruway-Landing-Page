"use client";

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

export function BarbaProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Refs for transition layers
  const overlayRef = useRef<HTMLDivElement>(null);
  const clipLayerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Initialize transition elements
  useEffect(() => {
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { 
        yPercent: 100,
        visibility: 'hidden'
      });
    }
    if (clipLayerRef.current) {
      gsap.set(clipLayerRef.current, {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
      });
    }
    if (textRef.current) {
      gsap.set(textRef.current, { opacity: 0, y: 30 });
    }
    if (progressRef.current) {
      gsap.set(progressRef.current, { scaleX: 0 });
    }
  }, []);

  // Page transition effect
  useEffect(() => {
    // Skip on first mount
    if (!overlayRef.current || !isTransitioning) return;

    const tl = gsap.timeline({
      onComplete: () => setIsTransitioning(false)
    });

    // Phase 1: Cover with slide up
    tl.set(overlayRef.current, { visibility: 'visible', yPercent: 100 })
      .to(overlayRef.current, {
        yPercent: 0,
        duration: 0.6,
        ease: 'power4.inOut'
      })
      // Animate progress bar
      .to(progressRef.current, {
        scaleX: 1,
        duration: 0.4,
        ease: 'power2.out'
      }, '-=0.3')
      // Show transition text
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      }, '-=0.2')
      // Counter animation
      .to({ val: 0 }, {
        val: 100,
        duration: 0.3,
        ease: 'power1.out',
        onUpdate: function() {
          if (counterRef.current) {
            counterRef.current.textContent = Math.round(this.targets()[0].val).toString();
          }
        }
      }, '-=0.3')
      // Hold for a moment
      .to({}, { duration: 0.15 })
      // Phase 2: Reveal with slide up
      .to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.2,
        ease: 'power2.in'
      })
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 0.6,
        ease: 'power4.inOut'
      }, '-=0.1')
      // Reset progress for next transition
      .set(progressRef.current, { scaleX: 0 })
      .set(overlayRef.current, { visibility: 'hidden' });

  }, [pathname, isTransitioning]);

  // Trigger transition on pathname change (except initial load)
  const isFirstMount = useRef(true);
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    setIsTransitioning(true);
  }, [pathname]);

  return (
    <>
      {/* Transition Overlay */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center pointer-events-none"
        style={{ visibility: 'hidden' }}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Transition Content */}
        <div ref={textRef} className="relative z-10 text-center opacity-0">
          {/* Brand Mark */}
          <motion.div
            className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            N
          </motion.div>
          
          {/* Counter */}
          <div className="flex items-baseline justify-center gap-1 text-white/60">
            <span ref={counterRef} className="text-2xl font-medium tabular-nums">0</span>
            <span className="text-sm">%</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48">
          <div className="h-[2px] bg-white/10 overflow-hidden">
            <div 
              ref={progressRef}
              className="h-full bg-white origin-left"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-6 left-6 text-xs text-white/30 tracking-wider">
          NESJAA
        </div>
        <div className="absolute top-6 right-6 text-xs text-white/30 tracking-wider">
          ©2024
        </div>
        <div className="absolute bottom-6 left-6 text-xs text-white/30 tracking-wider font-mono">
          LOADING
        </div>
        <div className="absolute bottom-6 right-6 text-xs text-white/30 tracking-wider">
          V.1.0
        </div>
      </div>

      {/* Clip Path Reveal Layer (alternative effect) */}
      <div
        ref={clipLayerRef}
        className="fixed inset-0 z-[199] bg-primary/20 pointer-events-none"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
      />

      {/* Main Content */}
      <div data-barba="wrapper" className="relative">
        <div data-barba="container" data-barba-namespace="home">
          {children}
        </div>
      </div>
    </>
  );
}

declare global {
  var barbaInitialized: boolean;
}
