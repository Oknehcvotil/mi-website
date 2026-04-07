import { useTranslation } from "react-i18next";
import { Title, TitleCont, TitleText } from "./MissionMainTitle.styled";
import type { Variants } from "framer-motion";
import {
  missionTitleTextVariants,
  missionTitleVariants,
  missionTitleWrapVariants,
} from "../../../../lib/animations/home/animations.mission";

type MissionMainTitleProps = {
  useOwnViewportAnimation?: boolean;
  containerVariants?: Variants;
  titleVariants?: Variants;
  textVariants?: Variants;
};

const MissionMainTitle = ({
  useOwnViewportAnimation = true,
  containerVariants = missionTitleWrapVariants,
  titleVariants = missionTitleVariants,
  textVariants = missionTitleTextVariants,
}: MissionMainTitleProps) => {
  const { t, i18n } = useTranslation("home");
  const lang = i18n.language;

  return (
    <TitleCont
      lang={lang}
      variants={containerVariants}
      initial={useOwnViewportAnimation ? "hidden" : undefined}
      whileInView={useOwnViewportAnimation ? "show" : undefined}
      viewport={
        useOwnViewportAnimation ? { once: true, margin: "-50px" } : undefined
      }
    >
      <Title lang={lang} variants={titleVariants}>
        {t("missionTitle")}
      </Title>
      <TitleText lang={lang} variants={textVariants}>
        {t("missionTitleText")}
      </TitleText>
    </TitleCont>
  );
};

export default MissionMainTitle;
