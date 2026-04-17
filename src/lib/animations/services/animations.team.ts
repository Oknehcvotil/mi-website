import type { Variants } from "framer-motion";

export const teamSectionVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.1,
    },
  },
};

export const fadeUpVariants: Variants = {
  hidden: { y: 18, opacity: 0, filter: "blur(10px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export const titleRevealVariants: Variants = {
  hidden: {
    y: 24,
    opacity: 0,
    scale: 0.985,
    filter: "blur(12px)",
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const buttonRevealVariants: Variants = {
  hidden: { y: 16, opacity: 0, scale: 0.94, filter: "blur(8px)" },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const leftInVariants: Variants = {
  hidden: { x: -40, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const rightInVariants: Variants = {
  hidden: { x: 40, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const portraitRevealVariants: Variants = {
  hidden: {
    y: 22,
    opacity: 0,
    scale: 1.02,
    filter: "blur(8px)",
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
