import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const EligibilityWrap = styled(motion.section)`
  background-color: rgba(243, 244, 249, 0.62);
  padding: 20px 0 40px 0;

  @media (min-width: 768px) {
    padding: 40px 0;
  }
`;

export const EligibilityCardsCont = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    align-items: stretch;
    max-width: 768px;
    margin: 0 auto;

    > div {
      display: flex;
      flex-direction: column;
    }
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
`;
