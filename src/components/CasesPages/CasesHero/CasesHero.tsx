import { useTranslation } from "react-i18next";
import type { CasesHeroConfig } from "../../../lib/types/cases.hero";
import CasesNav from "./CasesNav/CasesNav";
import {
  fadeUp,
  imageV,
  sectionV,
  titleV,
} from "../../../lib/animations/cases/animations.hero";
import {
  CasesHeroImgCont,
  CasesHeroLead,
  CasesHeroSubtitle,
  CasesHeroTitle,
  HeroSectionWrap,
} from "./CasesHero.styled";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../../Container/Container";
import ConsultBtn from "../../Buttons/ConsultBtn/ConsultBtn";

export type CasesHeroProps = {
  caseConfig: CasesHeroConfig;
};

const CasesHero = ({ caseConfig }: CasesHeroProps) => {
  const { translationNs, image, nav, id, className } = caseConfig;
  const { t } = useTranslation(translationNs);
  const imgAlt = image.altKey ? t(image.altKey) : t(`subTitle`);
  const reduce = useReducedMotion();

  return (
    <HeroSectionWrap
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionV}
    >
      <Container>
        <CasesHeroTitle
          variants={titleV}
          className={`cases-hero-${className}--title`}
        >
          {t("title")}
        </CasesHeroTitle>
        {nav && nav.length > 0 && (
          <CasesNav nav={nav} ns={translationNs} className={className} />
        )}
        <motion.div variants={reduce ? undefined : fadeUp}>
          <CasesHeroSubtitle>{t("subTitle")}</CasesHeroSubtitle>
          <CasesHeroLead className={`cases-hero-${className}--lead`}>
            {t("lead")}
          </CasesHeroLead>
          <ConsultBtn variant="primary" maxWidth="307px" />
        </motion.div>

        <CasesHeroImgCont className={`cases-hero-${className}-img--cont`}>
          <picture>
            <source
              srcSet={`${image.src}@3x.${image.ext ?? "webp"}`}
              media="(min-resolution: 3dppx)"
            />
            <source
              srcSet={`${image.src}@2x.${image.ext ?? "webp"}`}
              media="(min-resolution: 2dppx)"
            />
            <motion.img
              src={`${image.src}.${image.ext ?? "webp"}`}
              alt={t(imgAlt)}
              loading="eager"
              decoding="async"
              variants={imageV}
            />
          </picture>
        </CasesHeroImgCont>
      </Container>
    </HeroSectionWrap>
  );
};

export default CasesHero;
