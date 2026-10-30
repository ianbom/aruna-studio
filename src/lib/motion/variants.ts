import { Variants } from "framer-motion";
import { easing, durations } from "./transitions";

export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.paragraph,
      ease: easing.smooth,
    },
  },
};

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.heading,
      ease: easing.editorial,
    },
  },
};

export const fadeUpSubtleVariant: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.label,
      ease: easing.smooth,
    },
  },
};

export const fadeLeftVariant: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.section,
      ease: easing.editorial,
    },
  },
};

export const fadeRightVariant: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.section,
      ease: easing.editorial,
    },
  },
};

export const curtainUpVariant: Variants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    opacity: 0.9,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: durations.image,
      ease: easing.editorial,
    },
  },
};

export const curtainRightVariant: Variants = {
  hidden: {
    clipPath: "inset(0% 100% 0% 0%)",
    opacity: 0.9,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: durations.image,
      ease: easing.editorial,
    },
  },
};

export const scaleSubtleVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.04,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.image,
      ease: easing.editorial,
    },
  },
};

export const createStaggerContainer = (
  staggerChildren = 0.08,
  delayChildren = 0.05
): Variants => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerItemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.grid,
      ease: easing.editorial,
    },
  },
};
