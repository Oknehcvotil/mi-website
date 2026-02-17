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
  position: relative;
  @media (max-width: 767px) {
    gap: 8px;
    border: 3px solid #a066ff;
    border-radius: 10px;
    background: #fff;
  }

  @media (min-width: 768px) {
    max-width: 180px;
    margin: 0 auto 0 0;
    flex-direction: column;

    .rail {
      content: "";
      position: absolute;
      left: 0;
      top: 6px;
      width: 3px;
      height: 100%;
      background: #c1c1c1;
      border-radius: 2px;
    }

    &::after {
      content: "";
      position: absolute;
      left: -7px;
      top: 6px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #a066ff;
    }

    &::before {
      content: "";
      position: absolute;
      left: -7px;
      bottom: -6px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #a066ff;
      z-index: 3;
    }
  }
`;

export const SelectorTitile = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 167%;
  color: #000;
`;

export const ListCont = styled.div`
  height: 36px;
  width: 175px;
  position: relative;
`;

export const SelectorList = styled(motion.ul)<{ isOpen: boolean }>`
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 175px;
  width: 100%;
  border-radius: 4px;
  z-index: 50;
  padding: 5px 5px;

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
    color: #fff};
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

export const CountriesTitle = styled.p`
  font-family: "Unbounded";
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  text-transform: uppercase;
  text-align: center;
  color: #020202;
  margin-bottom: 15px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 18px;
    background-color: #808080;
    right: -25px;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    content: "";
    position: absolute;
    height: 1px;
    width: 18px;
    background-color: #808080;
    left: -25px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const TabList = styled.ul`
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  li + li {
    margin-top: 8px;
  }
`;

export const TabBtn = styled.button`
  font-family: "Unbounded";
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  text-transform: uppercase;
  color: #020202;

  &[data-active="true"] {
    color: #5427b1;
  }

  &:hover,
  &:focus {
    color: #5427b1;
  }
`;
