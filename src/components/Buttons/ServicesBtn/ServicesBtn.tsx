import { useTranslation } from "react-i18next";
import { ServButton } from "./ServicesBtn.styled";
import { useLocation, useMatch } from "react-router-dom";

const ServicesBtn = () => {
  const { t } = useTranslation("home");
  const { pathname } = useLocation();
  const match = useMatch("/:lang/*");
  const currentLang = match?.params.lang ?? "en";
  const isServicesPage = pathname.startsWith(`/${currentLang}/services`);

  return (
    <ServButton to={`/${currentLang}/services`} $isActive={isServicesPage}>
      {t("sectionLinks.services")}
    </ServButton>
  );
};

export default ServicesBtn;
