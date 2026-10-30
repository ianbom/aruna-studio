"use client";

import React from "react";
import { motion } from "framer-motion";
import { easing, durations, viewportDefaults } from "@/lib/motion/transitions";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

interface TextRevealProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  delay?: number;
  className?: string;
  variant?: "mask" | "fadeUp";
}

export default function TextReveal({
  children,
  as = "div",
  delay = 0,
  className = "",
  variant = "mask",
}: TextRevealProps) {
  const prefersReduced = useReducedMotionPreference();
  const Component = motion[as] as any;

  if (prefersReduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  if (variant === "mask") {
    return (
      <div className={`overflow-hidden inline-block ${className}`}>
        <Component
          initial={{ y: "100%", opacity: 0.4 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{
            once: true,
            amount: viewportDefaults.amount as any,
            margin: viewportDefaults.margin as any,
          }}
          transition={{
            duration: durations.heading,
            ease: easing.editorial,
            delay,
          }}
        >
          {children}
        </Component>
      </div>
    );
  }

  return (
    <Component
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: viewportDefaults.amount as any,
        margin: viewportDefaults.margin as any,
      }}
      transition={{
        duration: durations.paragraph,
        ease: easing.editorial,
        delay,
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
