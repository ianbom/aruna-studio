"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  curtainUpVariant,
  curtainRightVariant,
  scaleSubtleVariant,
  fadeUpVariant,
} from "@/lib/motion/variants";
import { viewportDefaults } from "@/lib/motion/transitions";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export type ImageRevealType = "curtainUp" | "curtainRight" | "scale" | "fadeUp";

interface ImageRevealProps {
  children: React.ReactNode;
  type?: ImageRevealType;
  delay?: number;
  className?: string;
  amount?: number | "some" | "all";
}

const typeMap = {
  curtainUp: curtainUpVariant,
  curtainRight: curtainRightVariant,
  scale: scaleSubtleVariant,
  fadeUp: fadeUpVariant,
};

export default function ImageReveal({
  children,
  type = "curtainUp",
  delay = 0,
  className = "",
  amount = 0.1,
}: ImageRevealProps) {
  const prefersReduced = useReducedMotionPreference();
  const selectedVariant = typeMap[type] || curtainUpVariant;

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: amount as any,
        margin: viewportDefaults.margin as any,
      }}
      variants={selectedVariant}
      transition={{ delay }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
