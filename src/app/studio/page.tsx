import React from "react";
import ParallaxImage from "@/components/motion/ParallaxImage";
import ScrollReveal from "@/components/motion/ScrollReveal";
import TextReveal from "@/components/motion/TextReveal";

export default function StudioPage() {
  return (
    <div className="pt-32 md:pt-40 pb-28 text-foreground bg-background">
      {/* 1. Header Intro */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 mb-20 md:mb-28">
        <ScrollReveal variant="fadeUpSubtle">
          <span className="text-[10px] uppercase tracking-ultra text-accent mb-4 block">
            Practice &bull; Ethos
          </span>
        </ScrollReveal>

        <TextReveal as="h1" variant="mask" className="mb-8">
          <span className="font-serif text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground max-w-4xl block">
            Architecture shaped by material, proportion, and the quiet beauty of space.
          </span>
        </TextReveal>

        <ScrollReveal variant="fadeUp" delay={0.15}>
          <p className="font-sans text-xs md:text-base text-foreground-muted leading-relaxed font-light max-w-2xl">
            Founded in Copenhagen and active globally, ARUNA ATELIER is a multidisciplinary architecture and spatial design practice. We work across private residential residences, sensory hospitality retreats, and tactile objects designed to enrich human everyday life.
          </p>
        </ScrollReveal>
      </div>

      {/* 2. Full-Width Studio Atmosphere Image with subtle parallax */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 mb-24 md:mb-32">
        <div className="relative aspect-[21/9] min-h-[350px] w-full overflow-hidden bg-background-secondary">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
            alt="Aruna Atelier Studio Space"
            fill
            priority
            sizes="100vw"
            speed={0.6}
            className="object-cover object-center filter brightness-[0.82]"
          />
        </div>
      </div>

      {/* 3. Core Philosophy & Subtractive Method */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-28">
        <div className="lg:col-span-5">
          <ScrollReveal variant="fadeUpSubtle">
            <span className="text-[10px] uppercase tracking-ultra text-accent mb-3 block">
              Philosophy
            </span>
          </ScrollReveal>

          <TextReveal as="h2" variant="mask">
            <span className="font-serif text-2xl md:text-3xl font-normal text-foreground block">
              The Subtractive Principle
            </span>
          </TextReveal>
        </div>

        <div className="lg:col-span-7 flex flex-col space-y-6 text-xs md:text-sm text-foreground-muted leading-relaxed font-light">
          <ScrollReveal variant="fadeUp" delay={0.08}>
            <p>
              We consider our work not as the addition of decorative layers, but as a deliberate distillation. In an era marked by rapid visual stimulation and fragmented attention, our spaces serve as quiet anchors.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.16}>
            <p>
              By reducing architectural gestures to their tectonic essentials—mass, light, surface, and void—we reveal the intrinsic dignity of honest materials. A weathered granite plinth, an untreated oak threshold, and a lime plaster wall respond dynamically to the changing angle of the sun, creating rooms that breathe.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.24}>
            <p>
              Our practice bridges Scandinavian building tradition with the contemplative spatial sensibility of Japanese architecture. We prioritize human wellbeing, tactile connection, and long-term permanence over transitory stylistic trends.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* 4. Disciplines & Services */}
      <div className="bg-background-secondary border-y border-border-subtle py-24 mb-28 overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal variant="fadeUpSubtle">
            <span className="text-[10px] uppercase tracking-ultra text-accent mb-4 block">
              Disciplines
            </span>
          </ScrollReveal>

          <TextReveal as="h2" variant="mask" className="mb-16">
            <span className="font-serif text-2xl md:text-3xl font-light text-foreground block">
              Comprehensive Spatial Practice
            </span>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal variant="fadeUp" delay={0.06}>
              <div className="flex flex-col space-y-4 border-l border-border pl-6">
                <span className="text-[11px] font-mono text-accent">01</span>
                <h3 className="font-serif text-lg text-foreground font-normal">
                  Architecture
                </h3>
                <p className="text-xs text-foreground-muted leading-relaxed font-light">
                  Site-specific private residences, coastal retreats, hospitality destinations, and adaptive reuse of historic civic monuments.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.14}>
              <div className="flex flex-col space-y-4 border-l border-border pl-6">
                <span className="text-[11px] font-mono text-accent">02</span>
                <h3 className="font-serif text-lg text-foreground font-normal">
                  Interior Architecture
                </h3>
                <p className="text-xs text-foreground-muted leading-relaxed font-light">
                  Bespoke spatial planning, custom architectural millwork, tailored acoustic surfaces, and integrated lighting choreography.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.22}>
              <div className="flex flex-col space-y-4 border-l border-border pl-6">
                <span className="text-[11px] font-mono text-accent">03</span>
                <h3 className="font-serif text-lg text-foreground font-normal">
                  Furniture &amp; Objects
                </h3>
                <p className="text-xs text-foreground-muted leading-relaxed font-light">
                  Tactile seating, carved stone vessels, monolithic dining tables, and indirect light fixtures manufactured alongside master artisans.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* 5. Dual Studio Locations */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ScrollReveal variant="fadeRight" delay={0.05}>
          <div className="bg-background-secondary border border-border-subtle p-8 md:p-12 h-full">
            <span className="text-[10px] tracking-ultra text-accent uppercase block mb-3">
              Atelier 01
            </span>
            <h3 className="font-serif text-2xl text-foreground font-normal mb-4">
              Copenhagen
            </h3>
            <p className="text-xs text-foreground-muted leading-relaxed font-light mb-6">
              Situated within a restored 18th-century maritime courtyard in historic Frederiksstaden. Housing our primary architecture atelier, full material archive, and timber prototyping workshop.
            </p>
            <div className="text-xs text-foreground-subtle space-y-1">
              <p>Amalienborg Plads 4</p>
              <p>1256 Copenhagen K, Denmark</p>
              <p className="pt-2 font-mono text-foreground-muted">cph@arunaatelier.com</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeLeft" delay={0.12}>
          <div className="bg-background-secondary border border-border-subtle p-8 md:p-12 h-full">
            <span className="text-[10px] tracking-ultra text-accent uppercase block mb-3">
              Atelier 02
            </span>
            <h3 className="font-serif text-2xl text-foreground font-normal mb-4">
              New York
            </h3>
            <p className="text-xs text-foreground-muted leading-relaxed font-light mb-6">
              Located in a historic cast-iron loft building in Tribeca. Guiding our North American residential commissions, client consultations, and gallery installations.
            </p>
            <div className="text-xs text-foreground-subtle space-y-1">
              <p>Franklin Street</p>
              <p>Tribeca, New York, NY 10013</p>
              <p className="pt-2 font-mono text-foreground-muted">nyc@arunaatelier.com</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
