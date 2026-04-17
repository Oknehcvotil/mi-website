import { useTranslation } from "react-i18next";
import type { TeamContactConfig } from "../../../lib/types/servicesPages.type";
import {
  buttonRevealVariants,
  fadeUpVariants,
  portraitRevealVariants,
  teamSectionVariants,
  titleRevealVariants,
} from "../../../lib/animations/services/animations.team";
import { motion } from "framer-motion";
import {
  NamesTitle,
  PositionText,
  PersonImgCont,
  TeamCont,
  TeamLeadCont,
} from "./TeamSection.styled";
import ConsultBtn from "../../Buttons/ConsultBtn/ConsultBtn";

type TeamSectionProps = {
  config: TeamContactConfig;
};

const getTabletTeamImagePath = (imagePath: string) =>
  imagePath.replace("/images/mob/team/", "/images/tab/team/");

const getLaptopTeamImagePath = (imagePath: string) =>
  imagePath.replace("/images/mob/team/", "/images/laptop/team/");

const getDesktopTeamImagePath = (imagePath: string) =>
  imagePath.replace("/images/mob/team/", "/images/desktop/team/");

const getImageSrc = (imagePath: string) => `${imagePath}.webp`;

const TeamSection = ({ config }: TeamSectionProps) => {
  const { t } = useTranslation(config.translationNs);

  const personTabletImg = getTabletTeamImagePath(config.image.personImg);
  const personLaptopImg = getLaptopTeamImagePath(config.image.personImg);
  const personDesktopImg = getDesktopTeamImagePath(config.image.personImg);

  return (
    <section>
      {/* <BackgroundWrap>
        <BackgroundText>team team team team team team</BackgroundText>
      </BackgroundWrap> */}
      <TeamCont
        className={config.className}
        variants={teamSectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <TeamLeadCont className={`${config.className}-lead`}>
          <motion.p variants={fadeUpVariants}>
            {t("teamContact.overline")}
          </motion.p>

          <NamesTitle variants={titleRevealVariants}>
            {t("teamContact.title")}
          </NamesTitle>

          <PositionText variants={fadeUpVariants}>
            {t("teamContact.subtitle")}
          </PositionText>

          <motion.div variants={buttonRevealVariants}>
            <ConsultBtn
              variant="primary"
              maxWidth="307px"
              className="services-team-section--consult-btn"
            />
          </motion.div>
        </TeamLeadCont>

        <PersonImgCont className={config.image.personClassName}>
          <picture>
            <source
              srcSet={`${personDesktopImg}@3x.webp`}
              media="(min-width: 1920px) and (min-resolution: 3dppx)"
            />
            <source
              srcSet={`${personDesktopImg}@2x.webp`}
              media="(min-width: 1920px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={getImageSrc(personDesktopImg)}
              media="(min-width: 1920px)"
            />
            <source
              srcSet={`${personLaptopImg}@3x.webp`}
              media="(min-width: 1024px) and (min-resolution: 3dppx)"
            />
            <source
              srcSet={`${personLaptopImg}@2x.webp`}
              media="(min-width: 1024px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={getImageSrc(personLaptopImg)}
              media="(min-width: 1024px)"
            />
            <source
              srcSet={`${personTabletImg}@3x.webp`}
              media="(min-width: 768px) and (min-resolution: 3dppx)"
            />
            <source
              srcSet={`${personTabletImg}@2x.webp`}
              media="(min-width: 768px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={getImageSrc(personTabletImg)}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${config.image.personImg}@3x.webp`}
              media="(min-resolution: 3dppx)"
            />
            <source
              srcSet={`${config.image.personImg}@2x.webp`}
              media="(min-resolution: 2dppx)"
            />
            <motion.img
              variants={portraitRevealVariants}
              src={getImageSrc(config.image.personImg)}
              alt={config.image.personAlt}
              className={config.image.personClassName}
            />
          </picture>
        </PersonImgCont>
      </TeamCont>
    </section>
  );
};

export default TeamSection;
