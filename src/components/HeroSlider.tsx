"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/projects";
import { easing, durations } from "@/lib/motion/transitions";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const prefersReduced = useReducedMotionPreference();

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[current];

  return (
    <section className="relative w-full h-screen min-h-[680px] max-h-[1100px] overflow-hidden bg-[#0a0a0a]">
      {/* Background Image Carousel with Cinematic Crossfade & Subtle Settle */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: easing.editorial }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={current === 0}
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.72] contrast-[1.05]"
          />
          {/* Subtle gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/30 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Center / Lower Third Editorial Text Box */}
      <div className="absolute inset-x-0 bottom-16 md:bottom-20 z-20 flex flex-col items-center justify-end px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: durations.heading, ease: easing.editorial }}
            className="max-w-2xl flex flex-col items-center"
          >
            {/* Project Title with overflow mask reveal */}
            <div className="overflow-hidden mb-3">
              <motion.h2
                initial={prefersReduced ? { opacity: 1 } : { y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: durations.heading, ease: easing.editorial }}
                className="font-serif text-sm md:text-base font-semibold tracking-ultra text-foreground uppercase"
              >
                {slide.title.split("").join(" ")}
              </motion.h2>
            </div>

            {/* Poetic Narrative */}
            <motion.p
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durations.paragraph, delay: 0.12, ease: easing.smooth }}
              className="font-sans text-xs md:text-sm text-foreground-muted leading-relaxed font-light mb-6 line-clamp-3"
            >
              {slide.narrative}
            </motion.p>

            {/* Direct Link */}
            <motion.div
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: durations.label, delay: 0.22 }}
            >
              <Link
                href={`/architecture/${slide.slug}`}
                className="text-[10px] tracking-widest uppercase text-accent hover:text-accent-hover pb-1 border-b border-accent/40 hover:border-accent transition-all duration-300"
              >
                Explore Project &rarr;
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center space-x-2 mt-8" aria-label="Slide Selector">
          {heroSlides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrent(idx)}
              className={`transition-all duration-500 rounded-full focus:outline-none ${
                idx === current
                  ? "w-6 h-1.5 bg-accent"
                  : "w-1.5 h-1.5 bg-foreground-subtle/40 hover:bg-foreground-muted"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Left / Right arrow navigation (desktop hover) */}
      <div className="hidden md:flex absolute inset-y-0 inset-x-8 items-center justify-between pointer-events-none z-20">
        <button
          onClick={prevSlide}
          className="pointer-events-auto text-foreground-muted/60 hover:text-foreground bg-black/20 hover:bg-black/50 p-3 rounded-full backdrop-blur-sm transition-all duration-300 focus:outline-none"
          aria-label="Previous Project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto text-foreground-muted/60 hover:text-foreground bg-black/20 hover:bg-black/50 p-3 rounded-full backdrop-blur-sm transition-all duration-300 focus:outline-none"
          aria-label="Next Project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
