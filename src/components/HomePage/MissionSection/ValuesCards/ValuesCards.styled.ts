import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Card = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 22px;
  min-height: 84px;
  max-width: 340px;
  width: 100%;
  border: 2px solid rgba(215, 215, 215, 0.8);
  background: rgba(243, 244, 249, 0.62);
  border-radius: 11px;
  padding-left: 16px;
`;

export const IconCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const ContText = styled.p`
  font-weight: 700;
  font-weight: 15px;
  line-height: 167%;
  max-width: 220px;
  width: 100%;
`;
