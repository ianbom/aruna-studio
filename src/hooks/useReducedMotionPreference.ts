"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function useReducedMotionPreference(): boolean {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return false;
  }

  return Boolean(prefersReduced);
}
