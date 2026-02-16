import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  max-width: 390px;
  padding: 0 15px;
  margin: 0 auto 10px;

  @media (min-width: 768px) {
    padding: 0 25px;
    margin: 0 auto;
    max-width: 768px;
  }
`;

export const HeroTitle = styled(motion.h1)<{ lang: string }>`
  font-weight: 500;
  font-size: ${({ lang }) => (lang === "en" ? "17px" : "20px")};
  font-family: "Unbounded";
  line-height: 24px;
  margin-bottom: 13px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const TitleAccent = styled.span`
  color: #a066ff;
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const SubTitle = styled(motion.p)`
  margin-bottom: 13px;

  @media (min-width: 768px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 40px;
  }
`;

export const BtnWrapper = styled(motion.div)`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
