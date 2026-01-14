import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const ServicesItems = styled(motion.li)`
  border: 3px solid #c8c6cb;
  border-radius: 10px;
  padding: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 50px 0 rgba(141, 141, 141, 0.15);
  background: rgba(255, 255, 255, 0.5);

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 147%;
    margin-bottom: 10px;
  }
`;

export const TitleCont = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;

  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    text-transform: uppercase;
  }
`;

export const ServicesLink = styled(HashLink)`
  cursor: pointer;
  font-weight: 700;
  font-size: 17px;
  line-height: 118%;
  text-transform: uppercase;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #a066ff;
  border-radius: 10px;
  max-width: 230px;
  width: 100%;
  min-height: 40px;
  background-color: #fff;
  transition: background 0.3s ease, color 0.3s ease, box-shadow 0.2s ease;

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
`;
