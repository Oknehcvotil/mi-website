import { teamCards } from "../../../lib/data/home.page";
import AppSlider from "../../AppSlider/AppSlider";
import {
  // TitleWrap,
  // TitleText,
  SectionWrap,
  SliderCont,
} from "./OurTeamSection.styled";
import { TeamCard } from "./TeamCards/TeamCards";
import {
  blockV,
  sectionV,
} from "../../../lib/animations/home/animations.swipers";

const OurTeamSection = () => {
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
          {teamCards.map((card) => (
            <TeamCard key={card.id} data={card} />
          ))}
        </AppSlider>
      </SliderCont>
    </SectionWrap>
  );
};

export default OurTeamSection;
