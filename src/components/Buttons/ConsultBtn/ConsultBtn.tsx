import { useTranslation } from "react-i18next";
import { ConsultBtnStyled } from "./ConsultBtn.styled";
import { useActiveSectionContext } from "../../../lib/hooks/useActiveSectionContext";

type ConsultBtnProps = {
  variant?: "primary" | "secondary" | "header";
  onClick?: () => void;
  maxWidth?: string;
};

function ConsultBtn({
  variant = "primary",
  onClick,
  maxWidth,
}: ConsultBtnProps) {
  const { t } = useTranslation();
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <ConsultBtnStyled
      href="#contact"
      variant={variant}
      onClick={() => {
        setActiveSection("Contact");
        setTimeOfLastClick(Date.now());
        if (onClick) onClick();
      }}
      maxWidth={maxWidth}
    >
      <span>{t("cta")}</span>
    </ConsultBtnStyled>
  );
}

export default ConsultBtn;
