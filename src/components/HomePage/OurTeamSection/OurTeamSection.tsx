import { teamCards } from "../../../lib/data/home.page";
import AppSlider from "../../AppSlider/AppSlider";
import {
  // TitleWrap,
  // TitleText,
  SectionWrap,
  Slide,
  SliderCont,
} from "./OurTeamSection.styled";
import { TeamCard } from "./TeamCards/TeamCards";
import {
  blockV,
  sectionV,
} from "../../../lib/animations/home/animations.swipers";
import { useMediaQuery } from "../../../lib/hooks/useMediaQuery";

const OurTeamSection = () => {

   const isTablet = useMediaQuery("(min-width: 768px)");

   const tabletSlides = [
     [teamCards[0], teamCards[2]].filter(Boolean), // 1 + 3
     [teamCards[3], teamCards[1], teamCards[4]].filter(Boolean), // 2 + 4 + 5
   ].filter((g) => g.length);

   const slides = isTablet ? tabletSlides : teamCards.map((card) => [card]);

  return (
    <SectionWrap
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionV}
    >
      {/* <TitleWrap variants={titleV}>
        <TitleText>OUR MI TEAM</TitleText>
      </TitleWrap> */}
      <SliderCont variants={blockV}>
        <AppSlider className="team-slider">
          {slides.map((group, idx) => (
            <Slide key={idx} className={`team-slide team-slide--${group.length}`}>
              {group.map((card) => (
                <TeamCard key={card.id} data={card} />
              ))}
            </Slide>
          ))}
        </AppSlider>
      </SliderCont>
    </SectionWrap>
  );
};

export default OurTeamSection;
