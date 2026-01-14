import { useTranslation } from "react-i18next";
import { ServButton } from "./ServicesBtn.styled";

const ServicesBtn = () => {
  const { t } = useTranslation("home");
  return <ServButton href="#services">{t("sectionLinks.services")}</ServButton>;
};

export default ServicesBtn;
