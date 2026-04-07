import { HeroSectionWrap, HeroCont } from "./HeroSection.styled";
import HeroText from "./HeroText/HeroText";
import HeroMedia from "./HeroMedia/HeroMedia";
import { useSectionInView } from "../../../lib/hooks/useSectionInView";
import { useReducedMotion } from "framer-motion";
import { useMediaQuery } from "../../../lib/hooks/useMediaQuery";
import { createHeroSceneVariants } from "../../../lib/animations/home/animations.hero";

const HeroSection = () => {
  const { ref } = useSectionInView("About", 0.2);
  const reduce = !!useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const sceneVariants = createHeroSceneVariants(isMobile, reduce);

  return (
    <HeroSectionWrap ref={ref} id="about">
      <HeroCont
        variants={sceneVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: isMobile ? 0.3 : 0.35, once: true }}
        animate={reduce ? "show" : undefined}
      >
        <HeroText />
        <HeroMedia />
      </HeroCont>
    </HeroSectionWrap>
  );
};

export default HeroSection;
