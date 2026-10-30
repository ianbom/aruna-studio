import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import ProjectCard from "@/components/ProjectCard";
import VerticalMarginalia from "@/components/VerticalMarginalia";
import EditorialBreak from "@/components/EditorialBreak";
import ScrollReveal from "@/components/motion/ScrollReveal";
import TextReveal from "@/components/motion/TextReveal";
import ImageReveal from "@/components/motion/ImageReveal";
import { projects } from "@/data/projects";
import { designItems } from "@/data/design";

export default function HomePage() {
  const recentProjects = projects.slice(0, 6);
  const hospitalityProjects = projects.filter((p) => p.category === "Hospitality").slice(0, 2);
  const residentialProjects = projects.filter((p) => p.category === "Residential").slice(0, 5);
  const furnitureItems = designItems.filter((d) => d.category === "Furniture").slice(0, 4);
  const objectItems = designItems.filter((d) => d.category === "Objects" || d.category === "Lighting").slice(0, 2);

  return (
    <div className="flex flex-col w-full bg-[#0a0a0a] text-foreground">
      {/* 1. Hero Experience (Cinematic Opening Reveal) */}
      <HeroSlider />

      {/* 2. Latest Work ("Recent" - Architectural Curtain & Cascade) */}
      <section className="py-20 md:py-28 max-w-[1800px] mx-auto w-full px-6 md:px-12">
        <VerticalMarginalia label="RECENT">
          <div className="flex flex-col space-y-16">
            {/* Row 1: 3 Projects with Landscape Crop & Varied Entrance */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
              {recentProjects.slice(0, 3).map((project, idx) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  aspect="landscape"
                  index={idx}
                  revealType={idx === 0 ? "vertical" : idx === 1 ? "slideRight" : "scale"}
                />
              ))}
            </div>

            {/* Row 2: 3 Projects with Portrait / Taller Crop & Curtain Reveals */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
              {recentProjects.slice(3, 6).map((project, idx) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  aspect="portrait"
                  index={idx}
                  revealType={idx === 1 ? "slideLeft" : "vertical"}
                />
              ))}
            </div>
          </div>
        </VerticalMarginalia>
      </section>

      {/* 3. Full-Bleed Editorial Break 1 (Subtle Scroll Parallax) */}
      <EditorialBreak
        title="AETHEL SANCTUARY"
        narrative="A sanctuary of understated luxury immersed in the embrace of volcanic nature. Drawing inspiration from Nordic restraint and Japanese spatial contemplation, emerging as a harmonious dialogue between earth and light."
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
        linkHref="/architecture/aethel-sanctuary"
        linkText="View Project"
      />

      {/* 4. Hospitality Projects ("Welcome" - 2-Column Showcase) */}
      <section className="py-20 md:py-28 max-w-[1800px] mx-auto w-full px-6 md:px-12">
        <VerticalMarginalia label="WELCOME">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {hospitalityProjects.map((project, idx) => (
              <ProjectCard
                key={project.slug}
                project={project}
                aspect="landscape"
                index={idx}
                revealType={idx === 0 ? "slideLeft" : "slideRight"}
              />
            ))}
          </div>
        </VerticalMarginalia>
      </section>

      {/* 5. Editorial Monograph Break (Directional Image & Text Split) */}
      <section className="py-20 md:py-28 bg-[#111111] border-y border-[#202020] overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Monograph image with curtain reveal */}
          <div className="lg:col-span-6">
            <ImageReveal type="curtainUp" delay={0.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#181818]">
                <Image
                  src="https://images.unsplash.com/photo-1723448837748-abfe11db8f45?auto=format&fit=crop&w=2000&q=85"
                  alt="Spatial Poetics Monograph"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover filter brightness-85"
                />
              </div>
            </ImageReveal>
          </div>

          {/* Right: Typography Emergence */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-8">
            <ScrollReveal variant="fadeUpSubtle">
              <span className="text-[10px] uppercase tracking-ultra text-accent mb-4 block">
                Studio Monograph
              </span>
            </ScrollReveal>

            <TextReveal as="h2" variant="mask" className="mb-6">
              <span className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide text-foreground block">
                Spatial Poetics: The Subtractive Method
              </span>
            </TextReveal>

            <ScrollReveal variant="fadeUp" delay={0.15}>
              <p className="font-sans text-xs md:text-sm text-foreground-muted leading-relaxed font-light mb-6">
                Documenting a decade of international work across architecture, interiors, and tactile objects. Collected essays investigate the psychological resonance of raw materials, the calibration of natural shadow, and how proportion fosters wellbeing.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeUpSubtle" delay={0.25}>
              <div className="flex items-center space-x-6 text-xs text-foreground-subtle">
                <span>Published by Atelier Editions</span>
                <span>&bull;</span>
                <span>320 Pages, Clothbound</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUpSubtle" delay={0.32}>
              <div className="mt-8">
                <Link
                  href="/journal/on-shadow-and-silence"
                  className="inline-block text-[10px] tracking-widest uppercase text-accent hover:text-accent-hover pb-1 border-b border-accent/40 hover:border-accent transition-all duration-300"
                >
                  Read Selected Excerpt &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. In Residence ("Homes" - Asymmetrical Project Cascade) */}
      <section className="py-20 md:py-28 max-w-[1800px] mx-auto w-full px-6 md:px-12">
        <VerticalMarginalia label="HOMES">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
            {residentialProjects.slice(0, 3).map((project, idx) => (
              <ProjectCard
                key={project.slug}
                project={project}
                aspect="portrait"
                index={idx}
                revealType={idx === 1 ? "scale" : "vertical"}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-12 mt-12">
            {residentialProjects.slice(3, 5).map((project, idx) => (
              <ProjectCard
                key={project.slug}
                project={project}
                aspect="landscape"
                index={idx}
                revealType={idx === 0 ? "slideRight" : "slideLeft"}
              />
            ))}
          </div>
        </VerticalMarginalia>
      </section>

      {/* 7. Photographic Pause (Subtle Parallax Break) */}
      <EditorialBreak
        title="HEATHERHILL PAVILION"
        narrative="Located along the unspoiled coastline of Kattegat, weathered timber framing blends quiet functionality with an architecture that opens toward the horizon."
        image="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=2000&q=85"
        linkHref="/architecture/fjord-boat-house"
        linkText="View Architectural Study"
      />

      {/* 8. Furniture Showcase ("Design" - Directional Reveal) */}
      <section className="py-20 md:py-28 max-w-[1800px] mx-auto w-full px-6 md:px-12">
        <VerticalMarginalia label="DESIGN">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {furnitureItems.map((item, idx) => {
              const spacedTitle = item.title.toUpperCase().split("").join(" ");
              return (
                <ScrollReveal
                  key={item.slug}
                  variant={idx % 2 === 0 ? "fadeUp" : "scaleSubtle"}
                  delay={(idx % 4) * 0.08}
                >
                  <article className="group flex flex-col">
                    <Link href={`/design/${item.slug}`} className="block focus:outline-none">
                      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#121212]">
                        <Image
                          src={item.heroImage}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover object-center filter brightness-[0.85] contrast-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="mt-5 flex flex-col space-y-1.5">
                        <h3 className="font-serif text-xs font-semibold tracking-ultra text-foreground group-hover:text-accent transition-colors uppercase">
                          {spacedTitle}
                        </h3>
                        <p className="font-sans text-[11px] text-foreground-subtle">
                          {item.material}
                        </p>
                        <div className="pt-1 text-[10px] tracking-widest uppercase text-foreground-subtle">
                          DESIGN &bull; {item.year}
                        </div>
                      </div>
                    </Link>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </VerticalMarginalia>
      </section>

      {/* 9. Objects of Desire ("Objects" - Lateral Reveal) */}
      <section className="py-16 md:py-24 max-w-[1800px] mx-auto w-full px-6 md:px-12">
        <VerticalMarginalia label="OBJECTS">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {objectItems.map((item, idx) => {
              const spacedTitle = item.title.toUpperCase().split("").join(" ");
              return (
                <ScrollReveal
                  key={item.slug}
                  variant={idx === 0 ? "fadeRight" : "fadeLeft"}
                  delay={0.1}
                >
                  <article className="group flex flex-col">
                    <Link href={`/design/${item.slug}`} className="block focus:outline-none">
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#121212]">
                        <Image
                          src={item.heroImage}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center filter brightness-[0.85] contrast-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="mt-6 flex flex-col space-y-2">
                        <h3 className="font-serif text-xs md:text-sm font-semibold tracking-ultra text-foreground group-hover:text-accent transition-colors uppercase">
                          {spacedTitle}
                        </h3>
                        <p className="font-sans text-xs text-foreground-muted line-clamp-2">
                          {item.description}
                        </p>
                        <div className="pt-1 text-[10px] tracking-widest uppercase text-foreground-subtle">
                          OBJECTS &bull; {item.year}
                        </div>
                      </div>
                    </Link>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </VerticalMarginalia>
      </section>

      {/* 10. Studio Invitation Banner (Minimal Cinematic Closing) */}
      <section className="py-24 border-t border-[#1f1f1f] bg-[#0c0c0c] text-center px-6">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <ScrollReveal variant="fadeUpSubtle">
            <span className="text-[10px] uppercase tracking-ultra text-accent mb-4 block">
              Spatial Inquiries
            </span>
          </ScrollReveal>

          <TextReveal as="h2" variant="mask" className="mb-6">
            <span className="font-serif text-2xl md:text-3xl font-light text-foreground block">
              Considering a new architectural project or spatial commission?
            </span>
          </TextReveal>

          <ScrollReveal variant="fadeUp" delay={0.12}>
            <p className="text-xs text-foreground-muted mb-8 leading-relaxed">
              We collaborate with private clients, hoteliers, and cultural institutions globally. Connect with our Copenhagen or New York team.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUpSubtle" delay={0.22}>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border border-accent/40 text-accent hover:border-accent hover:text-foreground text-[11px] tracking-widest uppercase transition-all duration-300"
            >
              Initiate Dialogue
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
