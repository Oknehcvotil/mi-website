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
      onClick={(e) => {
        setActiveSection("Contact");
        setTimeOfLastClick(Date.now());

        if (onClick) {
          e.preventDefault();
          onClick();

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (window.location.hash !== "#contact") {
                history.pushState(null, "", "#contact");
              }
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            });
          });
        }
      }}
      maxWidth={maxWidth}
    >
      <span>{t("cta")}</span>
    </ConsultBtnStyled>
  );
}

export default ConsultBtn;
