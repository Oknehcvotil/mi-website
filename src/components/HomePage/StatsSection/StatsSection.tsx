import Container from "../../Container/Container";
import { StatsWrap, StatsList } from "./StatsSection.styled";
import { statsCards } from "../../../lib/data/home.page";
import { container } from "../../../lib/animations/home/animations.stats";
import { StatsItemCard } from "./StatsItemCard/StatsItemCard";

const StatsSection = () => {
  return (
    <StatsWrap>
      <Container>
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
      </Container>
    </StatsWrap>
  );
};

export default StatsSection;
