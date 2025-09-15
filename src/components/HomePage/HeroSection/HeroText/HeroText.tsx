import { Trans, useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import {
  container,
  textUp,
} from "../../../../lib/animations/home/animation.hero";
import { Wrapper, HeroTitle, TitleAccent, SubTitle } from "./HeroText.styled";
import ConsultBtn from "../../../Buttons/ConsultBtn/ConsultBtn";

const HeroText = () => {
  const { t } = useTranslation("home");
  const reduce = useReducedMotion();

  return (
    <Wrapper
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.5, once: true }}
      animate={reduce ? "show" : undefined}
    >
      <HeroTitle variants={textUp}>
        <Trans t={t} i18nKey="heroTitle" components={{ 1: <TitleAccent /> }} />
      </HeroTitle>

      <SubTitle variants={textUp}>{t("subtitle")}</SubTitle>

      <motion.div variants={textUp}>
        <ConsultBtn variant="primary" maxWidth="307px" />
      </motion.div>
    </Wrapper>
  );
};

export default HeroText;
