"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../lib/utils";

interface ScrollFlyInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode; 
  secondText?: React.ReactNode; 
  bottomContent?: React.ReactNode;
  imageUrl: string;
  imageAlt?: string;
  background?: React.ReactNode;
}

const ScrollFlyIn = React.forwardRef<HTMLDivElement, ScrollFlyInProps>(
  ({ children, secondText, bottomContent, background, imageUrl, imageAlt = "Animated image", className, ...props }, ref) => {
    const targetRef = React.useRef<HTMLDivElement>(null);
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;

    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end end"],
    });

    // 0 to 0.4: Plane flies across
    const planeX = useTransform(scrollYProgress, [0, 0.4], [`-${1.5*screenWidth}px`, `${1.5*screenWidth}px`]);
    const planeOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.4], [0, 1, 1, 0]);

    // 0.35 to 0.45: First Text fades out
    const text1Opacity = useTransform(scrollYProgress, [0, 0.35, 0.45, 1], [1, 1, 0, 0]);
    const text1Y = useTransform(scrollYProgress, [0, 0.35, 0.45, 1], [0, 0, -30, -30]);
    const text1Filter = useTransform(scrollYProgress, [0, 0.35, 0.45, 1], ["blur(0px)", "blur(0px)", "blur(10px)", "blur(10px)"]);

    // 0.45 to 0.55: Second Text fades in
    const text2Opacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0, 0, 1, 1]);
    const text2Y = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [30, 30, 0, 0]);
    const text2Filter = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], ["blur(10px)", "blur(10px)", "blur(0px)", "blur(0px)"]);

    return (
      <div ref={targetRef} className={cn("relative h-[300vh]", className)} {...props}>
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
          
          {/* Background Layer */}
          {background && (
            <div className="absolute inset-0 z-0 pointer-events-none">
              {background}
            </div>
          )}

          {/* First Text Content */}
          <motion.div 
            className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6"
            style={{ opacity: text1Opacity, y: text1Y, filter: text1Filter }}
          >
            <div className="pointer-events-auto w-full max-w-5xl">
              {children}
            </div>
          </motion.div>

          {/* Second Text Content */}
          {secondText && (
            <motion.div 
              className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6"
              style={{ opacity: text2Opacity, y: text2Y, filter: text2Filter }}
            >
              <div className="pointer-events-auto w-full max-w-5xl">
                {secondText}
              </div>
            </motion.div>
          )}

          {/* Animated Image (Plane) */}
          <motion.div 
            style={{ x: planeX, opacity: planeOpacity }} 
            className="absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center pointer-events-none"
          >
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-auto h-auto max-w-none scale-150 md:scale-100 drop-shadow-2xl"
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/1200x800/000000/ffffff?text=Image+Error`;
              }}
            />
          </motion.div>

          {/* Persistent Bottom Content (e.g., Search Bar) */}
          {bottomContent && (
            <div className="absolute bottom-8 left-0 right-0 z-30 px-6">
              {bottomContent}
            </div>
          )}

        </div>
      </div>
    );
  }
);

ScrollFlyIn.displayName = "ScrollFlyIn";

export { ScrollFlyIn };
