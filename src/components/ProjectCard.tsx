"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { easing, durations, viewportDefaults } from "@/lib/motion/transitions";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

interface ProjectCardProps {
  project: Project;
  aspect?: "landscape" | "portrait" | "tall";
  index?: number;
  revealType?: "vertical" | "slideRight" | "slideLeft" | "scale" | "none";
}

export default function ProjectCard({
  project,
  aspect = "landscape",
  index = 0,
  revealType = "vertical",
}: ProjectCardProps) {
  const prefersReduced = useReducedMotionPreference();
  const spacedTitle = project.title.toUpperCase().split("").join(" ");

  const aspectClass =
    aspect === "portrait"
      ? "aspect-[3/4]"
      : aspect === "tall"
      ? "aspect-[2/3]"
      : "aspect-[16/10]";

  // Stagger delay within a row of 2-3 cards
  const staggerDelay = (index % 3) * 0.08;

  // Determine motion entrance variants
  const getCardVariants = () => {
    if (revealType === "none" || prefersReduced) {
      return {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      };
    }

    if (revealType === "slideRight") {
      return {
        hidden: { opacity: 0, x: 20 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: durations.grid,
            ease: easing.editorial,
            delay: staggerDelay,
          },
        },
      };
    }

    if (revealType === "slideLeft") {
      return {
        hidden: { opacity: 0, x: -20 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: durations.grid,
            ease: easing.editorial,
            delay: staggerDelay,
          },
        },
      };
    }

    if (revealType === "scale") {
      return {
        hidden: { opacity: 0, scale: 1.03 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: durations.grid,
            ease: easing.editorial,
            delay: staggerDelay,
          },
        },
      };
    }

    // Default vertical reveal
    return {
      hidden: { opacity: 0, y: 22 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: durations.grid,
          ease: easing.editorial,
          delay: staggerDelay,
        },
      },
    };
  };

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
        margin: viewportDefaults.margin as any,
      }}
      variants={getCardVariants()}
      className="group flex flex-col w-full"
    >
      <Link
        href={`/architecture/${project.slug}`}
        className="block focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
        aria-label={`View ${project.title}`}
      >
        {/* Image Container with smooth editorial hover zoom */}
        <div className={`relative w-full overflow-hidden bg-background-secondary ${aspectClass}`}>
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center filter brightness-[0.82] contrast-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />

          {/* Hover / focus "View" tag */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
            <span className="bg-background/80 backdrop-blur-sm text-[10px] tracking-widest uppercase text-accent px-3 py-1 border border-border">
              View
            </span>
          </div>
        </div>

        {/* Text Details below image */}
        <div className="mt-6 flex flex-col space-y-2.5">
          {/* Project Title */}
          <h3 className="font-serif text-xs md:text-sm font-semibold tracking-ultra text-foreground group-hover:text-accent transition-colors duration-300 uppercase">
            {spacedTitle}
          </h3>

          {/* Short Narrative */}
          <p className="font-sans text-xs text-foreground-muted line-clamp-2 leading-relaxed font-light">
            {project.overview}
          </p>

          {/* Metadata */}
          <div className="pt-2 flex items-center space-x-2 text-[10px] tracking-widest uppercase text-foreground-subtle">
            <span>ARCHITECTURE</span>
            <span>|</span>
            <span>{project.category}</span>
            <span>|</span>
            <span>{project.year}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
