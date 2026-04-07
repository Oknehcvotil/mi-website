import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { overlayVariants } from "../../lib/animations/animations.burger";
import { ModalLayuot } from "./ModalOverlay.styled";
import { useBodyScrollLock } from "../../lib/hooks/useBodyScrollLock";

type ModalOverlayProps = {
  isModalOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const ModalOverlay = ({
  isModalOpen,
  onClose,
  children,
}: ModalOverlayProps) => {
  useBodyScrollLock(isModalOpen);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <ModalLayuot
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      initial="closed"
      variants={overlayVariants}
      animate={isModalOpen ? "open" : "closed"}
    >
      {children}
    </ModalLayuot>,
    document.body,
  );
};

export default ModalOverlay;
