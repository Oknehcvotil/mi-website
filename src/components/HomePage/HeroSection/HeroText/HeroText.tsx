import { Trans, useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { textUp } from "../../../../lib/animations/home/animation.hero";
import { HeroTitle, TitleAccent, SubTitle } from "./HeroText.styled";
import ConsultBtn from "../../../Buttons/ConsultBtn/ConsultBtn";

const HeroText = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <HeroTitle variants={textUp}>
        <Trans t={t} i18nKey="heroTitle" components={{ 1: <TitleAccent /> }} />
      </HeroTitle>

      <SubTitle variants={textUp}>{t("subtitle")}</SubTitle>

      <motion.div variants={textUp}>
        <ConsultBtn variant="primary" maxWidth="307px" />
      </motion.div>
    </>
  );
};

export default HeroText;
