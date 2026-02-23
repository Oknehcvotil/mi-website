import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const CasesWrapper = styled(motion.div)`
  padding: 40px 0 20px;

  @media (min-width: 768px) {
    padding-bottom: 30px;
  }

  @media (min-width: 1920px) {
    padding: 80px 0;
  }
`;

export const CasesTitle = styled(motion.h2)`
  line-height: 100%;
  font-family: "Unbounded";
  font-weight: 700;
  font-size: 35px;
  text-transform: uppercase;
  text-align: center;
  color: #020202;
  margin: 0 auto 20px;

  span {
    color: #a066ff;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }

  @media (min-width: 1920px) {
    font-size: 80px;
    margin-bottom: 40px;
  }
`;

export const ReviewsLink = styled(Link)`
  border: 2px solid #8a38f5;
  border-radius: 10px;
  max-width: 300px;
  width: 100%;
  height: 45px;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  color: #020202;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover,
  &:focus {
    background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: #fff;
  }

  &:active {
    box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #5427b1;
    transform: scale(0.97);
  }

  @media (min-width: 1920px) {
    font-size: 30px;
    line-height: 133%;
    max-width: 560px;
    height: 80px;
    border-radius: 15px;
    border: 6px solid #a066ff;
  }
`;

export const CardsWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 25px;
    max-width: 768px;
    margin: 0 auto;
    padding: 0 25px;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 45px;
    gap: 110px;
  }
`;

export const SliderCont = styled(motion.div)`
  margin-bottom: 20px;

  @media (min-width: 1920px) {
    margin-bottom: 40px;
  }
`;
