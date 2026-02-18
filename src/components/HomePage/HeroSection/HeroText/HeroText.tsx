import { Trans, useTranslation } from "react-i18next";
import { useReducedMotion } from "framer-motion";
import {
  container,
  textUp,
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
  const reduce = useReducedMotion();
  const lang = i18n.language;
  const isDesk = useMediaQuery("(min-width: 1920px)");

  return (
    <Wrapper
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.5, once: true }}
      animate={reduce ? "show" : undefined}
    >
      <HeroTitle variants={textUp} lang={lang}>
        <Trans
          t={t}
          i18nKey="heroTitle"
          components={{ 1: <TitleAccent />, 2: <UkraineAccent /> }}
        />
      </HeroTitle>

      <SubTitle variants={textUp}>{t("subtitle")}</SubTitle>

      <BtnWrapper variants={textUp}>
        <ConsultBtn variant="primary" maxWidth={isDesk ? "610px" : "307px"} />
      </BtnWrapper>
    </Wrapper>
  );
};

export default HeroText;
