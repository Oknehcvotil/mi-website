import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const EligibilityWrap = styled(motion.section)`
  background-color: rgba(243, 244, 249, 0.62);
  padding: 20px 0 40px 0;

  @media (min-width: 768px) {
    padding: 40px 0;
  }

  @media (min-width: 1920px) {
    padding: 56px 0 64px;
  }
`;

export const EligibilityCardsCont = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    align-items: stretch;
    max-width: 768px;
    width: 100%;
    margin: 0 auto;

    > div {
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 1024px) {
    max-width: 100%;
    gap: 32px;
  }

  @media (min-width: 1920px) {
    max-width: 1720px;
    gap: 96px;
    align-items: start;
  }
`;

export const ConsultLinkCont = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: "Unbounded";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #020202;
    backdrop-filter: blur(25px);
    margin-bottom: 20px;
    text-align: center;
    max-width: 320px;
    width: 100%;

    span {
      font-weight: 700;
      color: #a066ff;
    }
  }

  @media (min-width: 768px) {
    margin-top: 20px;

    h2 {
      max-width: none;
      font-size: 20px;
      line-height: 130%;
    }
  }

  @media (min-width: 1024px) {
    h2 {
      max-width: 730px;
    }
  }

  @media (min-width: 1920px) {
    margin-top: 80px;

    h2 {
      max-width: none;
      font-size: 40px;
      line-height: 138%;
      margin-bottom: 35px;
    }
  }
`;
