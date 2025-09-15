import { HeroSectionWrap } from "./HeroSection.styled";
import HeroText from "./HeroText/HeroText";
import HeroMedia from "./HeroMedia/HeroMedia";

const HeroSection = () => {
  return (
    <HeroSectionWrap>
      <div>
        <HeroText />
        <HeroMedia />
      </div>
    </HeroSectionWrap>
  );
};

export default HeroSection;
