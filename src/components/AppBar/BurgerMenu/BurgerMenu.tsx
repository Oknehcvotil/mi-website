import { createPortal } from "react-dom";
import { useReducedMotion } from "framer-motion";
import { BurgerCont, BurgerLayout, NavCont } from "./BurgerMenu.styled";
import BurgerCloseBtn from "../../Buttons/BurgerCloseBtn/BurgerCloseBtn";
import NavBar from "../NavBar/NavBar";
import {
  overlayVariants,
  panelVariants,
} from "../../../lib/animations/animations.burger";
import { useBurgerMenuEffects } from "../../../lib/hooks/useBurgerMenuEffects";

type BurgerMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

function BurgerMenu({ isOpen, onClose }: BurgerMenuProps) {
  const reduce = !!useReducedMotion();
  useBurgerMenuEffects({ isOpen, onClose, reduce });

  const root = document.getElementById("burger-menu-root");
  if (!root) return null;

  return createPortal(
    <BurgerLayout
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
        <NavCont>
          <NavBar onCloseBurger={onClose} isBurgerOpen={isOpen} />
        </NavCont>
      </BurgerCont>
    </BurgerLayout>,
    root,
  );
}

export default BurgerMenu;
