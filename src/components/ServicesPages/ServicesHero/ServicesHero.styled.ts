import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HeroSectionWrap = styled.section`
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

  &.hero-PHD--title {
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    font-size: 35px;
   
  }
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

  @media (min-width: 768px) {
    font-size: 35px;
    margin-bottom: 5px;
    font-size: 25px;

    &.hero-for-candidates--subtitle {
      margin-bottom: 20px;
    }
  }
`;

export const HeroWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    padding-bottom: 45px;
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

  @media (min-width: 768px) {
    margin-right: auto;
    max-width: 460px;

    h2 {
      font-family: "Unbounded";
      font-size: 40px;
      line-height: 125%;
    }

    p {
      font-size: 20px;
    }
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
    padding: 20px 0;

    img {
      max-width: 225px;
    }

    @media (min-width: 768px) {
      padding: 0;
    }
  }

  &.hero-PHD-img--cont {
    padding: 0 0 0 15px;
    justify-content: flex-start;

    img {
      max-width: 264px;
    }
  }

  @media (min-width: 768px) {
    padding: 0;
  }
`;
