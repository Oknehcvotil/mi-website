import { useTranslation } from "react-i18next";
import type { TeamContactConfig } from "../../../lib/types/servicesPages.type";
import {
  fadeUpVariants,
  leftInVariants,
  rightInVariants,
} from "../../../lib/animations/services/animations.team";
import { motion } from "framer-motion";
import {
  LeftImgCont,
  NamesTitle,
  PositionText,
  RightImgCont,
  TeamCont,
  TeamLeadCont,
} from "./TeamSection.styled";
import ConsultBtn from "../../Buttons/ConsultBtn/ConsultBtn";

type TeamSectionProps = {
  config: TeamContactConfig;
};

const getTabletLeftTeamImagePath = (imagePath: string) =>
  imagePath
    .replace("/images/mob/team/", "/images/tab/team/")
    .replace(/([^/]+)$/, "$1-services-page");

const getTabletTeamImagePath = (imagePath: string) =>
  imagePath.replace("/images/mob/team/", "/images/tab/team/");

const getLaptopLeftTeamImagePath = (imagePath: string) =>
  imagePath
    .replace("/images/mob/team/", "/images/laptop/team/")
    .replace(/([^/]+)$/, "$1-services-page");

const getLaptopTeamImagePath = (imagePath: string) =>
  imagePath.replace("/images/mob/team/", "/images/laptop/team/");

const getDesktopTeamImagePath = (imagePath: string) =>
  imagePath.replace("/images/mob/team/", "/images/desktop/team/");

const getImageSrc = (imagePath: string) => `${imagePath}.webp`;

const TeamSection = ({ config }: TeamSectionProps) => {
  const { t } = useTranslation(config.translationNs);
  const leftTabletImg = getTabletLeftTeamImagePath(config.images.leftImg);
  const rightTabletImg = getTabletTeamImagePath(config.images.rightImg);
  const leftLaptopImg = getLaptopLeftTeamImagePath(config.images.leftImg);
  const rightLaptopImg = getLaptopTeamImagePath(config.images.rightImg);
  const leftDesktopImg = getDesktopTeamImagePath(config.images.leftImg);
  const rightDesktopImg = getDesktopTeamImagePath(config.images.rightImg);

  return (
    <section>
      {/* <BackgroundWrap>
        <BackgroundText>team team team team team team</BackgroundText>
      </BackgroundWrap> */}
      <TeamCont className={config.className}>
        <LeftImgCont className={config.images.leftClassName}>
          <picture>
            <source
              srcSet={`${leftDesktopImg}@3x.webp`}
              media="(min-width: 1920px) and (min-resolution: 3dppx)"
            />
            <source
              srcSet={`${leftDesktopImg}@2x.webp`}
              media="(min-width: 1920px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={getImageSrc(leftDesktopImg)}
              media="(min-width: 1920px)"
            />
            <source
              srcSet={`${leftLaptopImg}@3x.webp`}
              media="(min-width: 1024px) and (min-resolution: 3dppx)"
            />
            <source
              srcSet={`${leftLaptopImg}@2x.webp`}
              media="(min-width: 1024px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={getImageSrc(leftLaptopImg)}
              media="(min-width: 1024px)"
            />
            <source
              srcSet={`${leftTabletImg}@3x.webp`}
              media="(min-width: 768px) and (min-resolution: 3dppx)"
            />
            <source
              srcSet={`${leftTabletImg}@2x.webp`}
              media="(min-width: 768px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={getImageSrc(leftTabletImg)}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${config.images.leftImg}@3x.webp`}
              media="(min-resolution: 3dppx)"
            />
            <source
              srcSet={`${config.images.leftImg}@2x.webp`}
              media="(min-resolution: 2dppx)"
            />
            <motion.img
              variants={leftInVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={getImageSrc(config.images.leftImg)}
              alt={config.images.leftImgAlt ?? "Left portrait"}
              className={config.images.leftClassName}
            />
          </picture>
        </LeftImgCont>

        <TeamLeadCont>
          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("teamContact.overline")}
          </motion.p>

          <NamesTitle
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("teamContact.title")}
          </NamesTitle>

          <PositionText
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("teamContact.subtitle")}
          </PositionText>

          <ConsultBtn
            variant="primary"
            maxWidth="307px"
            className="services-team-section--consult-btn"
          />
        </TeamLeadCont>

        <RightImgCont className={config.images.rightClassName}>
          <picture>
            <source
              srcSet={`${rightDesktopImg}@3x.webp`}
              media="(min-width: 1920px) and (min-resolution: 3dppx)"
            />
            <source
              srcSet={`${rightDesktopImg}@2x.webp`}
              media="(min-width: 1920px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={getImageSrc(rightDesktopImg)}
              media="(min-width: 1920px)"
            />
            <source
              srcSet={`${rightLaptopImg}@3x.webp`}
              media="(min-width: 1024px) and (min-resolution: 3dppx)"
            />
            <source
              srcSet={`${rightLaptopImg}@2x.webp`}
              media="(min-width: 1024px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={getImageSrc(rightLaptopImg)}
              media="(min-width: 1024px)"
            />
            <source
              srcSet={`${rightTabletImg}@3x.webp`}
              media="(min-width: 768px) and (min-resolution: 3dppx)"
            />
            <source
              srcSet={`${rightTabletImg}@2x.webp`}
              media="(min-width: 768px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={getImageSrc(rightTabletImg)}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${config.images.rightImg}@3x.webp`}
              media="(min-resolution: 3dppx)"
            />
            <source
              srcSet={`${config.images.rightImg}@2x.webp`}
              media="(min-resolution: 2dppx)"
            />
            <motion.img
              variants={rightInVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              src={getImageSrc(config.images.rightImg)}
              alt={config.images.rightImgAlt ?? "Right portrait"}
              className={config.images.rightClassName}
            />
          </picture>
        </RightImgCont>
      </TeamCont>
    </section>
  );
};

export default TeamSection;
