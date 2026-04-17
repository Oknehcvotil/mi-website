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
} from "./TeamSection.styled";
import ConsultBtn from "../../Buttons/ConsultBtn/ConsultBtn";

type TeamSectionProps = {
  config: TeamContactConfig;
};

const TeamSection = ({ config }: TeamSectionProps) => {
  const { className, image, translationNs } = config;
  const { personAlt, personClassName, personImg } = image;
  const { t } = useTranslation(translationNs);
  const leadClassName = className ? `${className}-lead` : undefined;
  const responsiveSources = getResponsiveSources(personImg);

  return (
    <section>
      {/* <BackgroundWrap>
        <BackgroundText>team team team team team team</BackgroundText>
      </BackgroundWrap> */}
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
              <source key={`${media}-${srcSet}`} srcSet={srcSet} media={media} />
            ))}
            <motion.img
              variants={portraitRevealVariants}
              src={getImageSrc(personImg)}
              alt={personAlt}
              className={personClassName}
            />
          </picture>
        </PersonImgCont>
      </TeamCont>
    </section>
  );
};

export default TeamSection;
