import { advantagesCards } from "../../../lib/data/home.page";
import Container from "../../Container/Container";
import AdvantagesCard from "./AdvantagesCard/AdvantagesCard";
import { AdvSection, AdvList } from "./AdvantagesSection.styled";
import {
  itemIn,
  listVariants,
  sectionVariants,
} from "../../../lib/animations/home/animations.advantages";
import { useReducedMotion } from "framer-motion";

const AdvantagesSection = () => {
  const reduce = !!useReducedMotion();

  return (
    <AdvSection
      variants={reduce ? undefined : sectionVariants}
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.2 }}
      animate={reduce ? "show" : undefined}
    >
      <Container>
        <AdvList variants={reduce ? undefined : listVariants}>
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
