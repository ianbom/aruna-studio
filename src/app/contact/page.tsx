"use client";

import React, { useState } from "react";
import { Mail, MapPin, Copy, Check } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import TextReveal from "@/components/motion/TextReveal";

export default function ContactPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    inquiryType: "Architecture Commission",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      `[${formState.inquiryType}] Commission Inquiry from ${formState.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nProject Location: ${formState.location}\nType: ${formState.inquiryType}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:inquiries@arunaatelier.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <div className="pt-32 md:pt-40 pb-28 text-foreground bg-background">
      {/* 1. Header */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 mb-20 md:mb-28">
        <ScrollReveal variant="fadeUpSubtle">
          <span className="text-[10px] uppercase tracking-ultra text-accent mb-4 block">
            Dialogue &bull; Commissions
          </span>
        </ScrollReveal>

        <TextReveal as="h1" variant="mask" className="mb-6">
          <span className="font-serif text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground max-w-4xl block">
            Contact
          </span>
        </TextReveal>

        <ScrollReveal variant="fadeUp" delay={0.12}>
          <p className="font-sans text-xs md:text-base text-foreground-muted leading-relaxed font-light max-w-2xl">
            We welcome inquiries regarding private residential commissions, hospitality destinations, custom interior architecture, and gallery collaborations worldwide.
          </p>
        </ScrollReveal>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left Column: Direct Inboxes & Studios */}
        <div className="lg:col-span-5 flex flex-col space-y-12">
          {/* Direct Inboxes */}
          <ScrollReveal variant="fadeRight" delay={0.08}>
            <div>
              <h2 className="text-[10px] uppercase tracking-ultra text-accent mb-6">
                Direct Inboxes
              </h2>
              <div className="space-y-4">
                <div className="bg-background-secondary border border-border-subtle p-6 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-foreground-subtle block uppercase tracking-wider mb-1">
                      New Commissions
                    </span>
                    <a
                      href="mailto:inquiries@arunaatelier.com"
                      className="font-serif text-lg text-foreground hover:text-accent transition-colors"
                    >
                      inquiries@arunaatelier.com
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("inquiries@arunaatelier.com", "inq")}
                    className="p-2 text-foreground-subtle hover:text-foreground transition-colors"
                    title="Copy email"
                  >
                    {copiedKey === "inq" ? (
                      <Check className="w-4 h-4 text-accent" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="bg-background-secondary border border-border-subtle p-6 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-foreground-subtle block uppercase tracking-wider mb-1">
                      Press &amp; Monograph
                    </span>
                    <a
                      href="mailto:press@arunaatelier.com"
                      className="font-serif text-lg text-foreground hover:text-accent transition-colors"
                    >
                      press@arunaatelier.com
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("press@arunaatelier.com", "press")}
                    className="p-2 text-foreground-subtle hover:text-foreground transition-colors"
                    title="Copy email"
                  >
                    {copiedKey === "press" ? (
                      <Check className="w-4 h-4 text-accent" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="bg-background-secondary border border-border-subtle p-6 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-foreground-subtle block uppercase tracking-wider mb-1">
                      Atelier Careers &amp; Internships
                    </span>
                    <a
                      href="mailto:careers@arunaatelier.com"
                      className="font-serif text-lg text-foreground hover:text-accent transition-colors"
                    >
                      careers@arunaatelier.com
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("careers@arunaatelier.com", "careers")}
                    className="p-2 text-foreground-subtle hover:text-foreground transition-colors"
                    title="Copy email"
                  >
                    {copiedKey === "careers" ? (
                      <Check className="w-4 h-4 text-accent" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Studios Physical Addresses */}
          <ScrollReveal variant="fadeRight" delay={0.18}>
            <div>
              <h2 className="text-[10px] uppercase tracking-ultra text-accent mb-6">
                Studio Locations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="border-l border-border pl-6 space-y-2">
                  <span className="font-serif text-base text-foreground font-medium block">
                    Copenhagen Atelier
                  </span>
                  <p className="text-xs text-foreground-muted font-light leading-relaxed">
                    Amalienborg Plads 4<br />
                    1256 Copenhagen K<br />
                    Denmark
                  </p>
                  <p className="text-xs font-mono text-foreground-subtle pt-1">
                    +45 33 12 40 88
                  </p>
                </div>

                <div className="border-l border-border pl-6 space-y-2">
                  <span className="font-serif text-base text-foreground font-medium block">
                    New York Atelier
                  </span>
                  <p className="text-xs text-foreground-muted font-light leading-relaxed">
                    Franklin Street<br />
                    Tribeca, New York, NY 10013<br />
                    United States
                  </p>
                  <p className="text-xs font-mono text-foreground-subtle pt-1">
                    +1 212 555 0192
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Structured Inquiry Form */}
        <div className="lg:col-span-7">
          <ScrollReveal variant="fadeLeft" delay={0.12}>
            <div className="bg-background-secondary border border-border-subtle p-8 md:p-12">
              <span className="text-[10px] uppercase tracking-ultra text-accent mb-3 block">
                Initiate Project
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-4">
                Project Consultation
              </h2>
              <p className="text-xs text-foreground-muted font-light leading-relaxed mb-8">
                Please share the preliminary parameters of your commission. We review all prospective projects within two business days.
              </p>

              {submitted ? (
                <div className="bg-background-elevated border border-accent/40 p-8 text-center space-y-4">
                  <span className="text-accent text-[11px] uppercase tracking-widest block">
                    Inquiry Prepared
                  </span>
                  <p className="font-serif text-xl text-foreground">
                    Your email client has been dispatched.
                  </p>
                  <p className="text-xs text-foreground-muted font-light">
                    If your mail application did not open automatically, please send your project brief directly to <span className="text-accent">inquiries@arunaatelier.com</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 border border-border text-xs text-foreground-subtle hover:text-foreground uppercase tracking-widest transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-foreground-subtle block mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-background-elevated border border-border text-xs text-foreground px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                        placeholder="E.g. Elena Rostova"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-foreground-subtle block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-background-elevated border border-border text-xs text-foreground px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                        placeholder="name@domain.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-foreground-subtle block mb-2">
                        Project Typology
                      </label>
                      <select
                        value={formState.inquiryType}
                        onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                        className="w-full bg-background-elevated border border-border text-xs text-foreground px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      >
                        <option value="Residential Architecture">Residential Architecture</option>
                        <option value="Hospitality / Sanctuary Retreat">Hospitality / Sanctuary Retreat</option>
                        <option value="Interior Architecture & Space Planning">Interior Architecture &amp; Space Planning</option>
                        <option value="Bespoke Furniture / Lighting Commission">Bespoke Furniture / Lighting Commission</option>
                        <option value="Press / Publication Inquiry">Press / Publication Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-foreground-subtle block mb-2">
                        Site Location / City
                      </label>
                      <input
                        type="text"
                        value={formState.location}
                        onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                        className="w-full bg-background-elevated border border-border text-xs text-foreground px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                        placeholder="E.g. Stockholm Archipelago, Sweden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-foreground-subtle block mb-2">
                      Project Brief &amp; Scope *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-background-elevated border border-border text-xs text-foreground px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Tell us about the site context, approximate square footage, timeline, and design aspirations..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-accent hover:bg-accent-hover text-background text-xs uppercase tracking-ultra font-medium transition-colors"
                  >
                    Dispatch Project Inquiry
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
