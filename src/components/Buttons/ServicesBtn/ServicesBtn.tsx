import { useTranslation } from "react-i18next";
import { ServButton } from "./ServicesBtn.styled";
import { useMatch} from "react-router-dom";

const ServicesBtn = () => {
  const { t } = useTranslation("home");
  const match = useMatch("/:lang/*");
  const currentLang = match?.params.lang ?? "en";

  return (
    <ServButton to={`/${currentLang}/services/for-clients`}>
      {t("sectionLinks.services")}
    </ServButton>
  );
};

export default ServicesBtn;
