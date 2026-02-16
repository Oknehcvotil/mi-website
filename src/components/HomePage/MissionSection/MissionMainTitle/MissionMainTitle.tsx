import { useTranslation } from "react-i18next";
import { Title, TitleCont, TitleText } from "./MissionMainTitle.styled";
import { useRef } from "react";
import { useInView } from "framer-motion";

const easeIn: [number, number, number, number] = [0.22, 1, 0.36, 1];

const MissionMainTitle = () => {
  const { t, i18n } = useTranslation("home");
  const lang = i18n.language;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <TitleCont
      lang={lang}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: easeIn }}
    >
      <Title lang={lang}>{t("missionTitle")}</Title>
      <TitleText lang={lang}>{t("missionTitleText")}</TitleText>
    </TitleCont>
  );
};

export default MissionMainTitle;
