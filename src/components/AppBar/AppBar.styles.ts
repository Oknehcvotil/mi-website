import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Header = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 500;
  isolation: isolate;

  background: ${({ isScrolled }) =>
    isScrolled ? "rgba(255, 255, 255, 0.6)" : "transparent"};
  backdrop-filter: ${({ isScrolled }) => (isScrolled ? "blur(10px)" : "none")};
  transition: all 0.3s ease;

  @media (min-width: 1920px) {
    position: relative;
  }
`;

export const HeaderWrapper = styled(motion.nav)`
  margin: 0 auto;
  max-width: 390px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px 15px;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 25px;
    min-height: 65px;
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 45px;
    min-height: 115px;
  }
`;

export const BurgerMenuBtn = styled.button`
  margin-right: auto;

  @media (min-width: 768px) {
    margin-right: 30px;
  }

  @media (min-width: 1920px) {
    display: none;
  }
`;

export const LogoLink = styled(NavLink)`
  display: none;

  @media (min-width: 768px) {
    display: block;
    margin-right: 55px;
    order: 2;
  }

  @media (min-width: 1920px) {
    margin-right: auto;
  }
`;
