import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ServButton = styled(NavLink)`
  border: 2px solid #a066ff;
  border-radius: 8px;
  padding: 12px 9px;
  max-width: 80px;
  width: 100%;
  height: 40px;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: #020202;
  margin-right: 15px;

  &:hover,
  &:focus,
  &.active {
    background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: #fff;
  }

  &:active {
    box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #5427b1;
    transform: scale(0.97);
  }

  @media (min-width: 768px) {
    order: 1;
    margin-right: 175px;
  }
`;
