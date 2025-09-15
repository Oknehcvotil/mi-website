import Container from "../../Container/Container";
import { Wrap, SubTitle } from "./MissionSection.styled";
import MissionMainTitle from "./MissionMainTitle/MissionMainTitle";
import { useTranslation } from "react-i18next";
import ValuesGrid from "./ValuesGrid/ValuesGrid";

const MissionSection = () => {
  const { t } = useTranslation("home");

  return (
    <Wrap>
      <Container>
        <MissionMainTitle />
        <div>
          <SubTitle>{t("values.title")}</SubTitle>
          <ValuesGrid />
        </div>
      </Container>
    </Wrap>
  );
};

export default MissionSection;
