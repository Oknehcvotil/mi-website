import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StatsItem = styled(motion.li)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  @media (max-width: 767px) {
    position: absolute;
    right: 15px;

    &:nth-of-type(1) {
      top: 15px;
    }

    &:nth-of-type(2) {
      top: 70px;
    }

    &:nth-of-type(3) {
      bottom: 70px;

      p {
        max-width: 130px;
      }
    }

    &:last-of-type {
      bottom: 15px;
      align-items: baseline;
    }
  }

  @media (min-width: 768px) {
    position: relative;
    margin-bottom: 20px;

    &:nth-of-type(2) {
      p {
        max-width: 150px;
      }
    }

    &:nth-of-type(3) {
      margin-bottom: 10px;
      p {
        max-width: 152px;
      }
    }

    &:last-of-type {
      h3 {
        margin-left: 95px;
      }
      align-items: baseline;
      margin-bottom: 0;
    }
  }
`;

export const ValueText = styled.h3`
  font-weight: 800;
  font-size: 50px;
  line-height: 1;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 75px;
    line-height: normal;
    background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const LabelText = styled.p`
  max-width: 70px;
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;
  color: #fff;

  span {
    position: absolute;
    left: -70px;
  }

  @media (min-width: 768px) {
    font-size: 15px;
    color: #000;

    span {
      left: 0px;
    }
  }
`;
