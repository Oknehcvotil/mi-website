import styled from "@emotion/styled";

export const BurgerCloseButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #a066ff;
  border-radius: 8px;
  position: absolute;
  top: 23px;
  right: 23px;

  &.close-modal {
    width: 26px;
    height: 26px;
    top: 10px;
    right: 10px;
  }
  svg {
    transition: transform 0.3s;
  }

  &:hover svg,
  &:focus svg {
    transform: rotate(180deg);
  }

  &:active {
    scale: 0.98;
  }

  @media (min-width: 768px) {
    &.close-modal {
      width: 30px;
      height: 30px;
      top: 15px;
      right: 15px;

      svg {
        width: 11px;
        height: 11px;
      }
    }
  }
`;
