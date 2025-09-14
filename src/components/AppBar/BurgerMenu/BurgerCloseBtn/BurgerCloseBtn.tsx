import { BurgerCloseButton } from "./BurgerCloseBtn.styled";

type BurgerCloseBtnProps = {
  onClose: () => void;
};

function BurgerCloseBtn({ onClose }: BurgerCloseBtnProps) {
  return (
    <BurgerCloseButton onClick={onClose}>
      <svg width={12} height={12}>
        <use href="/src/assets/icons/sprite.svg#icon-close"></use>
      </svg>
    </BurgerCloseButton>
  );
}

export default BurgerCloseBtn;
