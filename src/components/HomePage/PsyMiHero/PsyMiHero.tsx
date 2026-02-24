import PsiLink from "../../Buttons/PsiLink/PsiLink";
import { useTranslation, Trans } from "react-i18next";
import {
  PsyMiHeroSection,
  PsyMiContainer,
  PsyMititle,
  PsyMiLogoCont,
  PsyMiLead,
  PsyMiImageCont,
  PsiTextCont,
} from "./PsyMiHero.styled";
import PsyMiImg from "./PsyMiImg/PsyMiImg";
import {
  fadeUp,
  imageWrap,
  laptopVar,
  robotVar,
  textParent,
} from "../../../lib/animations/home/animations.psyMi";

const PsyMiHero = () => {
  const { t } = useTranslation("home");

  return (
    <PsyMiHeroSection>
      <PsyMititle variants={fadeUp}>
        <Trans
          i18nKey="psyMi.title"
          t={t}
          components={{ 1: <span className="color-mask" />, 2: <span /> }}
        />
      </PsyMititle>
      <PsyMiContainer>
        <PsiTextCont
          variants={textParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <PsyMiLogoCont>
            <picture>
              {/* Desktop 1920+ */}
              <source
                media="(min-width: 1920px)"
                srcSet="/images/psy-mi/logo-desk.webp 1x, /images/psy-mi/logo-desk@2x.webp 2x, /images/psy-mi/logo-desk@3x.webp 3x"
              />

              <source
                media="(min-width: 768px)"
                srcSet="/images/psy-mi/logo-tab.webp 1x, /images/psy-mi/logo-tab@2x.webp 2x, /images/psy-mi/logo-tab@3x.webp 3x"
              />

              <img
                src="/images/psy-mi/logo.webp"
                srcSet="/images/psy-mi/logo.webp 1x, /images/psy-mi/logo@2x.webp 2x, /images/psy-mi/logo@3x.webp 3x"
                alt="PSY MI"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <strong>
              PSY <span>MI</span>
            </strong>
          </PsyMiLogoCont>

          <PsyMiLead variants={fadeUp}>
            <Trans i18nKey="psyMi.lead" t={t} components={{ 1: <span /> }} />
          </PsyMiLead>
          <PsiLink className="psiMi-seciton--btn">{t("psyMi.cta")}</PsiLink>
        </PsiTextCont>
        <PsyMiImageCont
          variants={imageWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <PsyMiImg
            className="laptop-img"
            base="/images/psy-mi/laptop"
            alt={"PSY MI on laptop"}
            variants={laptopVar}
          />
          <PsyMiImg
            className="robot-img"
            base="/images/psy-mi/robot"
            alt={"Robot"}
            variants={robotVar}
          />
        </PsyMiImageCont>
      </PsyMiContainer>
    </PsyMiHeroSection>
  );
};

export default PsyMiHero;
