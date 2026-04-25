import { useTranslation } from "react-i18next";
import Container from "../../Container/Container";
import {
  PsyhologyImgCont,
  PsyhologyInner,
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
      <Container className="services-business-psy--section">
        <PsyhologyInner>
          <PsyhologyLeadCont>
            <motion.h2 variants={fadeUp}>{t("psyhology.title")}</motion.h2>
            <motion.p variants={fadeUp}>{t("psyhology.lead")}</motion.p>
          </PsyhologyLeadCont>
          <PsyhologyImgCont>
            <picture>
              <source
                media="(min-width: 1920px)"
                srcSet="/images/desktop/services-pages/business-psy.webp 1x, /images/desktop/services-pages/business-psy@2x.webp 2x, /images/desktop/services-pages/business-psy@3x.webp 3x"
              />

              <source
                media="(min-width: 1024px)"
                srcSet="/images/laptop/services-pages/business-psy.png 1x, /images/laptop/services-pages/business-psy@2x.png 2x, /images/laptop/services-pages/business-psy@3x.png 3x"
              />

              <motion.img
                variants={imgAppear}
                src="/images/mob/services-pages/business-psy.webp"
                srcSet="/images/mob/services-pages/business-psy.webp 1x, /images/mob/services-pages/business-psy@2x.webp 2x, /images/mob/services-pages/business-psy@3x.webp 3x"
                alt={t("psyhology.alt")}
                loading="lazy"
              />
            </picture>
          </PsyhologyImgCont>
        </PsyhologyInner>
      </Container>
    </PsyhologyWrap>
  );
};

export default BusinessPsychologySection;
