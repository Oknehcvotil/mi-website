import { Trans, useTranslation } from "react-i18next";
import { useReducedMotion } from "framer-motion";
import {
  createHeroButtonVariants,
  createHeroTextGroupVariants,
  createHeroTextVariants,
  createHeroTitleVariants,
} from "../../../../lib/animations/home/animations.hero";
import {
  Wrapper,
  HeroTitle,
  TitleAccent,
  UkraineAccent,
  SubTitle,
  BtnWrapper,
} from "./HeroText.styled";
import ConsultBtn from "../../../Buttons/ConsultBtn/ConsultBtn";
import { useMediaQuery } from "../../../../lib/hooks/useMediaQuery";

const HeroText = () => {
  const { t, i18n } = useTranslation("home");
  const reduce = !!useReducedMotion();
  const lang = i18n.language;
  const isDesk = useMediaQuery("(min-width: 1920px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  const groupVariants = createHeroTextGroupVariants(isMobile, reduce);
  const titleVariants = createHeroTitleVariants(reduce);
  const textVariants = createHeroTextVariants(reduce);
  const buttonVariants = createHeroButtonVariants(reduce);

  return (
    <Wrapper variants={groupVariants}>
      <HeroTitle variants={titleVariants} lang={lang}>
        <Trans
          t={t}
          i18nKey="heroTitle"
          components={{ 1: <TitleAccent />, 2: <UkraineAccent /> }}
        />
      </HeroTitle>

      <SubTitle variants={textVariants}>{t("subtitle")}</SubTitle>

      <BtnWrapper variants={buttonVariants}>
        <ConsultBtn variant="primary" maxWidth={isDesk ? "610px" : "307px"} />
      </BtnWrapper>
    </Wrapper>
  );
};

export default HeroText;
