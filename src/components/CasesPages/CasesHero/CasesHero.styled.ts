import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HeroSectionWrap = styled(motion.section)`
  padding-top: 105px;

  margin-bottom: 40px;

  @media (min-width: 768px) {
    padding-top: 80px;
  }

  @media (min-width: 1024px) {
    padding-top: 40px;
  }
`;

export const CasesHeroWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1280px) {
    justify-content: center;
  }
`;

export const CasesHeroTitle = styled(motion.h1)`
  font-family: "Unbounded";
  font-weight: 700;
  font-size: 30px;
  line-height: 130%;
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-bottom: 10px;

  &.cases-hero-business--title {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    font-size: 35px;

    &.cases-hero-business--title {
      margin-bottom: 40px;
    }
  }

  @media (min-width: 1280px) {
    font-size: 40px;

    &.cases-hero-business--title {
      margin-bottom: 40px;
    }
  }

  @media (min-width: 1920px) {
    font-size: 80px;
    margin-bottom: 15px;

    &.cases-hero-business--title {
      margin-bottom: 60px;
    }
  }
`;

export const CasesHeroSubtitle = styled.h2`
  font-family: "Unbounded";
  font-weight: 500;
  font-size: 26px;
  line-height: 130%;
  color: #020202;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 40px;
  }

  @media (min-width: 1280px) {
    font-size: 45px;
  }

  @media (min-width: 1920px) {
    font-size: 60px;
  }
`;

export const CasesHeroLead = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  color: #020202;
  margin-bottom: 10px;
  max-width: 320px;
  width: 100%;
  margin-right: auto;

  &.cases-hero-hr--lead {
    font-size: 15px;
    max-width: 290px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 130%;
    max-width: 465px;
    margin-bottom: 15px;

    &.cases-hero-hr--lead {
      font-size: 15px;
      max-width: 475px;
    }
  }

  @media (min-width: 1024px) {
    &.cases-hero-hr--lead {
      font-size: 20px;
      max-width: 730px;
    }

    &.cases-hero-recruitment--lead {
      max-width: 725px;
    }

    &.cases-hero-business--lead {
      max-width: 650px;
      font-size: 20px;
    }
  }

  @media (min-width: 1280px) {
    &.cases-hero-hr--lead {
      font-size: 23px;
      max-width: 845px;
    }

    &.cases-hero-recruitment--lead {
      max-width: 845px;
      font-size: 23px;
      margin-right: 65px;
      margin-bottom: 30px;
    }

    &.cases-hero-business--lead {
      max-width: 710px;
      font-size: 23px;
    }
  }

  @media (min-width: 1920px) {
    font-size: 30px;
    line-height: 130%;
    max-width: 850px;
    margin-bottom: 25px;

    &.cases-hero-hr--lead {
      max-width: 1115px;
      font-size: 35px;
    }

    &.cases-hero-business--lead {
      max-width: 810px;
      font-size: 30px;
    }
  }
`;

export const CasesHeroImgCont = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &.cases-hero-recruitment-img--cont {
    }

    &.cases-hero-business-img--cont {
    }

    &.cases-hero-hr-img--cont {
    }
  }

  @media (min-width: 1024px) {
    &.cases-hero-recruitment-img--cont {
    }

    &.cases-hero-business-img--cont {
      padding-right: 20px;
    }

    &.cases-hero-hr-img--cont {
      padding-bottom: 35px;
    }
  }

  @media (min-width: 1280px) {
    &.cases-hero-recruitment-img--cont {
      margin-right: 60px;
    }

    &.cases-hero-business-img--cont {
      padding-right: 65px;
    }

    &.cases-hero-hr-img--cont {
    }
  }

  @media (min-width: 1920px) {
    &.cases-hero-recruitment-img--cont {
    }

    &.cases-hero-business-img--cont {
    }

    &.cases-hero-hr-img--cont {
    }
  }
`;

export const CasesHrSubtitle = styled.h3`
  display: none;

  &.cases-hero-subTitle-hr {
    display: block;
  }

  font-size: 15px;
  line-height: 130%;
  color: #8a38f5;
  margin-bottom: 15px;

  @media (min-width: 1024px) {
    font-size: 20px;
    margin-bottom: 20px;
  }

  @media (min-width: 1920px) {
    font-size: 35px;
  }
`;
