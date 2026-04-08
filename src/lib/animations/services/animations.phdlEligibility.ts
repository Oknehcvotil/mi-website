import type { Easing, Variants } from "framer-motion";

const easeOut: Easing = [0.22, 1, 0.36, 1];

export const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.12,
      delayChildren: 0.02,
    },
  },
};

export const columnVariants: Variants = {
  hidden: (direction: number = 1) => ({
    opacity: 0,
    x: 14 * direction,
    y: 16,
    scale: 0.992,
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.42,
      ease: easeOut,
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
};

export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};

export const listVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const itemVariants: Variants = {
  hidden: () => ({
    opacity: 0,
    y: 12,
    scale: 0.988,
  }),
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.32,
      ease: easeOut,
    },
  },
};

export const iconVariants: Variants = {
  hidden: (index: number = 0) => ({
    opacity: 0,
    scale: 0.88,
    rotate: index % 2 === 0 ? -4 : 4,
  }),
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.26,
      ease: easeOut,
    },
  },
};

export const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.992 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.36,
      ease: easeOut,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

export const ctaTextVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: easeOut,
    },
  },
};

export const ctaButtonVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.26,
      ease: easeOut,
      delay: 0.02,
    },
  },
};
