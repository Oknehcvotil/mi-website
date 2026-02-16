import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const LangCont = styled.div`
  position: relative;
  margin-right: 10px;
  width: 55px;
  min-height: 40px;

  @media (min-width: 768px) {
    order: 3;
  }
`;

export const LangList = styled(motion.ul)`
  overflow: hidden;
  position: absolute;
  width: 55px;
  min-height: 40px;
  height: 100%;
  border: 2px solid #a066ff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 250;

  &:hover {
    height: 70px;
  }

  button {
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 107%;
    color: #020202;
  }

  li:first-of-type {
    position: absolute;
    top: 11px;
    left: 9px;
    width: 40px;
  }

  li:last-of-type {
    position: absolute;
    top: 40px;
    left: 9px;
    width: 40px;
  }

  li:last-of-type:hover button {
    font-weight: bold;
  }

  svg {
    stroke: #a066ff;
  }
`;
