import { useTranslation } from "react-i18next";
import { ConsultBtnStyled } from "./ConsultBtn.styled";

type ConsultBtnProps = {
  variant?: "primary" | "secondary" | "header";
  onClick?: () => void; // необязательный коллбэк (например, закрыть модалку)
};

function ConsultBtn({ variant = "primary", onClick }: ConsultBtnProps) {
  const { t } = useTranslation();

  return (
    <ConsultBtnStyled href="#" variant={variant} onClick={onClick}>
      {t("cta")}
    </ConsultBtnStyled>
  );
}

export default ConsultBtn;
