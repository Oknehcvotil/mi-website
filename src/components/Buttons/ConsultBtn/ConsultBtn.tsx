import { useTranslation } from "react-i18next";
import { ConsultBtnStyled } from "./ConsultBtn.styled";

type ConsultBtnProps = {
  variant?: "primary" | "secondary" | "header";
  onClick?: () => void;
  maxWidth?: string; // добавляем возможность задать max-width
};

function ConsultBtn({
  variant = "primary",
  onClick,
  maxWidth,
}: ConsultBtnProps) {
  const { t } = useTranslation();

  return (
    <ConsultBtnStyled
      href="#"
      variant={variant}
      onClick={onClick}
      maxWidth={maxWidth}
    >
      <span>{t("cta")}</span>
    </ConsultBtnStyled>
  );
}

export default ConsultBtn;
