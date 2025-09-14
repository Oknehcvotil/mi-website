import Container from "../../Container/Container";
import { useTranslation } from "react-i18next";
import { Title, TitleCont, TitleText, Wrap } from "./MissionSection.styled";

const MissionSection = () => {
  const { t } = useTranslation("home");

  return (
    <Wrap>
      <Container>
        <TitleCont>
          <Title>{t("missionTitle")}</Title>
          <TitleText>{t("missionTitleText")}</TitleText>
        </TitleCont>
      </Container>
    </Wrap>
  );
};

export default MissionSection;
