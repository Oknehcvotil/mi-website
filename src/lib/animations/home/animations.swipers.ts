import type { Variants } from "framer-motion";

export const sectionV: Variants = {
  hidden: {},
  show: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const titleV: Variants = {
  hidden: { opacity: 0, y: 12, clipPath: "inset(0 100% 0 0)" },
  show: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const blockV: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
