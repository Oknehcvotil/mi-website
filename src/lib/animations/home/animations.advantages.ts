import { type Variants, type Easing } from "framer-motion";

export const easeIn: Easing = [0.22, 1, 0.36, 1];

export const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.24,
      ease: easeIn,
      when: "beforeChildren",
    },
  },
};

export const listVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.03,
    },
  },
};

export const itemIn: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 18,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

export const iconIn: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    rotate: -8,
    scale: 0.86,
  },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 16,
    },
  },
};

export const textIn: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
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
