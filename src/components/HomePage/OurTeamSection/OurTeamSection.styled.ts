import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SectionWrap = styled(motion.div)`
  position: relative;
  padding-top: 20px;
  background: #f8f8fb;
  width: 100%;

  @media (min-width: 1920px) {
    padding-top: 0;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 70px;
      width: 100%;
      background: #5427b1;
    }
  }
`;

export const TitleWrap = styled(motion.div)`
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

export const SliderCont = styled(motion.div)`
  max-width: 390px;
  width: 100%;
  margin: 0 auto;
  background-image: url("/images/mob/background/team-bg.jpg");
  background-size: contain;
  background-position: center calc(100% - 35px);
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    max-width: 768px;
    background-image: url("/images/tab/background/team-bg.jpg");
    background-position: center calc(100% - 40px);
  }

  @media (min-width: 1920px) {
    display: none;
  }
`;

export const Slide = styled.article`
  position: relative;
  @media (min-width: 768px) {
    display: flex;
  }
`;
