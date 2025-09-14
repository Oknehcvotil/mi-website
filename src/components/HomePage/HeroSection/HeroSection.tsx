import Container from "../../Container/Container";
import { HeroSectionWrap } from "./HeroSection.styled";
import { motion, useReducedMotion } from "framer-motion";
import { container } from "../../../lib/animations/home/animation.hero";
import HeroText from "./HeroText/HeroText";
import HeroMedia from "./HeroMedia/HeroMedia";

const HeroSection = () => {
  const reduce = useReducedMotion();

  return (
    <HeroSectionWrap>
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5, once: true }}
          animate={reduce ? "show" : undefined}
        >
          <HeroText />
        </motion.div>
        <HeroMedia />
      </Container>
    </HeroSectionWrap>
  );
};

export default HeroSection;
