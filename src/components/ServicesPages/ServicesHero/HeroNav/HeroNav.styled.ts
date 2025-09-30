import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HeroNavWrap = styled(motion.nav)`
  margin-bottom: 20px;
`;

export const HeroNavList = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7px;
`;

export const HeroNavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: #020202;
  border-radius: 8px;
  border: 2px solid #a066ff;
  transition: color 0.3s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover,
  &:focus {
    background: linear-gradient(180deg, #a066ff 0%, #5427b1 100%);
    color: #fff;
  }
`;
