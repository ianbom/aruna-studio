import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-[#1f1f1f] pt-16 md:pt-24 pb-12 text-foreground">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Top Section: Wordmark & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1f1f1f]">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-6 focus:outline-none">
                <span className="font-sans text-base tracking-architectural text-foreground">
                  ARUNA ATELIER
                </span>
              </Link>
              <p className="text-sm font-serif text-foreground-muted max-w-md leading-relaxed">
                Architecture shaped by material, proportion, and the quiet beauty of space. Designing residential, hospitality, and cultural environments worldwide.
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-6 text-xs text-foreground-subtle">
              <div>
                <span className="block uppercase text-[10px] tracking-widest text-[#555]">Copenhagen Studio</span>
                <span className="font-mono text-foreground-muted">Amalienborg Plads 4, DK</span>
              </div>
              <div className="h-6 w-[1px] bg-[#222]" />
              <div>
                <span className="block uppercase text-[10px] tracking-widest text-[#555]">New York Atelier</span>
                <span className="font-mono text-foreground-muted">Franklin St, Tribeca, NYC</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Work */}
            <div>
              <h4 className="text-[11px] uppercase tracking-ultra text-accent mb-6 font-medium">
                Work
              </h4>
              <ul className="space-y-3 text-xs tracking-wider">
                <li>
                  <Link href="/architecture" className="text-foreground-muted hover:text-foreground transition-colors">
                    Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/architecture?category=Residential" className="text-foreground-muted hover:text-foreground transition-colors">
                    Residential
                  </Link>
                </li>
                <li>
                  <Link href="/architecture?category=Hospitality" className="text-foreground-muted hover:text-foreground transition-colors">
                    Hospitality
                  </Link>
                </li>
                <li>
                  <Link href="/architecture?category=Commercial" className="text-foreground-muted hover:text-foreground transition-colors">
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link href="/design" className="text-foreground-muted hover:text-foreground transition-colors">
                    Furniture & Objects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Studio */}
            <div>
              <h4 className="text-[11px] uppercase tracking-ultra text-accent mb-6 font-medium">
                Studio
              </h4>
              <ul className="space-y-3 text-xs tracking-wider">
                <li>
                  <Link href="/studio" className="text-foreground-muted hover:text-foreground transition-colors">
                    Philosophy & Ethos
                  </Link>
                </li>
                <li>
                  <Link href="/studio#process" className="text-foreground-muted hover:text-foreground transition-colors">
                    Material Method
                  </Link>
                </li>
                <li>
                  <Link href="/journal" className="text-foreground-muted hover:text-foreground transition-colors">
                    Journal & Essays
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-foreground-muted hover:text-foreground transition-colors">
                    Inquiries & Press
                  </Link>
                </li>
                <li>
                  <Link href="/contact#careers" className="text-foreground-muted hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Channels */}
            <div>
              <h4 className="text-[11px] uppercase tracking-ultra text-accent mb-6 font-medium">
                Direct
              </h4>
              <ul className="space-y-3 text-xs tracking-wider">
                <li>
                  <a
                    href="mailto:inquiries@arunaatelier.com"
                    className="text-foreground-muted hover:text-foreground transition-colors break-all"
                  >
                    inquiries@arunaatelier.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:press@arunaatelier.com"
                    className="text-foreground-muted hover:text-foreground transition-colors"
                  >
                    press@arunaatelier.com
                  </a>
                </li>
                <li className="pt-2 text-foreground-subtle text-[11px]">
                  <span>Follow:</span>
                  <div className="flex space-x-3 mt-1 text-foreground-muted">
                    <span className="hover:text-foreground cursor-pointer">Instagram</span>
                    <span>&bull;</span>
                    <span className="hover:text-foreground cursor-pointer">LinkedIn</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-foreground-subtle">
          <p className="tracking-widest">
            &copy; 2026 ARUNA ATELIER. All rights reserved.
          </p>
          <p className="mt-4 md:mt-0 tracking-wider text-[11px] text-[#555]">
            Architecture &bull; Interiors &bull; Spatial Design
          </p>
        </div>
      </div>
    </footer>
  );
}
