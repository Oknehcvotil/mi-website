import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HeroSectionWrap = styled.div`
  padding-top: 105px;
`;

export const MainHeroTitle = styled(motion.h1)`
  font-family: "Unbounded";
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeroSubtitle = styled(motion.h3)`
  font-weight: 700;
  font-size: 20px;
  line-height: 200%;
  text-align: center;
  background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &.hero-for-candidates--subtitle {
    margin-bottom: 10px;
  }
`;

export const LeadCont = styled(motion.div)`
  h2 {
    font-family: "Unbounded";
    font-weight: 500;
    font-size: 26px;
    color: #020202;
    margin-bottom: 15px;
    line-height: 32px;
  }

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
    margin-bottom: 15px;
  }
`;

export const HeroImgCont = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }

  &.hero-for-clients-img--cont {
    img {
      max-width: 200px;
    }
  }

  &.hero-for-candidates-img--cont {
    img {
      max-width: 225px;
    }
  }
`;
