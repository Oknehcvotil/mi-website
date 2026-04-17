import type { Transition } from "framer-motion";

export const footerHidden = { opacity: 0, y: 16 };

export const footerVisible = { opacity: 1, y: 0 };

export const footerTransition: Transition = {
  duration: 0.48,
  ease: [0.22, 1, 0.36, 1],
};
