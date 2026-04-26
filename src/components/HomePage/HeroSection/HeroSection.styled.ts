import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HeroSectionWrap = styled.div`
  @media (min-width: 1024px) {
    position: relative;
  }

  @media (min-width: 1920px) {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 28px;
      width: 100%;
      background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
      z-index: 5;
    }
  }
`;

export const HeroCont = styled(motion.div)`
  padding-top: 105px;

  @media (min-width: 1024px) {
    padding: 40px 0 190px 50px;
    display: flex;
    max-width: 1024px;
    margin: 0 auto;
    position: relative;
  }

  @media (min-width: 1280px) {
    padding: 40px 0 190px 50px;
    max-width: 1280px;
  }

  @media (min-width: 1920px) {
    padding: 110px 0 180px 100px;
    display: flex;
    max-width: 1920px;
  }
`;
