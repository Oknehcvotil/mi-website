import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const SubMenuItem = styled.li`
  position: relative;
`;

export const SubMenuTitle = styled.span<{
  active: boolean;
  width?: string;
  justify?: string;
}>`
  cursor: pointer;
  display: flex;
  justify-content: ${({ justify }) => justify ?? "flex-start"};
  align-items: center;
  gap: 7px;
  min-height: 45px;
  height: 100%;
  max-width: ${({ width }) => width ?? "130px"};
  width: 100%;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  padding: 7px 9px;
  border: 2px solid #a066ff;
  border-radius: 8px;
  margin-bottom: 20px;

  &:last-of-type {
    justify-items: flex-start;
  }

  svg {
    stroke: #a066ff;
  }

  &:hover,
  &:focus {
    background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
    color: #fff;

    svg {
      stroke: #fff;
    }
  }

  &:active {
    box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #5427b1;
    color: #fff;

    svg {
      stroke: #fff;
    }
  }

  background: ${({ active }) =>
    active
      ? "linear-gradient(90deg, #a066ff 0%, #5427b1 100%)"
      : "transparent "};
  color: ${({ active }) => (active ? "#fff" : "#020202")};

  &.active {
    background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
    color: #fff;

    svg {
      stroke: #fff;
    }
  }

  @media (min-width: 1920px) {
    margin: 0;
    min-height: 50px;
    font-weight: 500;
    font-size: 25px;
    line-height: 120%;
    max-width: 100%;
    padding: 0 10px;
  }
`;

export const SubMenuList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13px 17px;
  border: 2px solid #a066ff;
  border-radius: 8px;
  max-width: 270px;
  width: 100%;

  li {
    margin-bottom: 9px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1920px) {
    position: absolute;
    top: 65px;
    left: 0;
    width: max-content;
    max-width: max-content;
    padding: 20px;
    border: none;
    background-color: #fff;

    ::before {
      content: "";
      position: absolute;
      inset: 0;
      padding: 4px;
      border-radius: 10px;
      pointer-events: none;
      background: linear-gradient(90deg, #a066ff, #5427b1);
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }
`;

export const SubLink = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: #020202;
  cursor: pointer;

  &:hover,
  &:focus,
  &.active {
    font-weight: 700;
  }

  @media (min-width: 1920px) {
    font-size: 25px;
    line-height: 120%;
  }
`;
