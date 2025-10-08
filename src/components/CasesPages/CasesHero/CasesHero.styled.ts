import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HeroSectionWrap = styled(motion.section)`
  padding-top: 105px;
`;

export const CasesHeroTitle = styled(motion.h1)`
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

  margin-bottom: 10px;

  &.cases-hero-business--title {
    margin-bottom: 20px;
  }
`;

export const CasesHeroSubtitle = styled.h2`
  font-family: "Unbounded";
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  color: #020202;
  margin-bottom: 15px;
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
    max-width: 290px;
  }
`;

export const CasesHeroImgCont = styled.div`
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

  &.cases-hero-recruitment-img--cont {
    img {
      max-width: 200px;
    }
  }

  &.cases-hero-business-img--cont {
    padding: 20px 0 10px;
  }

  &.cases-hero-hr-img--cont {
    padding: 30px 0;
  }
`;
