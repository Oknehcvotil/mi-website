import { BurgerCloseButton } from "./BurgerCloseBtn.styled";

type BurgerCloseBtnProps = {
  onClose: () => void;
  width?: number;
  height?: number;
  className?: string;
};

const BurgerCloseBtn = ({
  onClose,
  width = 12,
  height = 12,
  className,
}: BurgerCloseBtnProps) => {
  return (
    <BurgerCloseButton onClick={onClose} className={className}>
      <svg width={width} height={height}>
        <use href="/icons/sprite.svg#icon-close"></use>
      </svg>
    </BurgerCloseButton>
  );
};

export default BurgerCloseBtn;
