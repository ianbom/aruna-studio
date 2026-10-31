"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // ponytail: mount state prevents SSR hydration mismatch; upgrade to cookie-based theme if instant icon SSR required
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className={`text-foreground-muted hover:text-foreground transition-colors p-1.5 focus:outline-none ${className}`}
        aria-label="Toggle theme"
      >
        <span className="w-4 h-4 block" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`text-foreground-muted hover:text-foreground transition-colors p-1.5 focus:outline-none ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 stroke-[1.5] transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 stroke-[1.5] transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
