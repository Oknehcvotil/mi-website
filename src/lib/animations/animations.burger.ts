import type { Transition, Variants } from "framer-motion";

export const overlayVariants = {
  closed: {
    opacity: 0,
    pointerEvents: "none",
    transition: { duration: 0.1, delay: 0.18 },
  },
  open: {
    opacity: 1,
    pointerEvents: "auto",
    transition: { duration: 0.1, delay: 0 },
  },
};

export const panelVariants: Variants = {
  closed: { x: "-100%", transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } },
  open: {
    x: 0,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    } as Transition,
  },
};

export const modalVariants: Variants = {
  closed: { opacity: 0,  scale: 0.98, transition: { duration: 0.18 } },
  open: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};
