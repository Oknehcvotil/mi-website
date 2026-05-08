import { useTranslation } from "react-i18next";
import type { TeamContactConfig } from "../../../lib/types/servicesPages.type";
import {
  buttonRevealVariants,
  fadeUpVariants,
  portraitRevealVariants,
  teamSectionVariants,
  titleRevealVariants,
} from "../../../lib/animations/services/animations.team";
import {
  getImageSrc,
  getResponsiveSources,
} from "../../../lib/helpers/teamImages";
import { motion } from "framer-motion";
import {
  NamesTitle,
  PositionText,
  PersonImgCont,
  TeamCont,
  TeamLeadCont,
  StatsCont,
  TeamSectionWrapper,
  BackgroundWrap,
  BackgroundText,
} from "./TeamSection.styled";
import ConsultBtn from "../../Buttons/ConsultBtn/ConsultBtn";
import StatsBadge from "../../HomePage/OurTeamSection/StatsBadge/StatsBadge";

type TeamSectionProps = {
  config: TeamContactConfig;
};

const TeamSection = ({ config }: TeamSectionProps) => {
  const { className, image, translationNs, stats } = config;
  const { personAlt, personClassName, personImg } = image;
  const { t } = useTranslation(translationNs);
  const leadClassName = className ? `${className}-lead` : undefined;
  const responsiveSources = getResponsiveSources(personImg);

  return (
    <TeamSectionWrapper className={className}>
      <BackgroundWrap>
        <BackgroundText>
          team team team team team team team team team team team team team team
          team team team team team team team team team team team team team team
          team team team team team team team team team team team team team team
          team team team team team team team team team team team team team team
        </BackgroundText>
      </BackgroundWrap>
      <TeamCont
        className={className}
        variants={teamSectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <TeamLeadCont className={leadClassName}>
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

        <PersonImgCont className={personClassName}>
          <picture>
            {responsiveSources.map(({ media, srcSet }) => (
              <source
                key={`${media}-${srcSet}`}
                srcSet={srcSet}
                media={media}
              />
            ))}
            <motion.img
              variants={portraitRevealVariants}
              src={getImageSrc(personImg)}
              alt={personAlt}
              className={personClassName}
              loading="lazy"
              decoding="async"
            />
          </picture>
          <StatsCont className={`stats-cont-${className}`}>
            {stats?.map((s, i) => (
              <StatsBadge
                key={`stat-${i}`}
                value={s.value}
                label={t(s.labelKey)}
                className={`services-stat-${s.className}`}
              />
            ))}
          </StatsCont>
        </PersonImgCont>
      </TeamCont>
    </TeamSectionWrapper>
  );
};

export default TeamSection;
