import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HeroSectionWrap = styled.section`
  padding-top: 105px;

  @media (min-width: 1024px) {
    padding-top: 40px;
  }
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

  @media (min-width: 1920px) {
    font-size: 80px;
    line-height: 99px;

    &.hero-PHD--title {
      margin-bottom: 50px;
    }
  }
`;

export const HeroSubtitle = styled(motion.h3)`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;

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

  @media (min-width: 1920px) {
    font-size: 50px;
    margin-bottom: 25px;

    &.hero-for-candidates--subtitle {
      margin-bottom: 45px;
    }
  }
`;

export const HeroWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    padding-bottom: 45px;
  }

  @media (min-width: 1920px) {
    padding-bottom: 80px;
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

  @media (min-width: 1024px) {
    margin-right: auto;
    max-width: 100%;

    h2 {
      font-family: "Unbounded";
      font-size: 40px;
      line-height: 125%;
    }

    p {
      font-size: 20px;
    }
  }

  @media (min-width: 1920px) {
    margin-right: auto;

    h2 {
      font-size: 80px;
      margin-bottom: 25px;
      max-width: 1130px;
    }

    p {
      font-size: 40px;
      line-height: 130%;
      margin-bottom: 50px;
      max-width: 975px;
    }
  }
`;

export const HeroImgCont = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 40px 0;

  picture {
    display: block;
    width: auto;
    min-width: max-content;
    flex-shrink: 0;
  }

  img {
    width: auto;
    height: auto;
    max-width: none;
    display: block;
    object-fit: contain;
    flex-shrink: 0;
  }

  &.hero-for-clients-img--cont {
    justify-content: center;
  }

  &.hero-for-candidates-img--cont {
    padding: 20px 0;

    @media (min-width: 768px) {
      padding: 0;
    }
  }

  &.hero-PHD-img--cont {
    padding: 0 0 0 15px;
    justify-content: flex-start;
  }

  @media (min-width: 768px) {
    padding: 0;
  }
`;
