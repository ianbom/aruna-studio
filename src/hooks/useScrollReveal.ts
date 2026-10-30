"use client";

import { useRef } from "react";
import { useInView, UseInViewOptions } from "framer-motion";
import { viewportDefaults } from "@/lib/motion/transitions";

export function useScrollReveal(options?: UseInViewOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: options?.once ?? viewportDefaults.once,
    amount: options?.amount ?? (viewportDefaults.amount as "some" | "all" | number),
    margin: options?.margin ?? (viewportDefaults.margin as any),
  });

  return { ref, isInView };
}
