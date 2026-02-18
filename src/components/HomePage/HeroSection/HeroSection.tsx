import { HeroSectionWrap, HeroCont } from "./HeroSection.styled";
import HeroText from "./HeroText/HeroText";
import HeroMedia from "./HeroMedia/HeroMedia";
import { useSectionInView } from "../../../lib/hooks/useSectionInView";

const HeroSection = () => {
  const { ref } = useSectionInView("About", 0.2);

  return (
    <HeroSectionWrap ref={ref} id="about">
      <HeroCont>
        <HeroText />
        <HeroMedia />
      </HeroCont>
    </HeroSectionWrap>
  );
};

export default HeroSection;
