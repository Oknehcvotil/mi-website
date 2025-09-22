import { teamCards } from "../../../lib/data/home.page";
import AppSlider from "../../AppSlider/AppSlider";
import {
  TitleWrap,
  TitleText,
  SectionWrap,
  SliderCont,
} from "./OurTeamSection.styled";
import { TeamCard } from "./TeamCards/TeamCards";

const OurTeamSection = () => {
  return (
    <SectionWrap>
      <TitleWrap>
        <TitleText>OUR MI TEAM</TitleText>
      </TitleWrap>
      <SliderCont>
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
