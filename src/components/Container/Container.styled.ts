import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  max-width: 390px;
  padding: 0 15px;
  margin: 0 auto;

  &.footer-cont {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
