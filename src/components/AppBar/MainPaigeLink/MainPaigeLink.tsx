import { useTranslation } from "react-i18next";
import { MainLink } from "./MainPaigeLink.styled";
import { useMatch } from "react-router-dom";

type MainPageLinkProps = {
  onCloseBurger?: () => void;
};

const MainPageLink = ({ onCloseBurger }: MainPageLinkProps) => {
  const { t } = useTranslation("common", { keyPrefix: "links" });
  const match = useMatch("/:lang/*");
  const currentLang = match?.params.lang ?? "en";

  return (
    <MainLink to={`/${currentLang}`} end onClick={() => onCloseBurger?.()}>
      {t("aboutUs")}
    </MainLink>
  );
};

export default MainPageLink;
