"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export function BarbaProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // We use multiple refs for the staggered layers
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (globalThis.barbaInitialized) return;

    // Pre-set initial states
    const layers = [layer1Ref.current, layer2Ref.current, layer3Ref.current];
    gsap.set(layers, { scaleY: 0, transformOrigin: 'bottom' });
    if (textRef.current) gsap.set(textRef.current, { opacity: 0, y: 20 });

    const initBarba = async () => {
      const barba = (await import('@barba/core')).default;
      
      barba.init({
        debug: true,
        transitions: [
          {
            name: 'stagger-curtain',
            sync: true, 
            once() {
              // Initial load - just fade content in or do nothing
            },
            leave() {
              // Animating out: Layers rise up
              const tl = gsap.timeline();
              
              return tl
                .to(layers, {
                  scaleY: 1,
                  transformOrigin: 'bottom',
                  duration: 0.6,
                  stagger: 0.1,
                  ease: "power3.inOut"
                })
                .to(textRef.current, {
                  opacity: 1,
                  y: 0,
                  duration: 0.3,
                  ease: "power2.out"
                }, "-=0.3"); // Show text while layers rise
            },
            enter() {
              // Animating in: Layers fall down (reveal new page)
              const tl = gsap.timeline();
              
              // Ensure we start from full coverage for the 'enter' phase
              gsap.set(layers, { transformOrigin: 'top' });
              
              return tl
                .to(textRef.current, {
                    opacity: 0,
                    y: -20,
                    duration: 0.3
                })
                .to(layers, {
                  scaleY: 0,
                  duration: 0.6,
                  stagger: {
                    each: 0.1,
                    from: "end" // Reverse stagger on reveal
                  },
                  ease: "power3.inOut",
                  delay: 0.1
                }, "-=0.1");
            }
          }
        ],
        prevent: () => true 
      });
      
      globalThis.barbaInitialized = true;
    };

    initBarba();
  }, []);

  // Manual Trigger for Next.js App Router
  useEffect(() => {
    if (!layer1Ref.current) return;

    const layers = [layer1Ref.current, layer2Ref.current, layer3Ref.current];
    const tl = gsap.timeline();

    // 1. Wipe UP (Cover)
    tl.set(layers, { transformOrigin: 'bottom' })
      .to(layers, {
        scaleY: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power4.inOut'
      })
      .to(textRef.current, { opacity: 1, y: 0, duration: 0.3 }, "-=0.3") // Pulse text
      
      // 2. Wait slightly for "loading" feel
      .to({}, { duration: 0.2 }) 
      
      // 3. Wipe DOWN (Reveal)
      .set(layers, { transformOrigin: 'top' })
      .to(textRef.current, { opacity: 0, y: -20, duration: 0.2 })
      .to(layers, {
        scaleY: 0,
        duration: 0.5,
        stagger: { each: 0.05, from: "end" },
        ease: 'power4.inOut'
      });

  }, [pathname]);

  return (
    <>
        {/* Transition Layers */}
        <div ref={layer1Ref} className="fixed inset-0 z-[100] bg-primary/40 pointer-events-none" style={{ transform: 'scaleY(0)' }} />
        <div ref={layer2Ref} className="fixed inset-0 z-[101] bg-secondary/60 pointer-events-none" style={{ transform: 'scaleY(0)' }} />
        <div ref={layer3Ref} className="fixed inset-0 z-[102] bg-background pointer-events-none flex items-center justify-center" style={{ transform: 'scaleY(0)' }}>
            <div ref={textRef} className="text-4xl font-bold tracking-widest text-foreground opacity-0">
                LOADING
            </div>
        </div>
        
        {/* Barba Wrapper */}
        <div data-barba="wrapper">
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
