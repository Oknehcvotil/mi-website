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

  &.top--sale {
    padding-top: 50px;
    background: linear-gradient(180deg, #9f65fe 0%, #5427b1 100%);
    color: #fff;
  }

  ul {
    margin-bottom: 15px;
  }
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
`;
