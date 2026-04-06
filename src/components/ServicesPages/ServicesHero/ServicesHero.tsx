import { useTranslation } from "react-i18next";
import Container from "../../Container/Container";
import type { ServicesHeroProps } from "../../../lib/types/servicesHero.type";
import HeroNav from "./HeroNav/HeroNav";
import {
  HeroImgCont,
  HeroSectionWrap,
  HeroSubtitle,
  HeroWrap,
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
import {
  replaceImageViewport,
  withDensitySet,
} from "../../../lib/helpers/helpers";

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
  const imageExt = image.ext ?? "webp";
  const laptopBasePath = replaceImageViewport(image.basePath, "laptop");
  const desktopBasePath = replaceImageViewport(image.basePath, "desktop");

  return (
    <HeroSectionWrap id={id}>
      <Container
        variants={reduce ? undefined : colVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.45 }}
        className={"hero-services--cont"}
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

        <HeroWrap>
          <LeadCont variants={reduce ? undefined : fadeUp}>
            <h2>{t(sectionTitleKey)}</h2>
            {leadKey && <p>{t(leadKey)}</p>}
            <ConsultBtn variant="primary" className={`hero-services--btn`} />
          </LeadCont>

          <HeroImgCont variants={reduce ? undefined : imgVariants}>
            <picture>
              <source
                media="(min-width: 1920px)"
                srcSet={withDensitySet(desktopBasePath, imageExt)}
              />
              <source
                media="(min-width: 1024px)"
                srcSet={withDensitySet(laptopBasePath, imageExt)}
              />
              <img
                src={`${image.basePath}.${imageExt}`}
                srcSet={withDensitySet(image.basePath, imageExt)}
                alt={t(image.altKey)}
                loading="eager"
                decoding="async"
              />
            </picture>
          </HeroImgCont>
        </HeroWrap>
      </Container>
    </HeroSectionWrap>
  );
};

export default ServicesHero;
