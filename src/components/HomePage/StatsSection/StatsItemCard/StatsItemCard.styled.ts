import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StatsItem = styled(motion.li)`
  position: relative;

  &:nth-last-of-type {
    margin-bottom: 13px;
  }

  &:nth-of-type(3) {
    margin-bottom: 34px;
  }
`;

export const ValueText = styled.h3`
  font-weight: 800;
  font-size: 100px;
  line-height: 1;
  background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LabelText = styled.p`
  max-width: 253px;
  font-weight: 500;
  font-size: 25px;
  line-height: 1;
  color: #000;

  span {
    position: absolute;
    top: -25px;
    left: 0;
  }
`;
