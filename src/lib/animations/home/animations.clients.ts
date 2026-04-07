import type { Easing, Transition, Variants } from "framer-motion";

export const easeIn: Easing = [0.22, 1, 0.36, 1];

export const sectionVariants: Variants = {
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

export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: easeIn,
    },
  },
};

export const listVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
  },
};

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 22,
      delay: index * 0.028,
    } as Transition,
  }),
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.96,
    transition: {
      duration: 0.16,
      ease: easeIn,
    },
  },
};

export const layoutTransition: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 26,
};

export const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: easeIn,
    },
  },
};
