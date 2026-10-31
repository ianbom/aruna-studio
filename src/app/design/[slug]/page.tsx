import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { designItems } from "@/data/design";
import { ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import TextReveal from "@/components/motion/TextReveal";
import ImageReveal from "@/components/motion/ImageReveal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return designItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function DesignDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = designItems.find((d) => d.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="pt-24 md:pt-32 pb-28 text-foreground w-full bg-background">
      {/* Header & Back Link */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 mb-8 border-b border-border-subtle pb-8">
        <ScrollReveal variant="fadeUpSubtle">
          <Link
            href="/design"
            className="inline-flex items-center space-x-2 text-[10px] tracking-ultra text-accent uppercase mb-4 hover:text-accent-hover transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Design Objects</span>
          </Link>
        </ScrollReveal>

        <TextReveal as="h1" variant="mask">
          <span className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal text-foreground block">
            {item.title}
          </span>
        </TextReveal>

        <ScrollReveal variant="fadeUpSubtle" delay={0.12}>
          <p className="font-sans text-xs uppercase tracking-widest text-foreground-subtle mt-2">
            {item.category} &bull; {item.material} &bull; {item.year}
          </p>
        </ScrollReveal>
      </div>

      {/* Main Showcase */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 md:mb-32">
        {/* Left: Big Hero Image with Curtain Up Reveal */}
        <div className="lg:col-span-7">
          <ImageReveal type="scale" amount={0.08}>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-background-secondary">
              <Image
                src={item.heroImage}
                alt={item.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center filter brightness-[0.88]"
              />
            </div>
          </ImageReveal>
        </div>

        {/* Right: Narrative & Technical Specifications */}
        <div className="lg:col-span-5 flex flex-col space-y-8">
          <ScrollReveal variant="fadeLeft" delay={0.1}>
            <div className="bg-background-secondary border border-border-subtle p-8">
              <span className="text-[10px] uppercase tracking-ultra text-accent mb-3 block">
                Materiality &amp; Form
              </span>
              <p className="font-serif text-lg text-foreground font-normal leading-relaxed mb-6">
                {item.description}
              </p>

              <h4 className="text-[11px] uppercase tracking-ultra text-foreground-muted mb-4 pt-4 border-t border-border-subtle">
                Specifications
              </h4>
              <dl className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <dt className="text-foreground-subtle">Primary Material</dt>
                  <dd className="text-foreground font-medium">{item.material}</dd>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <dt className="text-foreground-subtle">Surface Finish</dt>
                  <dd className="text-foreground">{item.finish}</dd>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <dt className="text-foreground-subtle">Dimensions</dt>
                  <dd className="text-foreground">{item.dimensions}</dd>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <dt className="text-foreground-subtle">Origin Year</dt>
                  <dd className="text-foreground">{item.year}</dd>
                </div>
              </dl>

              <div className="mt-8 pt-4 border-t border-border-subtle">
                <a
                  href={`mailto:inquiries@arunaatelier.com?subject=Inquiry regarding: ${item.title}`}
                  className="block w-full text-center py-3 border border-accent/40 text-accent hover:border-accent hover:text-foreground text-[10px] tracking-widest uppercase transition-colors"
                >
                  Inquire for Production or Commission
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Gallery of Additional Angles */}
      {item.gallery.length > 0 && (
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal variant="fadeUpSubtle">
            <h3 className="text-xs uppercase tracking-ultra text-foreground-subtle mb-8">
              Detail Views
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {item.gallery.map((imgUrl, i) => (
              <ImageReveal key={i} type="curtainUp" delay={i * 0.1}>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-background-secondary">
                  <Image
                    src={imgUrl}
                    alt={`${item.title} detail angle ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover filter brightness-[0.85]"
                  />
                </div>
              </ImageReveal>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
