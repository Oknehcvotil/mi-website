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

  @media (min-width: 768px) {
    flex-direction: column;
    padding: 25px 10px;
    min-height: 300px;
    gap: 15px;

    img {
      display: inline-block;
      width: 125px;
      height: auto;
    }

    &:nth-of-type(3) {
      span {
        font-size: 20px;
      }
    }

    &:nth-of-type(2) {
      span {
        font-size: 23px;
      }
    }

    &:nth-of-type(4) {
      span {
        font-size: 25px;
        display: inline-block;
        max-width: 200px;
      }
    }
  }

  @media (min-width: 1920px) {
    flex-direction: column;
    padding: 25px 30px;
    min-height: 350px;
    gap: 25px;
    max-width: 418px;
    width: 100%;

    img {
      width: 160px;
      height: auto;
    }

    &:nth-of-type(3) {
      max-width: 470px;
      h3 {
        font-size: 22px;
      }
      span {
        font-size: 26px;
      }
    }

    &:nth-of-type(2) {
      span {
        font-size: 25px;
      }
    }

    &:nth-of-type(4) {
      span {
        font-size: 28px;
        display: inline-block;
        max-width: 200px;
      }
    }
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

  @media (min-width: 768px) {
    max-width: 100%;
    font-size: 20px;
    text-align: center;

    span {
      font-size: 25px;
      text-align: center;
    }
  }

  @media (min-width: 1920px) {
    font-size: 25px;
    line-height: 130%;
    max-width: 100%;
    span {
      font-size: 30px;
      line-height: 113%;
    }
  }
`;
