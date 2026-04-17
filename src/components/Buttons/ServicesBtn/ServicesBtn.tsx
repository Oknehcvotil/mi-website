import { useTranslation } from "react-i18next";
import { ServButton } from "./ServicesBtn.styled";
import { useLocation } from "react-router-dom";
import { useCurrentLang } from "../../../lib/hooks/useCurrentLang";

const ServicesBtn = () => {
  const { t } = useTranslation("home");
  const { pathname } = useLocation();
  const currentLang = useCurrentLang();
  const isServicesPage = pathname.startsWith(`/${currentLang}/services`);

  return (
    <ServButton to={`/${currentLang}/services`} $isActive={isServicesPage}>
      {t("sectionLinks.services")}
    </ServButton>
  );
};

export default ServicesBtn;
