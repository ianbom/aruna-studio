"use client";

import React, { useRef, useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

interface ParallaxImageProps extends Omit<ImageProps, "ref"> {
  containerClassName?: string;
  speed?: number; // default subtle: 0.15
}

export default function ParallaxImage({
  containerClassName = "",
  speed = 0.15,
  className = "",
  alt,
  ...props
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotionPreference();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced || isMobile ? [0, 0] : [-30 * speed, 30 * speed]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced || isMobile ? [1, 1] : [1.05, 1.01]
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-full h-full ${containerClassName}`}
    >
      <motion.div
        style={{ y, scale }}
        className="relative w-full h-full will-change-transform"
      >
        <Image
          alt={alt}
          className={`object-cover ${className}`}
          {...props}
        />
      </motion.div>
    </div>
  );
}
