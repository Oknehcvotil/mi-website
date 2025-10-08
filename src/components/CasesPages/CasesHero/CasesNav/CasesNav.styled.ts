import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const CasesHeroNavWrap = styled.nav`
  margin-bottom: 10px;
`;

export const CasesHeroNavList = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3px 7px;
  max-width: 265px;
  width: 100%;
  margin: 0 auto;

  &.nav-cases--hr {
    max-width: 100%;
    justify-content: center;
    gap: 7px;
  }
`;

export const CasesNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  color: #020202;
  border-radius: 8px;
  border: 2px solid #a066ff;
  transition: color 0.3s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover,
  &:focus,
  &.active {
    background: linear-gradient(180deg, #a066ff 0%, #5427b1 100%);
    color: #fff;
  }
`;
