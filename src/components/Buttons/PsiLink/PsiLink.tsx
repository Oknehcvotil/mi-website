import { PsiCustomLink } from "./PsiLink.styled";

type PsiLinkProps = {
  onCloseBurger?: () => void;
  children: string;
  className?: string;
};

const PsiLink = ({ onCloseBurger, className, children }: PsiLinkProps) => {
  return (
    <PsiCustomLink
      href="https://psymi.com.ua/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onCloseBurger}
      className={className}
    >
      {children}
    </PsiCustomLink>
  );
};

export default PsiLink;
