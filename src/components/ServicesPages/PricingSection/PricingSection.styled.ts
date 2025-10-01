import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const PricingSectionWrap = styled(motion.section)`
  padding: 30px;
  background-color: #f3f4f9;
`;

export const CardsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
