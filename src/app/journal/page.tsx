import React from "react";
import Image from "next/image";
import Link from "next/link";
import { journalArticles } from "@/data/journal";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function JournalPage() {
  return (
    <div className="pt-32 md:pt-40 pb-28 text-foreground bg-[#0a0a0a]">
      {/* Editorial Header */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 mb-16 md:mb-24">
        <ScrollReveal variant="fadeUpSubtle">
          <span className="text-[10px] uppercase tracking-ultra text-accent mb-4 block">
            Reflections &bull; Essays
          </span>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05} className="mb-6">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground max-w-4xl block">
            Journal
          </h1>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.12}>
          <p className="font-sans text-xs md:text-base text-foreground-muted leading-relaxed font-light max-w-2xl">
            Writings on spatial acoustics, light choreography, tactile honesty, and the psychological impact of subtractive architecture.
          </p>
        </ScrollReveal>
      </div>

      {/* Featured Lead Article with curtain reveal */}
      {journalArticles[0] && (
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 mb-24 md:mb-32">
          <Link
            href={`/journal/${journalArticles[0].slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
          >
            <div className="lg:col-span-8">
              <ScrollReveal variant="fadeUp" delay={0.05}>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#121212]">
                  <Image
                    src={journalArticles[0].coverImage}
                    alt={journalArticles[0].title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover object-center filter brightness-[0.88] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-4 flex flex-col space-y-4">
              <ScrollReveal variant="fadeUpSubtle" delay={0.1}>
                <div className="flex items-center space-x-3 text-[10px] tracking-widest uppercase text-accent">
                  <span>{journalArticles[0].category}</span>
                  <span>&bull;</span>
                  <span className="text-foreground-subtle">{journalArticles[0].readTime}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={0.18}>
                <h2 className="font-serif text-2xl md:text-4xl text-foreground font-light leading-snug group-hover:text-accent transition-colors">
                  {journalArticles[0].title}
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={0.24}>
                <p className="font-sans text-xs md:text-sm text-foreground-muted font-light leading-relaxed">
                  {journalArticles[0].excerpt}
                </p>
              </ScrollReveal>

              <ScrollReveal variant="fadeUpSubtle" delay={0.3}>
                <span className="text-[10px] tracking-ultra text-foreground-subtle uppercase pt-2">
                  {journalArticles[0].date} &rarr;
                </span>
              </ScrollReveal>
            </div>
          </Link>
        </div>
      )}

      {/* Remaining Articles Grid */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 border-t border-[#202020] pt-16">
        <ScrollReveal variant="fadeUpSubtle">
          <h2 className="text-xs uppercase tracking-ultra text-foreground-subtle mb-12">
            Archive
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {journalArticles.slice(1).map((article, idx) => (
            <ScrollReveal
              key={article.slug}
              variant={idx === 0 ? "fadeRight" : "fadeLeft"}
              delay={0.1}
            >
              <article className="group flex flex-col">
                <Link href={`/journal/${article.slug}`} className="block focus:outline-none">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#121212] mb-6">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center filter brightness-[0.85] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 text-[10px] tracking-widest uppercase text-accent">
                      <span>{article.category}</span>
                      <span>&bull;</span>
                      <span className="text-foreground-subtle">{article.readTime}</span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-foreground font-normal group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-sans text-xs text-foreground-muted leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <span className="text-[10px] tracking-widest uppercase text-foreground-subtle pt-2">
                      {article.date}
                    </span>
                  </div>
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
