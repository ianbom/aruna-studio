import { easing, durations, viewportDefaults } from "./transitions";

export const motionPresets = {
  hero: {
    image: {
      initial: { opacity: 0, scale: 1.035 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 1.1, ease: easing.editorial },
    },
    heading: {
      initial: { opacity: 0, y: 22 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.75, ease: easing.editorial, delay: 0.15 },
    },
    supporting: {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: easing.smooth, delay: 0.3 },
    },
  },
  curtainReveal: {
    viewport: viewportDefaults,
    initial: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0.8 },
    whileInView: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
    transition: { duration: durations.image, ease: easing.editorial },
  },
  editorialText: {
    viewport: viewportDefaults,
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: durations.heading, ease: easing.editorial },
  },
  cascadeCard: (index: number) => ({
    viewport: viewportDefaults,
    initial: {
      opacity: 0,
      y: 20,
      x: index % 3 === 1 ? 12 : index % 3 === 2 ? -12 : 0,
    },
    whileInView: { opacity: 1, y: 0, x: 0 },
    transition: {
      duration: durations.grid,
      delay: (index % 3) * 0.08,
      ease: easing.editorial,
    },
  }),
  directional: (direction: "left" | "right") => ({
    viewport: viewportDefaults,
    initial: { opacity: 0, x: direction === "left" ? -28 : 28 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: durations.section, ease: easing.editorial },
  }),
};
