import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StatsWrap = styled.div`
  padding: 40px 0;
`;

export const StatsList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
