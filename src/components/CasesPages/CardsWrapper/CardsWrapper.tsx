
import type { ReactNode } from "react";
import { StyledCardsWrapper } from "./CardsWrapper.styled";

type CardsWrapperProps = {
  children: ReactNode;
  isSingle?: boolean;
};

const CardsWrapper = ({ children, isSingle = false }: CardsWrapperProps) => {
  return <StyledCardsWrapper $isSingle={isSingle}>{children}</StyledCardsWrapper>;
};

export default CardsWrapper;
