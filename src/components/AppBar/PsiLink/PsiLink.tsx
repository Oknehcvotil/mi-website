import { PsiCustomLink } from "./PsiLink.styled";

type PsiLinkProps = {
  onCloseBurger: () => void;
};

const PsiLink = ({ onCloseBurger }: PsiLinkProps) => {
  return (
    <PsiCustomLink
      href="https://psymi.com.ua/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onCloseBurger}
    >
      PSY MI
    </PsiCustomLink>
  );
};

export default PsiLink;
