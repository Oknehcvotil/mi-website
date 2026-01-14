import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ListItem = styled(motion.li)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 4px solid #cad3e4;
  border-radius: 20px;
  max-width: 340px;
  width: 100%;
  padding: 25px 15px;
  background-color: #fff;
  margin: 0;

  &:nth-of-type(3) {
    span {
      font-size: 15px;
    }
  }

  &:nth-of-type(2),
  &:nth-of-type(4) {
    span {
      font-size: 17px;
    }
  }

  img {
    display: inline-block;
    width: 68px;
    height: auto;
  }
`;

export const AdvText = styled.h3`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  max-width: 236px;
  width: 100%;
  color: #020202;

  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 113%;
    text-transform: uppercase;
  }
`;
