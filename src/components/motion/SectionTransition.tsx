"use client";

import React from "react";
import { motion } from "framer-motion";
import { easing, durations, viewportDefaults } from "@/lib/motion/transitions";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionTransition({
  children,
  className = "",
  delay = 0,
}: SectionTransitionProps) {
  const prefersReduced = useReducedMotionPreference();

  if (prefersReduced) {
    return <section className={className}>{children}</section>;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.08,
        margin: viewportDefaults.margin as any,
      }}
      transition={{
        duration: durations.section,
        ease: easing.editorial,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
