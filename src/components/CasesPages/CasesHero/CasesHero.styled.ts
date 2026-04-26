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
      max-width: 475px;
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) {
    &.cases-hero-hr--lead {
      max-width: 730px;
    }
  }

  @media (min-width: 1024px) {
    max-width: 730px;
    &.cases-hero-hr--lead {
      max-width: 750px;
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
  }
`;

export const CasesHeroImgCont = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    overflow: hidden;
    position: relative;

    &.cases-hero-recruitment-img--cont {
      img {
        max-width: 267px;
      }
    }

    &.cases-hero-business-img--cont {
      position: absolute;
      top: 85px;
      right: -30px;
      padding: 0;
      height: 175px;
      width: 291px;
    }

    &.cases-hero-hr-img--cont {
      padding: 0;

      img {
        max-width: 245px;
      }
    }
  }

  @media (min-width: 1024px) {
    &.cases-hero-business-img--cont {
      position: static;
      top: 0;
      right: 0;
      flex-basis: 318px;
      width: 318px;
      height: auto;

      img {
        max-width: 318px;
      }
    }
  }

  @media (min-width: 1920px) {
    &.cases-hero-recruitment-img--cont {
      img {
        max-width: 425px;
      }
    }

    &.cases-hero-business-img--cont {
      padding: 0;
      flex-basis: 586px;
      width: 586px;

      img {
        max-width: 586px;
      }
    }

    &.cases-hero-hr-img--cont {
      padding: 0;

      img {
        max-width: 452px;
      }
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
