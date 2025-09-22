import styled from "@emotion/styled";

export const SectionWrap = styled.section`
  position: relative;
  padding-top: 290;
  background: #f8f8fb;
  width: 100%;
`;

export const TitleWrap = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 70px;
  margin-top: 20px;
`;

export const TitleText = styled.h2`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  margin: 0;
  line-height: 1;
  font-weight: 400;
  font-size: 60px;
  text-transform: uppercase;
  color: #ebecf4;
  max-width: fit-content;
  overflow: hidden;
`;

export const SliderCont = styled.div`
  max-width: 390px;
  width: 100%;
  margin: 0 auto;
  background-image: url("/images/mob/background/team-bg.jpg");
  background-size: contain;
  background-position: center calc(100% - 35px);
  background-repeat: no-repeat;
  padding-bottom: 35px;

  img {
    height: 450px;
  }
`;
