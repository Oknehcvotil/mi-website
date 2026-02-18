import { useEffect } from "react";
import { createPortal } from "react-dom";
import { BurgerCont, BurgerLayuot, NavCont } from "./BurgerMenu.styled";
import BurgerCloseBtn from "../../Buttons/BurgerCloseBtn/BurgerCloseBtn";
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
    const openedHash = window.location.hash;

    let removedId: string | null = null;
    let hashTarget: HTMLElement | null = null;

    const dontTouch = new Set(["contact"]);
    if (openedHash) {
      const id = openedHash.slice(1);
      if (!dontTouch.has(id)) {
        const el = document.getElementById(id);
        if (el) {
          removedId = id;
          hashTarget = el;
          el.removeAttribute("id");
        }
      }
    }

    const prevScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

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

      if (removedId && hashTarget) hashTarget.id = removedId;

      const newHash = window.location.hash;
      const hashChanged = newHash !== openedHash;

      requestAnimationFrame(() => {
        if (hashChanged && newHash) {
          const target = document.getElementById(newHash.slice(1));
          if (target) {
            const nearTop = Math.abs(target.getBoundingClientRect().top) < 2;
            if (!nearTop)
              target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else {
          window.scrollTo(0, scrollY);
        }
        document.documentElement.style.scrollBehavior = prevScrollBehavior;
      });
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
        <NavCont>
          <NavBar onCloseBurger={onClose} />
        </NavCont>
      </BurgerCont>
    </BurgerLayuot>,
    root
  );
}

export default BurgerMenu;
