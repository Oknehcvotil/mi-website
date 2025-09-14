import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Header = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;

  background: ${({ isScrolled }) =>
    isScrolled ? "rgba(255, 255, 255, 0.6)" : "transparent"};
  backdrop-filter: ${({ isScrolled }) => (isScrolled ? "blur(10px)" : "none")};
  transition: all 0.3s ease;
`;

export const HeaderWrapper = styled(motion.div)`
  margin: 0 auto;
  max-width: 390px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px 15px;
`;
