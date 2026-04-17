import type { Transition, Variants } from "framer-motion";

export const headerVariants: Variants = {
  hidden: {
    y: -32,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const getLangListVariants = (isWideDesktop: boolean): Variants => ({
  closed: { height: 40 },
  open: { height: isWideDesktop ? 95 : 70 },
});

export const langItemVariants: Variants = {
  hidden: { opacity: 0, y: -6, pointerEvents: "none" },
  visible: { opacity: 1, y: 0, pointerEvents: "auto" },
};

export const langListTransition: Transition = {
  duration: 0.18,
  ease: [0.22, 1, 0.36, 1],
};

export const subMenuListVariants: Variants = {
  closed: {
    opacity: 0,
    y: -6,
    scale: 0.985,
    filter: "blur(4px)",
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 0.2, 1],
      when: "afterChildren",
      staggerChildren: 0.012,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.12,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.016,
    },
  },
};

export const subMenuItemVariants: Variants = {
  closed: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.08, ease: [0.4, 0, 0.2, 1] },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1, ease: [0.22, 1, 0.36, 1] },
  },
};

export const subMenuArrowTransition: Transition = {
  type: "spring",
  stiffness: 460,
  damping: 30,
};
