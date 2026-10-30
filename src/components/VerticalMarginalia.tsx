import React from "react";

interface VerticalMarginaliaProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export default function VerticalMarginalia({
  label,
  children,
  className = "",
}: VerticalMarginaliaProps) {
  // Spaced out letters e.g. "R E C E N T"
  const spacedLabel = label.split("").join(" ");

  return (
    <div className={`relative w-full ${className}`}>
      {/* Left Marginalia */}
      <div
        className="hidden xl:flex absolute left-4 lg:left-6 top-12 bottom-12 items-center justify-center select-none pointer-events-none z-10"
        aria-hidden="true"
      >
        <span className="vertical-lr rotate-180 text-[10px] tracking-ultra text-foreground-subtle/50 uppercase font-sans">
          {spacedLabel}
        </span>
      </div>

      {/* Main Content */}
      <div className="w-full xl:px-16">{children}</div>

      {/* Right Marginalia */}
      <div
        className="hidden xl:flex absolute right-4 lg:right-6 top-12 bottom-12 items-center justify-center select-none pointer-events-none z-10"
        aria-hidden="true"
      >
        <span className="vertical-lr text-[10px] tracking-ultra text-foreground-subtle/50 uppercase font-sans">
          {spacedLabel}
        </span>
      </div>
    </div>
  );
}
