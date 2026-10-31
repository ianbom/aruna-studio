"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";
import TextReveal from "@/components/motion/TextReveal";
import { designItems } from "@/data/design";

export default function DesignListingPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  const categories = ["ALL", "FURNITURE", "LIGHTING", "OBJECTS"];

  const filteredItems =
    selectedFilter === "ALL"
      ? designItems
      : designItems.filter(
          (item) => item.category.toUpperCase() === selectedFilter
        );

  return (
    <div className="pt-32 md:pt-40 pb-28 max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 text-foreground">
      {/* Editorial Header */}
      <div className="max-w-3xl mb-16 md:mb-24">
        <ScrollReveal variant="fadeUpSubtle">
          <span className="text-[10px] uppercase tracking-ultra text-accent mb-4 block">
            Objects &bull; Spatial Elements
          </span>
        </ScrollReveal>

        <TextReveal as="h1" variant="mask" className="mb-6">
          <span className="font-serif text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground block">
            Design
          </span>
        </TextReveal>

        <ScrollReveal variant="fadeUp" delay={0.12}>
          <p className="font-sans text-xs md:text-sm text-foreground-muted leading-relaxed font-light">
            Sculptural furniture, indirect lighting fixtures, and functional stone objects developed in continuous conversation with our architectural spaces. Built for longevity, tactility, and quiet companionship in the home.
          </p>
        </ScrollReveal>
      </div>

      {/* Filter Tabs */}
      <ScrollReveal variant="fadeUpSubtle" delay={0.18}>
        <div className="flex items-center space-x-6 md:space-x-10 border-b border-border-subtle pb-4 mb-16 overflow-x-auto text-xs tracking-widest uppercase">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`pb-2 transition-colors relative whitespace-nowrap focus:outline-none ${
                selectedFilter === cat
                  ? "text-accent font-medium"
                  : "text-foreground-subtle hover:text-foreground"
              }`}
            >
              {cat}
              {selectedFilter === cat && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-accent" />
              )}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Design Grid with staggered directional reveals */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {filteredItems.map((item, idx) => {
          const spacedTitle = item.title.toUpperCase().split("").join(" ");
          return (
            <ScrollReveal
              key={item.slug}
              variant={idx % 3 === 0 ? "fadeUp" : idx % 3 === 1 ? "scaleSubtle" : "fadeLeft"}
              delay={(idx % 3) * 0.08}
            >
              <article className="group flex flex-col">
                <Link href={`/design/${item.slug}`} className="block focus:outline-none">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-background-secondary">
                    <Image
                      src={item.heroImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center filter brightness-[0.85] contrast-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-background/80 backdrop-blur-sm text-[10px] tracking-widest uppercase text-accent px-3 py-1 border border-border">
                        View
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col space-y-2">
                    <h3 className="font-serif text-xs md:text-sm font-semibold tracking-ultra text-foreground group-hover:text-accent transition-colors uppercase">
                      {spacedTitle}
                    </h3>
                    <p className="font-sans text-xs text-foreground-muted line-clamp-2 leading-relaxed font-light">
                      {item.description}
                    </p>
                    <div className="pt-2 flex items-center space-x-2 text-[10px] tracking-widest uppercase text-foreground-subtle">
                      <span>{item.category}</span>
                      <span>&bull;</span>
                      <span>{item.material}</span>
                      <span>&bull;</span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </Link>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
