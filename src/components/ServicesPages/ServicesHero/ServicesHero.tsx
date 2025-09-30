import { useTranslation } from "react-i18next";
import Container from "../../Container/Container";
import type { ServicesHeroProps } from "../../../lib/types/servicesHero.type";
import HeroNav from "./HeroNav/HeroNav";
import {
  HeroImgCont,
  HeroSectionWrap,
  HeroSubtitle,
  LeadCont,
  MainHeroTitle,
} from "./ServicesHero.styled";
import { useReducedMotion } from "framer-motion";
import {
  colVariants,
  fadeUp,
  imgVariants,
} from "../../../lib/animations/services/animations.hero";
import ConsultBtn from "../../Buttons/ConsultBtn/ConsultBtn";

const ServicesHero = ({ content }: ServicesHeroProps) => {
  const {
    id,
    translationNs,
    topTitleKey = "hero.title",
    subtitleKey,
    sectionTitleKey,
    leadKey,
    image,
    nav,
    className,
  } = content;

  const { t } = useTranslation(translationNs);
  const reduce = useReducedMotion();

  return (
    <HeroSectionWrap id={id}>
      <Container
        variants={reduce ? undefined : colVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.45 }}
      >
        <MainHeroTitle
          className={`hero-${className}--title`}
          variants={reduce ? undefined : fadeUp}
        >
          {t(topTitleKey)}
        </MainHeroTitle>

        {subtitleKey && (
          <HeroSubtitle
            variants={reduce ? undefined : fadeUp}
            className={`hero-${className}--subtitle`}
          >
            {t(subtitleKey)}
          </HeroSubtitle>
        )}

        {nav && <HeroNav translationNs={translationNs} nav={nav} />}

        <LeadCont variants={reduce ? undefined : fadeUp}>
          <h2>{t(sectionTitleKey)}</h2>
          {leadKey && <p>{t(leadKey)}</p>}
          <ConsultBtn variant="primary" maxWidth="307px" />
        </LeadCont>

        <HeroImgCont
          variants={reduce ? undefined : imgVariants}
          className={`hero-${className}-img--cont`}
        >
          <picture>
            <source
              srcSet={`${image.basePath}@3x.${image.ext ?? "webp"}`}
              media="(min-resolution: 3dppx)"
            />
            <source
              srcSet={`${image.basePath}@2x.${image.ext ?? "webp"}`}
              media="(min-resolution: 2dppx)"
            />
            <img
              src={`${image.basePath}.${image.ext ?? "webp"}`}
              alt={t(image.altKey)}
              loading="eager"
              decoding="async"
            />
          </picture>
        </HeroImgCont>
      </Container>
    </HeroSectionWrap>
  );
};

export default ServicesHero;
