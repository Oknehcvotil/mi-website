import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SelectorCont = styled.div`
  max-width: 340px;
  margin: 0 auto 28px;
  width: 100%;
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 3px solid #a066ff;
  border-radius: 10px;
  background: #fff;
  position: relative;
`;

export const SelectorTitile = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 167%;
  color: #000;
`;

export const ListCont = styled.div`
  height: 35.05px;
  width: 175px;
  position: relative;
`;

export const SelectorList = styled(motion.ul)<{ isOpen: boolean }>`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 175px;
  width: 100%;
  border-radius: 4px;
  z-index: 50;
  padding: 5px 5px;
  flex-direction: column;
  justify-content: center;

  li:not(:last-of-type) {
    margin-bottom: 12px;
  }

  ${({ isOpen }) =>
    isOpen
      ? `
        border: 2px solid #a066ff;
        background: #fff;
      `
      : `
        background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
        button {
    color: #fff;
      `}
`;

export const ActiveBtn = styled.button<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 700;
  font-size: 15px;
  line-height: 167%;
  text-transform: uppercase;
  color: #020202;

  div {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${({ isOpen }) =>
    isOpen
      ? `
      color: #5427b1;
        svg {
    stroke: #a066ff;
  }
    div{
    border-color:"#a066ff"}
      `
      : `
    color: #fff;
    svg {
    stroke: #fff;
  }
    div{
    border-color:"#fff"}
      `}
`;

export const SelectBtn = styled.button`
  font-family: "Unbounded";
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  text-transform: uppercase;
  color: #020202;

  &:hover,
  &:focus {
    color: #5427b1;
  }

  &:active {
    color: #5427b1;
  }
`;
