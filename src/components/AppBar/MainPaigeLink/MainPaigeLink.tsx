import { useTranslation } from "react-i18next";
import { MainLink } from "./MainPaigeLink.styled";
import { useCurrentLang } from "../../../lib/hooks/useCurrentLang";

type MainPageLinkProps = {
  onCloseBurger?: () => void;
};

const MainPageLink = ({ onCloseBurger }: MainPageLinkProps) => {
  const { t } = useTranslation("common", { keyPrefix: "links" });
  const currentLang = useCurrentLang();

  return (
    <MainLink to={`/${currentLang}`} end onClick={() => onCloseBurger?.()}>
      {t("aboutUs")}
    </MainLink>
  );
};

export default MainPageLink;
