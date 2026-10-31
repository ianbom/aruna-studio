export const easing = {
  editorial: [0.22, 1, 0.36, 1] as const,
  smooth: [0.16, 1, 0.3, 1] as const,
  subtle: [0.25, 0.46, 0.45, 0.94] as const,
};

export const durations = {
  label: 0.4,
  paragraph: 0.6,
  heading: 0.75,
  image: 0.9,
  grid: 0.7,
  hover: 0.3,
  section: 0.8,
};

export const viewportDefaults = {
  once: true,
  amount: 0.05,
  margin: "0px",
};
