import type { Variants } from "framer-motion";

export const textParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, when: "beforeChildren" },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const imageWrap: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export const laptopVar: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const robotVar: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
