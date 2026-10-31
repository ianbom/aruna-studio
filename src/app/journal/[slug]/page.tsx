import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { journalArticles } from "@/data/journal";
import { ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return journalArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const articleIndex = journalArticles.findIndex((a) => a.slug === slug);

  if (articleIndex === -1) {
    notFound();
  }

  const article = journalArticles[articleIndex];
  const nextArticle =
    articleIndex < journalArticles.length - 1
      ? journalArticles[articleIndex + 1]
      : journalArticles[0];

  return (
    <article className="pt-28 md:pt-36 pb-32 text-foreground bg-[#0a0a0a]">
      {/* Back button */}
      <div className="max-w-[960px] mx-auto px-6 mb-8">
        <ScrollReveal variant="fadeUpSubtle">
          <Link
            href="/journal"
            className="inline-flex items-center space-x-2 text-[10px] tracking-ultra text-accent uppercase hover:text-accent-hover transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Journal</span>
          </Link>
        </ScrollReveal>
      </div>

      {/* Article Header */}
      <header className="max-w-[960px] mx-auto px-6 mb-12">
        <ScrollReveal variant="fadeUpSubtle">
          <div className="flex items-center space-x-3 text-[10px] tracking-widest uppercase text-accent mb-4">
            <span>{article.category}</span>
            <span>&bull;</span>
            <span className="text-foreground-subtle">{article.date}</span>
            <span>&bull;</span>
            <span className="text-foreground-subtle">{article.readTime}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05} className="mb-8">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground font-light leading-tight block">
            {article.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.12}>
          <p className="font-serif text-lg md:text-xl text-foreground-muted italic leading-relaxed border-l-2 border-accent/40 pl-6">
            &ldquo;{article.excerpt}&rdquo;
          </p>
        </ScrollReveal>
      </header>

      {/* Featured Cover Image */}
      <div className="max-w-[1400px] mx-auto px-6 mb-16 md:mb-24">
        <ScrollReveal variant="scaleSubtle">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#121212]">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.88]"
            />
          </div>
        </ScrollReveal>
      </div>

      {/* Article Long-form Body (stable, preserved reading flow) */}
      <div className="max-w-[760px] mx-auto px-6 space-y-8 text-sm md:text-base text-foreground-muted font-light leading-relaxed mb-24">
        {article.content.map((paragraph, idx) => (
          <p
            key={idx}
            className={
              idx === 0
                ? "first-letter:font-serif first-letter:text-4xl first-letter:float-left first-letter:mr-3 first-letter:text-accent"
                : ""
            }
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Read Next Section */}
      <div className="max-w-[960px] mx-auto px-6 pt-16 border-t border-[#202020]">
        <ScrollReveal variant="fadeUpSubtle">
          <span className="text-[10px] tracking-ultra text-foreground-subtle uppercase block mb-2">
            Read Next
          </span>
          <Link
            href={`/journal/${nextArticle.slug}`}
            className="group block"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors font-light">
              {nextArticle.title} &rarr;
            </h3>
            <p className="font-sans text-xs text-foreground-subtle mt-2">
              {nextArticle.category} &bull; {nextArticle.readTime}
            </p>
          </Link>
        </ScrollReveal>
      </div>
    </article>
  );
}
