import type { Transition, Variants } from "framer-motion";

export const overlayVariants: Variants = {
  closed: {
    opacity: 0,
    pointerEvents: "none",
    transition: {
      duration: 0.24,
      ease: [0.4, 0, 0.2, 1] as const,
      delay: 0.06,
    },
  },
  open: {
    opacity: 1,
    pointerEvents: "auto",
    transition: {
      duration: 0.22,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const panelVariants: Variants = {
  closed: {
    x: "-104%",
    transition: {
      duration: 0.32,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 30,
      mass: 0.9,
    } as Transition,
  },
};

export const modalVariants: Variants = {
  closed: { opacity: 0, scale: 0.98, transition: { duration: 0.18 } },
  open: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};
