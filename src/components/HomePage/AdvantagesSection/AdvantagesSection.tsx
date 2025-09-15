import { advantagesCards } from "../../../lib/data/home.page";
import Container from "../../Container/Container";
import AdvantagesCard from "./AdvantagesCard/AdvantagesCard";
import { AdvSection, AdvList } from "./AdvantagesSection.styled";
import { itemIn } from "../../../lib/animations/home/animations.advantages";

const AdvantagesSection = () => {
  return (
    <AdvSection>
      <Container>
        <AdvList>
          {advantagesCards.map((c, idx) => (
            <AdvantagesCard
              key={idx}
              img={c.img}
              title={c.title}
              variants={itemIn}
            />
          ))}
        </AdvList>
      </Container>
    </AdvSection>
  );
};

export default AdvantagesSection;
