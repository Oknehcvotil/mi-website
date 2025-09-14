import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const BurgerLayuot = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(217, 217, 217, 0.4);
  z-index: 500;
  overscroll-behavior: none;

  @media (min-width: 1620px) {
    display: none;
  }
`;

export const BurgerCont = styled(motion.aside)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 88%;
  height: 100dvh;
  background: #fff;
  border-right: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  z-index: 999;
  will-change: transform;
  padding-top: 40px;
  padding-right: 15px;
  padding-left: 15px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain; 
  touch-action: pan-y;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
