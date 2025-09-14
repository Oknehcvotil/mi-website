import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavCont = styled.nav`
  margin-left: auto;
  max-width: 310px;
  width: 100%;

  li {
    margin-bottom: 20px;
  }

  li:last-of-type {
    margin-bottom: 0;
  }
`;

export const MainLink = styled(NavLink)`
  border: 2px solid #a066ff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 45px;
  height: 100%;
  max-width: 130px;
  width: 100%;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #020202;
  padding: 7px 9px;

  &:hover,
  &:focus {
    background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
    color: #fff;
  }

  &:active {
    box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #5427b1;
    color: #fff;
  }

  &.active {
    background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
    color: #fff;
  }
`;
