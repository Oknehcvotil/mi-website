import Container from "../../Container/Container";
import { SectionCont, StatsList, Wrap } from "./MissionSection.styled";
import MissionMainTitle from "./MissionMainTitle/MissionMainTitle";
// import { useTranslation } from "react-i18next";
// import ValuesGrid from "./ValuesGrid/ValuesGrid";
import { statsCards } from "../../../lib/data/home.page";
import { container } from "../../../lib/animations/home/animations.stats";
import { StatsItemCard } from "../StatsSection/StatsItemCard/StatsItemCard";

const MissionSection = () => {
  // const { t } = useTranslation("home");

  return (
    <Wrap>
      <Container style={{ marginBottom: 16 }}>
        <MissionMainTitle />
      </Container>
      <SectionCont>
        <StatsList
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {statsCards.map((c, idx) => (
            <StatsItemCard key={idx} value={c.value} labelKey={c.label} />
          ))}
        </StatsList>
      </SectionCont>
    </Wrap>
  );
};

export default MissionSection;
