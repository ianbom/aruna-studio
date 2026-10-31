import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 text-foreground bg-[#0a0a0a]">
      <span className="text-[10px] uppercase tracking-ultra text-accent mb-4 block">
        404 &bull; Spatial Absence
      </span>
      <h1 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-6">
        Page Not Located
      </h1>
      <p className="font-sans text-xs md:text-sm text-foreground-muted max-w-md mb-8 leading-relaxed font-light">
        The requested path does not exist or has been shifted within the atelier archive.
      </p>
      <Link
        href="/"
        className="inline-block px-8 py-3 border border-accent/40 text-accent hover:border-accent hover:text-foreground text-[10px] tracking-widest uppercase transition-all duration-300"
      >
        Return to Home &rarr;
      </Link>
    </div>
  );
}
