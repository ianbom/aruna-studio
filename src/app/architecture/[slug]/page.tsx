import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import TextReveal from "@/components/motion/TextReveal";
import ImageReveal from "@/components/motion/ImageReveal";
import ParallaxImage from "@/components/motion/ParallaxImage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ArchitectureDetailPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject =
    projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1];
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  return (
    <div className="pt-24 md:pt-32 pb-28 text-foreground w-full bg-background">
      {/* 1. Project Title & Back Navigation */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 mb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-border-subtle pb-8">
        <div>
          <ScrollReveal variant="fadeUpSubtle">
            <Link
              href="/architecture"
              className="inline-flex items-center space-x-2 text-[10px] tracking-ultra text-accent uppercase mb-4 hover:text-accent-hover transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Architecture</span>
            </Link>
          </ScrollReveal>

          <TextReveal as="h1" variant="mask">
            <span className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal text-foreground block">
              {project.title}
            </span>
          </TextReveal>

          <ScrollReveal variant="fadeUpSubtle" delay={0.12}>
            <p className="font-sans text-xs uppercase tracking-widest text-foreground-subtle mt-2">
              {project.location} &bull; {project.year}
            </p>
          </ScrollReveal>
        </div>

        {/* Next / Prev Quick Switcher */}
        <ScrollReveal variant="fadeLeft" delay={0.15}>
          <div className="hidden md:flex items-center space-x-6 text-xs text-foreground-subtle mt-6 md:mt-0 tracking-wider">
            <Link
              href={`/architecture/${prevProject.slug}`}
              className="hover:text-accent transition-colors"
            >
              &larr; Prev ({prevProject.title})
            </Link>
            <span>|</span>
            <Link
              href={`/architecture/${nextProject.slug}`}
              className="hover:text-accent transition-colors"
            >
              Next ({nextProject.title}) &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* 2. Hero Image (Immediate entrance, no waiting) */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 mb-16 md:mb-24">
        <ImageReveal type="scale" amount={0.05}>
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-background-secondary">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.88] contrast-[1.02]"
            />
          </div>
        </ImageReveal>
      </div>

      {/* 3. Project Overview & Specifications Grid */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 md:mb-32">
        {/* Left: Long-form Narrative */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <ScrollReveal variant="fadeUp">
            <p className="font-serif text-lg md:text-xl text-foreground font-normal leading-relaxed">
              {project.overview}
            </p>
          </ScrollReveal>

          {project.narrative.map((paragraph, idx) => (
            <ScrollReveal key={idx} variant="fadeUp" delay={0.08 * (idx + 1)}>
              <p className="font-sans text-xs md:text-sm text-foreground-muted leading-relaxed font-light">
                {paragraph}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Right: Project Specifications Data Table */}
        <div className="lg:col-span-5 self-start">
          <ScrollReveal variant="fadeLeft" delay={0.1}>
            <div className="bg-background-secondary border border-border-subtle p-8">
              <h3 className="text-[11px] uppercase tracking-ultra text-accent mb-6 font-medium">
                Project Data
              </h3>
              <dl className="space-y-4 text-xs">
                {project.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between border-b border-border-subtle pb-2.5">
                    <dt className="text-foreground-subtle font-light">{spec.label}</dt>
                    <dd className="text-foreground font-normal text-right">{spec.value}</dd>
                  </div>
                ))}
                {project.collaborators && project.collaborators.length > 0 && (
                  <div className="pt-2">
                    <dt className="text-foreground-subtle font-light mb-1">Collaborating Studios</dt>
                    <dd className="text-foreground font-normal">
                      {project.collaborators.join(", ")}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 4. Editorial Multi-Ratio Gallery */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 space-y-12 md:space-y-20 mb-24 md:mb-36">
        {/* Full-width wide image with curtain reveal */}
        {project.gallery[0] && (
          <ImageReveal type="curtainUp">
            <figure className="flex flex-col space-y-3">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-background-secondary">
                <Image
                  src={project.gallery[0].url}
                  alt={project.gallery[0].caption || project.title}
                  fill
                  sizes="100vw"
                  className="object-cover filter brightness-[0.88]"
                />
              </div>
              {project.gallery[0].caption && (
                <figcaption className="text-[11px] text-foreground-subtle tracking-wide font-light">
                  {project.gallery[0].caption}
                </figcaption>
              )}
            </figure>
          </ImageReveal>
        )}

        {/* 2-Column Side-by-Side Images with lateral reveals */}
        {project.gallery.length >= 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {project.gallery.slice(1, 3).map((item, idx) => (
              <ImageReveal
                key={idx}
                type={idx === 0 ? "scale" : "curtainUp"}
                delay={idx === 1 ? 0.1 : 0}
              >
                <figure className="flex flex-col space-y-3">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-background-secondary">
                    <Image
                      src={item.url}
                      alt={item.caption || project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover filter brightness-[0.88]"
                    />
                  </div>
                  {item.caption && (
                    <figcaption className="text-[11px] text-foreground-subtle tracking-wide font-light">
                      {item.caption}
                    </figcaption>
                  )}
                </figure>
              </ImageReveal>
            ))}
          </div>
        )}

        {/* Closing wide image with subtle parallax container */}
        {project.gallery[3] && (
          <figure className="flex flex-col space-y-3">
            <div className="relative aspect-[21/9] min-h-[320px] w-full overflow-hidden bg-background-secondary">
              <ParallaxImage
                src={project.gallery[3].url}
                alt={project.gallery[3].caption || project.title}
                fill
                sizes="100vw"
                speed={0.6}
                className="object-cover filter brightness-[0.88]"
              />
            </div>
            {project.gallery[3].caption && (
              <figcaption className="text-[11px] text-foreground-subtle tracking-wide font-light">
                {project.gallery[3].caption}
              </figcaption>
            )}
          </figure>
        )}
      </div>

      {/* 5. Sequential Navigation Footer (Matching Reference) */}
      <ScrollReveal variant="fadeUpSubtle">
        <div className="border-t border-border-subtle pt-12 max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          <Link
            href={`/architecture/${prevProject.slug}`}
            className="group flex flex-col text-left"
          >
            <span className="text-[10px] tracking-ultra text-foreground-subtle uppercase mb-1">
              &larr; Previous Project
            </span>
            <span className="font-serif text-lg md:text-xl text-foreground group-hover:text-accent transition-colors">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/architecture/${nextProject.slug}`}
            className="group flex flex-col text-right"
          >
            <span className="text-[10px] tracking-ultra text-foreground-subtle uppercase mb-1">
              Next Project &rarr;
            </span>
            <span className="font-serif text-lg md:text-xl text-foreground group-hover:text-accent transition-colors">
              {nextProject.title}
            </span>
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
