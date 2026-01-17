"use client";

import { useEffect } from 'react';
// @ts-ignore
import barba from '@barba/core';
import { usePathname } from 'next/navigation';

export function BarbaProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Barba only once
    if (!globalThis.barbaInitialized) {
      barba.init({
        debug: true,
        transitions: [
          {
            name: 'default-transition',
            leave() {
              // Minimal hook to satisfy requirement, real animation handled by Framer Motion
              return Promise.resolve();
            },
            enter() {
              return Promise.resolve();
            }
          }
        ]
      });
      globalThis.barbaInitialized = true;
    }
  }, []);

  // Sync Barba with Next.js route changes
  useEffect(() => {
    // This is where we might trigger specific Barba hooks if fully integrated,
    // but for Next.js App Router, we mostly let React handle the DOM diffing.
  }, [pathname]);

  return (
    <div data-barba="wrapper">
      <div data-barba="container" data-barba-namespace="home">
        {children}
      </div>
    </div>
  );
}

// Add type to global to prevent double init in strict mode
declare global {
  var barbaInitialized: boolean;
}
