import Container from "../../Container/Container";
import { useTranslation } from "react-i18next";
import { Title, TitleCont, TitleText, Wrap } from "./MissionSection.styled";

const MissionSection = () => {
  const { t, i18n } = useTranslation("home");
  const lang = i18n.language;
  return (
    <Wrap>
      <Container>
        <TitleCont lang={lang}>
          <Title lang={lang}>{t("missionTitle")}</Title>
          <TitleText>{t("missionTitleText")}</TitleText>
              </TitleCont>
              
      </Container>
    </Wrap>
  );
};

export default MissionSection;
