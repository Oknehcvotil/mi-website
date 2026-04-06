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

  @media (min-width: 1920px) {
    max-width: 1920px;
    padding-top: 80px;
    padding-bottom: 0;
    padding-left: 75px;
    padding-right: 75px;
  }
`;

export const PhdSliderPair = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    > .phd-slider-card {
      display: flex;
      height: auto;
    }

    &.last-pair {
      align-items: center;

      > div {
        display: flex;
      }

      .last-pair-card {
        display: flex;
      }

      .last-pair-card > div {
        width: 100%;
      }
    }
  }

  @media (min-width: 1920px) {
    justify-content: space-around;
    gap: 0;

    > .phd-slider-card.review {
      flex: 0 0 740px;
      max-width: 740px;
    }

    > .phd-slider-card.request-result {
      flex: 0 0 980px;
      max-width: 980px;
    }

    &.last-pair {
      justify-content: space-around;

      > .phd-slider-card.review {
        flex: 0 0 740px;
        max-width: 740px;
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

  @media (min-width: 1920px) {
    font-size: 80px;
    margin-bottom: 65px;
  }
`;
