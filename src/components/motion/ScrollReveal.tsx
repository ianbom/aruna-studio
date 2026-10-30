"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";
import {
  fadeInVariant,
  fadeUpVariant,
  fadeUpSubtleVariant,
  fadeLeftVariant,
  fadeRightVariant,
  scaleSubtleVariant,
} from "@/lib/motion/variants";
import { viewportDefaults } from "@/lib/motion/transitions";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export type RevealVariant =
  | "fadeUp"
  | "fadeUpSubtle"
  | "fadeIn"
  | "fadeLeft"
  | "fadeRight"
  | "scaleSubtle";

interface ScrollRevealProps extends MotionProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  amount?: number | "some" | "all";
}

const variantMap = {
  fadeUp: fadeUpVariant,
  fadeUpSubtle: fadeUpSubtleVariant,
  fadeIn: fadeInVariant,
  fadeLeft: fadeLeftVariant,
  fadeRight: fadeRightVariant,
  scaleSubtle: scaleSubtleVariant,
};

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className = "",
  amount = viewportDefaults.amount,
  ...props
}: ScrollRevealProps) {
  const prefersReduced = useReducedMotionPreference();
  const selectedVariant = variantMap[variant] || fadeUpVariant;

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
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
