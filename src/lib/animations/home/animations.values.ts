import type { Variants, Easing } from "framer-motion";

export const easeIn: Easing = [0.22, 1, 0.36, 1];

export const cardIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.6, delay },
  },
});

export const inViewViewport = { amount: 0.5, once: true } as const;
