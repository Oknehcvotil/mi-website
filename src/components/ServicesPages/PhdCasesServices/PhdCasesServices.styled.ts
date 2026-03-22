import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const PhdCasesWrapper = styled(motion.section)`
  padding: 40px 0 20px;

  @media (min-width: 768px) {
    max-width: 768px;
    margin: 0 auto;
    padding-left: 25px;
    padding-right: 25px;
    box-sizing: border-box;
  }
`;

export const PhdSliderPair = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    &.last-pair {
      align-items: stretch;

      > div {
        display: flex;
      }

      .last-pair-card {
        display: flex;
        height: 100%;
      }

      .last-pair-card > div {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const PhdCasesTitle = styled(motion.h2)`
  line-height: 100%;
  font-family: "Unbounded";
  font-weight: 700;
  font-size: 35px;
  text-transform: uppercase;
  text-align: center;
  color: #020202;
  margin: 0 auto 20px;

  span {
    color: #a066ff;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;
