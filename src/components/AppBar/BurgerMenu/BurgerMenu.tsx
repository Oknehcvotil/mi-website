import { useEffect } from "react";
import { createPortal } from "react-dom";
import { BurgerCont, BurgerLayuot } from "./BurgerMenu.styled";
import BurgerCloseBtn from "./BurgerCloseBtn/BurgerCloseBtn";
import NavBar from "../NavBar/NavBar";
import {
  overlayVariants,
  panelVariants,
} from "../../../lib/animations/animations.burger";

type BurgerMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

function BurgerMenu({ isOpen, onClose }: BurgerMenuProps) {
  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const sbw = window.innerWidth - document.documentElement.clientWidth; 
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
