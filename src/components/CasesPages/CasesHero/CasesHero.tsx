import { useTranslation } from "react-i18next";
import type { CasesHeroConfig } from "../../../lib/types/cases.hero.types";
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
  CasesHeroWrap,
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
  const reduce = useReducedMotion();
  const imgAlt = image.altKey ? t(image.altKey) : t("subTitle");

  return (
    <HeroSectionWrap
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionV}
    >
      <Container className={`cases-hero cases-hero-${className}`}>
        <CasesHeroTitle
          variants={titleV}
          className={`cases-hero-${className}--title`}
        >
          {t("title")}
        </CasesHeroTitle>
        {nav && nav.length > 0 && (
          <CasesNav nav={nav} ns={translationNs} className={className} />
        )}
        <CasesHeroWrap>
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
                media="(min-width: 1920px)"
                srcSet={`/images/desktop/services-pages/${image.basePath}.webp 1x, /images/desktop/services-pages/${image.basePath}@2x.webp 2x, /images/desktop/services-pages/${image.basePath}@3x.webp 3x`}
              />

              <source
                media="(min-width: 1024px)"
                srcSet={`/images/laptop/services-pages/${image.basePath}.webp 1x, /images/laptop/services-pages/${image.basePath}@2x.webp 2x, /images/laptop/services-pages/${image.basePath}@3x.webp 3x`}
              />

              <source
                media="(min-width: 768px)"
                srcSet={`/images/mob/services-pages/${image.basePath}.webp 1x, /images/mob/services-pages/${image.basePath}@2x.webp 2x, /images/mob/services-pages/${image.basePath}@3x.webp 3x`}
              />
              <motion.img
                src={`/images/mob/services-pages/${image.basePath}.webp`}
                srcSet={`/images/mob/services-pages/${image.basePath}.webp 1x, /images/mob/services-pages/${image.basePath}@2x.webp 2x, /images/mob/services-pages/${image.basePath}@3x.webp 3x`}
                alt={imgAlt}
                loading="eager"
                decoding="async"
                variants={imageV}
              />
            </picture>
          </CasesHeroImgCont>
        </CasesHeroWrap>
      </Container>
    </HeroSectionWrap>
  );
};

export default CasesHero;
