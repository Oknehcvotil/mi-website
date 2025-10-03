import { useReducedMotion } from "framer-motion";
import { sectionVariants } from "../../../lib/animations/services/animations.pricing";
import type { Plan } from "../../../lib/types/servicesPages.type";
import Container from "../../Container/Container";
import PricingCard from "./PricingCard/PricingCard";
import { CardsList, PricingSectionWrap } from "./PricingSection.styled";

type PricingSectionProps = {
  plans: Plan[];
};

const PricingSection = ({ plans }: PricingSectionProps) => {
  const reduce = useReducedMotion();

  return (
    <PricingSectionWrap
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={reduce ? undefined : sectionVariants}
    >
      <Container className="pricing-section-container">
        <CardsList>
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} />
          ))}
        </CardsList>
      </Container>
    </PricingSectionWrap>
  );
};

export default PricingSection;
