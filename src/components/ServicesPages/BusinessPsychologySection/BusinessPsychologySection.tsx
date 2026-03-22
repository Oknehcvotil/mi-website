import { useTranslation } from "react-i18next";
import Container from "../../Container/Container";
import {
  PsyhologyImgCont,
  PsyhologyLeadCont,
  PsyhologyWrap,
} from "./BusinessPsychologySection.styled";
import { motion } from "framer-motion";
import {
  fadeUp,
  imgAppear,
} from "../../../lib/animations/services/animations.psychology";

const BusinessPsychologySection = () => {
  const { t } = useTranslation("servicesForClients");

  return (
    <PsyhologyWrap
      id="psychology"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Container>
        <PsyhologyLeadCont>
          <motion.h2 variants={fadeUp}>{t("psyhology.title")}</motion.h2>
          <motion.p variants={fadeUp}>{t("psyhology.lead")}</motion.p>
        </PsyhologyLeadCont>
        <PsyhologyImgCont>
          <source
            srcSet="/images/mob/services-pages/users.webp@3x.webp"
            media="(min-resolution: 3dppx)"
          />
          <source
            srcSet="/images/mob/services-pages/users.webp@2x.webp"
            media="(min-resolution: 2dppx)"
          />
          <motion.img
            variants={imgAppear}
            src="/images/mob/services-pages/users.webp"
            alt={t("psyhology.alt")}
            loading="lazy"
          />
        </PsyhologyImgCont>
      </Container>
    </PsyhologyWrap>
  );
};

export default BusinessPsychologySection;
