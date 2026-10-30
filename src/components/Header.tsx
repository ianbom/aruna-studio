"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchModalOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "ARCHITECTURE", href: "/architecture" },
    { label: "DESIGN", href: "/design" },
    { label: "STUDIO", href: "/studio" },
    { label: "JOURNAL", href: "/journal" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/92 backdrop-blur-md py-4 border-b border-[#202020]"
            : "bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/30 to-transparent py-6"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none"
            aria-label="Aruna Atelier Home"
          >
            <span className="font-sans text-sm md:text-base font-normal tracking-architectural text-foreground group-hover:text-accent transition-colors duration-300">
              ARUNA ATELIER
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[11px] tracking-widest transition-colors duration-300 py-1 relative ${
                    isActive
                      ? "text-accent font-medium"
                      : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Search Modal Trigger & Mobile Menu Toggle */}
          <div className="flex items-center space-x-5">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="text-foreground-muted hover:text-foreground transition-colors p-1.5 focus:outline-none"
              aria-label="Open Search"
            >
              <Search className="w-4 h-4 stroke-[1.5]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-foreground-muted hover:text-foreground transition-colors p-1.5 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[1.5]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col justify-between pt-28 pb-12 px-8 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[10px] tracking-ultra text-foreground-subtle uppercase">
                Navigation
              </span>
              <nav className="flex flex-col space-y-5">
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-xl font-serif tracking-wide text-foreground hover:text-accent transition-colors flex items-center justify-between border-b border-[#202020] pb-3"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-foreground-subtle" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="border-t border-[#202020] pt-6 flex flex-col space-y-2 text-xs text-foreground-subtle">
              <span className="font-sans tracking-wider text-foreground-muted">ARUNA ATELIER</span>
              <p>Copenhagen — New York</p>
              <p className="text-[11px] text-[#666]">Architecture &bull; Spatial Design &bull; Objects</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimal Search Overlay Modal */}
      <AnimatePresence>
        {searchModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md flex items-start justify-center pt-24 px-6"
          >
            <div className="w-full max-w-2xl bg-[#111111] border border-[#292929] p-6 md:p-8 rounded-none relative shadow-2xl">
              <button
                onClick={() => setSearchModalOpen(false)}
                className="absolute top-6 right-6 text-foreground-muted hover:text-foreground"
                aria-label="Close Search Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-[11px] tracking-ultra text-accent uppercase block mb-3">
                ARUNA ATELIER ARCHIVE
              </span>

              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search projects, materials, objects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-[#181818] border border-[#292929] px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent"
                />
              </div>

              <div className="text-xs text-foreground-subtle flex flex-wrap gap-2">
                <span className="text-foreground-muted">Suggested:</span>
                <Link
                  href="/architecture/monolith-residence"
                  onClick={() => setSearchModalOpen(false)}
                  className="hover:text-accent underline underline-offset-4"
                >
                  Monolith Residence
                </Link>
                &bull;
                <Link
                  href="/architecture/aethel-sanctuary"
                  onClick={() => setSearchModalOpen(false)}
                  className="hover:text-accent underline underline-offset-4"
                >
                  Aethel Sanctuary
                </Link>
                &bull;
                <Link
                  href="/design/stratum-lounge-chair"
                  onClick={() => setSearchModalOpen(false)}
                  className="hover:text-accent underline underline-offset-4"
                >
                  Stratum Chair
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
