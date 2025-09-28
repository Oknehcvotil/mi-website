import { HeroSectionWrap } from "./HeroSection.styled";
import HeroText from "./HeroText/HeroText";
import HeroMedia from "./HeroMedia/HeroMedia";
import { useSectionInView } from "../../../lib/hooks/useSectionInView";

const HeroSection = () => {
  const { ref } = useSectionInView("About", 0.2);

  return (
    <HeroSectionWrap ref={ref} id="about">
      <div>
        <HeroText />
        <HeroMedia />
      </div>
    </HeroSectionWrap>
  );
};

export default HeroSection;
