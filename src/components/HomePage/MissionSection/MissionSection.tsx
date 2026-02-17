import Container from "../../Container/Container";
import {
  SectionCont,
  StatsList,
  Wrap,
  PicFrame,
} from "./MissionSection.styled";
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
        <PicFrame>
          <picture>
            <source
              type="image/webp"
              srcSet="/images/tab/mission-team.webp 1x, /images/tab/mission-team@2x.webp 2x, /images/tab/mission-team@3x.webp 3x    "
            />
            <source
              type="image/jpeg"
              srcSet="/images/tab/mission-team.jpg 1x, /images/tab/mission-team@2x.jpg 2x, /images/tab/mission-team@3x.jpg 3x"
            />
            <img
              src="/images/tab/mission-team.jpg"
              alt="MI Agency team"
              width="268"
              height="368"
              loading="lazy"
            />
          </picture>
        </PicFrame>
      </SectionCont>
    </Wrap>
  );
};

export default MissionSection;
