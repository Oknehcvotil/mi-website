import { useEffect } from "react";
import { createPortal } from "react-dom";
import { BurgerCont, BurgerLayuot } from "./BurgerMenu.styled";
import { type Variants, type Transition } from "framer-motion";
import BurgerCloseBtn from "./BurgerCloseBtn/BurgerCloseBtn";
import NavBar from "../NavBar/NavBar";

type BurgerMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const overlayVariants = {
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

const panelVariants: Variants = {
  closed: { x: "-100%", transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } },
  open: {
    x: 0,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    } as Transition,
  },
};

function BurgerMenu({ isOpen, onClose }: BurgerMenuProps) {
  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const sbw = window.innerWidth - document.documentElement.clientWidth; // ширина скроллбара
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${scrollY}px`;
    if (sbw > 0) document.body.style.paddingRight = `${sbw}px`;

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      document.body.style.paddingRight = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen, onClose]);

  const root = document.querySelector("#burger-menu-root");

  if (!root) return null;

  return createPortal(
    <BurgerLayuot
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      initial="closed"
      variants={overlayVariants}
      animate={isOpen ? "open" : "closed"}
    >
      <BurgerCont
        role="dialog"
        aria-modal="true"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={panelVariants}
      >
        <BurgerCloseBtn onClose={onClose} />
        <NavBar onCloseBurger={onClose} />
      </BurgerCont>
    </BurgerLayuot>,

    root
  );
}

export default BurgerMenu;
