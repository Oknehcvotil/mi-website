import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ModalLayuot = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(217, 217, 217, 0.4);
  z-index: 1000;
  overscroll-behavior: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
