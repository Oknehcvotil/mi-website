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
