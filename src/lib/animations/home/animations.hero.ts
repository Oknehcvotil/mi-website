import { type Variants, type Easing } from "framer-motion";

export const easeIn: Easing = [0.22, 1, 0.36, 1];

export const createHeroSceneVariants = (
  isMobile: boolean,
  reduce: boolean,
): Variants => ({
  hidden: { opacity: reduce ? 1 : 0 },
  show: {
    opacity: 1,
    transition: reduce
      ? { duration: 0 }
      : {
          duration: isMobile ? 0.18 : 0.28,
          ease: easeIn,
          when: "beforeChildren",
          delayChildren: isMobile ? 0.02 : 0.05,
          staggerChildren: isMobile ? 0.04 : 0.06,
        },
  },
});

export const createHeroTextGroupVariants = (
  isMobile: boolean,
  reduce: boolean,
): Variants => ({
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: reduce
      ? { duration: 0 }
      : {
          when: "beforeChildren",
          staggerChildren: isMobile ? 0.1 : 0.14,
        },
  },
});

export const createHeroTitleVariants = (reduce: boolean): Variants => ({
  hidden: {
    opacity: reduce ? 1 : 0,
    y: reduce ? 0 : 22,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: reduce ? { duration: 0 } : { duration: 0.48, ease: easeIn },
  },
});

export const createHeroTextVariants = (reduce: boolean): Variants => ({
  hidden: {
    opacity: reduce ? 1 : 0,
    y: reduce ? 0 : 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: reduce ? { duration: 0 } : { duration: 0.38, ease: easeIn },
  },
});

export const createHeroButtonVariants = (reduce: boolean): Variants => ({
  hidden: {
    opacity: reduce ? 1 : 0,
    y: reduce ? 0 : 14,
    scale: reduce ? 1 : 0.94,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: reduce
      ? { duration: 0 }
      : {
          duration: 0.4,
          ease: easeIn,
        },
  },
});

export const createHeroMediaVariants = (
  isMobile: boolean,
  reduce: boolean,
): Variants => ({
  hidden: isMobile
    ? {
        opacity: reduce ? 1 : 0,
        y: reduce ? 0 : 12,
        scale: reduce ? 1 : 0.995,
      }
    : {
        opacity: reduce ? 1 : 0,
        y: reduce ? 0 : 22,
        scale: reduce ? 1 : 0.992,
      },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: reduce
      ? { duration: 0 }
      : {
          duration: isMobile ? 0.28 : 0.42,
          ease: easeIn,
        },
  },
});
