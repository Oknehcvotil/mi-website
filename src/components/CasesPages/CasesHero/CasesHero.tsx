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
import {
  replaceImageViewport,
  withDensitySet,
} from "../../../lib/helpers/helpers";

export type CasesHeroProps = {
  caseConfig: CasesHeroConfig;
};

const CasesHero = ({ caseConfig }: CasesHeroProps) => {
  const { translationNs, image, nav, id, className } = caseConfig;
  const { t } = useTranslation(translationNs);
  const reduce = useReducedMotion();
  const imageExt = image.ext ?? "webp";
  const imgAlt = image.altKey ? t(image.altKey) : t("subTitle");
  const laptopBasePath = replaceImageViewport(image.basePath, "laptop");
  const desktopBasePath = replaceImageViewport(image.basePath, "desktop");

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
                srcSet={withDensitySet(desktopBasePath, imageExt)}
              />
              <source
                media="(min-width: 768px)"
                srcSet={withDensitySet(laptopBasePath, imageExt)}
              />
              <motion.img
                src={`${image.basePath}.${imageExt}`}
                srcSet={withDensitySet(image.basePath, imageExt)}
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
