import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  @media (min-width: 768px) {
    display: grid;

    grid-template-columns: repeat(2, 351px);
    gap: 15px;

    justify-content: center;
    align-items: stretch;
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(2, 820px);
    gap: 30px;
  }
`;

export const ServicesItems = styled(motion.li)`
  border: 3px solid #c8c6cb;
  border-radius: 10px;
  padding: 20px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.5);

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 147%;
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    padding: 20px;
    min-height: 0;
    display: flex;
    flex-direction: column;
    box-shadow:
      0 0 50px 0 rgba(141, 141, 141, 0.15),
      0 4px 4px 0 rgba(0, 0, 0, 0.25),
      inset -5px -3px 14px 0 rgba(0, 0, 0, 0.25);

    &:last-of-type {
      grid-column: 1 / -1;
      justify-self: center;
      max-width: 100%;
      width: 100%;
    }

    &:nth-of-type(3) {
      h3 {
        max-width: 100px;
      }
    }
  }

  @media (min-width: 1920px) {
    min-height: 450px;
    padding: 60px 40px 30px 40px;

    &:nth-of-type(3),
    &:nth-of-type(1) {
      h3 {
        max-width: 100%;
      }
    }

    &:last-of-type {
      grid-column: 1 / -1;
      justify-self: center;
      max-width: 820px;
    }

    p {
      font-size: 30px;
      line-height: 133%;
      margin-bottom: 0;
    }
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

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 1920px) {
    h3 {
      font-size: 55px;
      line-height: 114%;
      max-width: 590px;
    }
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

  transition:
    background 0.3s ease,
    color 0.3s ease,
    box-shadow 0.2s ease;

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

  @media (min-width: 768px) {
    margin-top: auto;
  }

  @media (min-width: 1920px) {
    border: 6px solid #a066ff;
    border-radius: 15px;
    max-width: 420px;
    width: 100%;
    min-height: 80px;
    font-size: 30px;
    line-height: 133%;
  }
`;
