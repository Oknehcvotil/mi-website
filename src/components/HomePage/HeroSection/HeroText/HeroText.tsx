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
  SubTitle,
  BtnWrapper,
} from "./HeroText.styled";
import ConsultBtn from "../../../Buttons/ConsultBtn/ConsultBtn";

const HeroText = () => {
  const { t, i18n } = useTranslation("home");
  const reduce = useReducedMotion();
  const lang = i18n.language;

  return (
    <Wrapper
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.5, once: true }}
      animate={reduce ? "show" : undefined}
    >
      <HeroTitle variants={textUp} lang={lang}>
        <Trans t={t} i18nKey="heroTitle" components={{ 1: <TitleAccent /> }} />
      </HeroTitle>

      <SubTitle variants={textUp}>{t("subtitle")}</SubTitle>

      <BtnWrapper variants={textUp}>
        <ConsultBtn variant="primary" maxWidth="307px" />
      </BtnWrapper>
    </Wrapper>
  );
};

export default HeroText;
