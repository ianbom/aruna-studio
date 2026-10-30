"use client";

import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/motion/ScrollReveal";
import TextReveal from "@/components/motion/TextReveal";
import { projects } from "@/data/projects";

export default function ArchitectureListingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = ["ALL", "RESIDENTIAL", "HOSPITALITY", "COMMERCIAL"];

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter(
          (p) => p.category.toUpperCase() === selectedCategory
        );

  return (
    <div className="pt-32 md:pt-40 pb-28 max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 text-foreground">
      {/* Editorial Header */}
      <div className="max-w-3xl mb-16 md:mb-24">
        <ScrollReveal variant="fadeUpSubtle">
          <span className="text-[10px] uppercase tracking-ultra text-accent mb-4 block">
            Portfolio &bull; Built Works
          </span>
        </ScrollReveal>

        <TextReveal as="h1" variant="mask" className="mb-6">
          <span className="font-serif text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground block">
            Architecture
          </span>
        </TextReveal>

        <ScrollReveal variant="fadeUp" delay={0.12}>
          <p className="font-sans text-xs md:text-sm text-foreground-muted leading-relaxed font-light">
            A curated selection of residential, hospitality, and civic spaces realized across Scandinavia, Europe, and Asia. Each building is conceived from the inside out, guided by natural illumination, tactile materiality, and quiet proportion.
          </p>
        </ScrollReveal>
      </div>

      {/* Category Filter Tabs */}
      <ScrollReveal variant="fadeUpSubtle" delay={0.2}>
        <div className="flex items-center space-x-6 md:space-x-10 border-b border-[#222222] pb-4 mb-16 overflow-x-auto text-xs tracking-widest uppercase">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`pb-2 transition-colors relative whitespace-nowrap focus:outline-none ${
                selectedCategory === cat
                  ? "text-accent font-medium"
                  : "text-foreground-subtle hover:text-foreground"
              }`}
            >
              {cat}
              {selectedCategory === cat && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-accent" />
              )}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Projects Grid with Staggered Alternating Reveals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.slug}
            project={project}
            aspect={idx % 3 === 1 ? "portrait" : "landscape"}
            index={idx}
            revealType={idx % 3 === 0 ? "vertical" : idx % 3 === 1 ? "scale" : "slideRight"}
          />
        ))}
      </div>
    </div>
  );
}
