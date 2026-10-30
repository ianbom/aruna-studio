"use client";

import React from "react";
import { motion } from "framer-motion";
import { createStaggerContainer, staggerItemVariant } from "@/lib/motion/variants";
import { viewportDefaults } from "@/lib/motion/transitions";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
}

export default function StaggerContainer({
  children,
  staggerChildren = 0.08,
  delayChildren = 0.04,
  className = "",
}: StaggerContainerProps) {
  const prefersReduced = useReducedMotionPreference();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.08,
        margin: viewportDefaults.margin as any,
      }}
      variants={createStaggerContainer(staggerChildren, delayChildren)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReduced = useReducedMotionPreference();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={staggerItemVariant} className={className}>
      {children}
    </motion.div>
  );
}
