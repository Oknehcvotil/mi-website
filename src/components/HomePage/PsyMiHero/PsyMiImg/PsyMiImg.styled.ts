import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Img = styled(motion.img)`
  display: block;

  &.robot-img {
    position: absolute;
    bottom: -10px;
    right: -27px;
    height: auto;
    pointer-events: none;
  }
`;