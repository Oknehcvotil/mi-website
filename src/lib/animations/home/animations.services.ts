import type { Easing, Variants } from "framer-motion";

export const easeIn: Easing = [0.22, 1, 0.36, 1];

export const servicesSectionVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.24,
      ease: easeIn,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const servicesTitleVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeIn,
    },
  },
};

export const servicesListVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.08,
    },
  },
};

export const servicesCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.42,
      ease: easeIn,
      when: "beforeChildren",
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

export const servicesCardItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: easeIn,
    },
  },
};
