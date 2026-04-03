import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const CardWrap = styled(motion.li)`
  position: relative;
  padding: 30px;
  background-color: #f3f4f9;
  border-radius: 26px;
  backdrop-filter: blur(100px);
  background: #fff;
  padding: 25px;
  max-width: 340px;
  width: 100%;
  color: #020202;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  &.top--sale {
    padding-top: 50px;
    background: linear-gradient(180deg, #9f65fe 0%, #5427b1 100%);
    color: #fff;
  }

  ul {
    margin-bottom: 15px;
    flex: 1;

    @media (min-width: 1920px) {
      margin-bottom: 55px;
    }
  }

  @media (min-width: 768px) {
    flex: 0 0 calc(50% - 10px);
    max-width: none;
  }

  @media (min-width: 1024px) {
    flex: 1 1 calc((100% - 32px) / 3);
    max-width: calc((100% - 32px) / 3);
    min-width: 0;
    padding: 40px 15px 25px;


    &.top--sale {
      padding-top: 40px;
    }
  }

  @media (min-width: 1920px) {
    flex: 1 1 calc((100% - 40px) / 3);
    max-width: calc((100% - 40px) / 3);
    min-width: 0;
    padding: 65px 50px;

    &.top--sale {
      padding-top: 65px;
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;

export const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 35px;
  line-height: 110%;
  margin-bottom: 20px;

  &:not(.top--sale) {
    background: linear-gradient(90deg, #9e2fff 0%, #3b0496 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 40px;
  }

  &.for-clients {
    font-weight: 700;
    font-size: 30px;
    line-height: 117%;
  }

  @media (min-width: 1024px) {
    font-size: 45px;
    line-height: 100%;

    &.for-clients {
      font-size: 45px;
    }

    &:not(.top--sale) {
      font-size: 45px;
    }

    
  }

  @media (min-width: 1920px) {
    font-size: 70px;
    margin-bottom: 35px;

    &.for-clients {
      font-size: 70px;
    }

    &:not(.top--sale) {
      font-size: 70px;
    }
  }
`;

export const FeaturesItems = styled.li`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }

  &.disabled,
  span {
    opacity: 0.85;
    text-decoration: line-through;
    color: rgba(128, 128, 128, 0.58);
    text-decoration-skip-ink: none;
  }

  &.top--sale.disabled,
  span {
    opacity: 0.85;
    text-decoration: line-through;
    color: rgba(255, 255, 255, 0.54);
    text-decoration-skip-ink: none;
  }

  @media (min-width: 1920px) {
    font-size: 20px;

    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  flex: 0 0 14px;
  inline-size: 14px;
  block-size: 14px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: #9e2fff;

  svg {
    fill: #fff;
  }

  &.top--sale {
    background-color: #fff;

    svg {
      fill: #9e2fff;
    }
  }

  &.disabled {
    opacity: 0.85;
    background-color: rgba(128, 128, 128, 0.58);
  }

  &.top--sale.disabled {
    opacity: 0.85;
    background-color: rgba(255, 255, 255, 0.54);
  }

  @media (min-width: 1920px) {
    flex: 0 0 22px;
    inline-size: 22px;
    block-size: 22px;
  }
`;
