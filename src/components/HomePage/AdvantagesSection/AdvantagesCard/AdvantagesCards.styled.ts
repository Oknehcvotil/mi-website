import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ListItem = styled(motion.li)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  border: 4px solid #cad3e4;
  border-radius: 38px;
  max-width: 340px;
  width: 100%;
  min-height: 340px;
  background-color: #fff;
  margin: 0;

  &:nth-of-type(3) {
    span {
      font-size: 21px;
    }
  }

  img {
    width: 140px;
    height: auto;
  }
`;

export const AdvText = styled.h3`
  font-family: "Montserrat";
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;

  span {
    font-weight: 700;
    font-size: 25px;
    line-height: 113%;
    text-transform: uppercase;
  }
`;
