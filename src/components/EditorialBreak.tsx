import React from "react";
import Link from "next/link";
import ParallaxImage from "@/components/motion/ParallaxImage";
import TextReveal from "@/components/motion/TextReveal";
import ScrollReveal from "@/components/motion/ScrollReveal";

interface EditorialBreakProps {
  title: string;
  narrative: string;
  image: string;
  linkHref?: string;
  linkText?: string;
  heightClass?: string;
}

export default function EditorialBreak({
  title,
  narrative,
  image,
  linkHref,
  linkText = "Explore Space",
  heightClass = "h-[75vh] min-h-[550px]",
}: EditorialBreakProps) {
  const spacedTitle = title.toUpperCase().split("").join(" ");

  return (
    <section className={`relative w-full ${heightClass} overflow-hidden my-16 md:my-28 bg-[#0a0a0a]`}>
      {/* Background Image with subtle scroll parallax */}
      <div className="absolute inset-0 w-full h-full">
        <ParallaxImage
          src={image}
          alt={title}
          fill
          priority={false}
          sizes="100vw"
          speed={0.8}
          className="object-cover object-center filter brightness-[0.65] contrast-[1.05]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/30 to-[#0a0a0a]/60 pointer-events-none" />

      {/* Center Editorial Text */}
      <div className="absolute inset-0 flex items-center justify-center px-6 z-10">
        <div className="max-w-2xl text-center flex flex-col items-center">
          <TextReveal as="h2" variant="mask" className="mb-4">
            <span className="font-serif text-sm md:text-lg font-semibold tracking-ultra text-foreground uppercase block">
              {spacedTitle}
            </span>
          </TextReveal>

          <ScrollReveal variant="fadeUpSubtle" delay={0.12}>
            <p className="font-sans text-xs md:text-sm text-foreground-muted leading-relaxed font-light mb-6">
              {narrative}
            </p>
          </ScrollReveal>

          {linkHref && (
            <ScrollReveal variant="fadeUpSubtle" delay={0.22}>
              <Link
                href={linkHref}
                className="text-[10px] tracking-widest uppercase text-accent hover:text-accent-hover pb-1 border-b border-accent/40 hover:border-accent transition-all duration-300"
              >
                {linkText} &rarr;
              </Link>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
