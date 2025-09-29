import { type ReactNode } from "react";
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

  return (
    <ModalLayuot
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      initial="closed"
      variants={overlayVariants}
      animate={isModalOpen ? "open" : "closed"}
    >
      {children}
    </ModalLayuot>
  );
};

export default ModalOverlay;
 