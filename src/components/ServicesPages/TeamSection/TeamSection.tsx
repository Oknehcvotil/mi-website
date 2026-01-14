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

const TeamSection = ({ config }: TeamSectionProps) => {
  const { t } = useTranslation(config.translationNs);

  return (
    <section>
      {/* <BackgroundWrap>
        <BackgroundText>team team team team team team</BackgroundText>
      </BackgroundWrap> */}
      <TeamCont className={config.className}>
        <LeftImgCont className={config.images.leftClassName}>
          <picture>
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
              src={config.images.leftImg}
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

          <ConsultBtn variant="primary" maxWidth="307px" />
        </TeamLeadCont>

        <RightImgCont className={config.images.rightClassName}>
          <picture>
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
              src={`${config.images.rightImg}.webp`}
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
