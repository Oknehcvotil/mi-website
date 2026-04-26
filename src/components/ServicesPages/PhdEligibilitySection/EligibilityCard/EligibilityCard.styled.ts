import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const iconFloat = keyframes`
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-2px);
  }
`;

export const EligibilityTitle = styled(motion.h3)`
  font-family: "Unbounded";
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-transform: uppercase;
  text-align: center;
  color: #020202;
  backdrop-filter: blur(25px);
  margin-bottom: 25px;

  span {
    color: #9e2fff;
  }

  @media (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 20px;
  }

  @media (min-width: 1280px) {
    font-size: 22px;
    margin-bottom: 20px;
  }

  @media (min-width: 1920px) {
    font-size: 40px;
    line-height: 130%;
    margin-bottom: 55px;
  }
`;

export const EligibilityCardList = styled(motion.ul)`
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    flex: 1;
  }

  @media (min-width: 1920px) {
    display: grid;
    grid-template-columns: repeat(2, 385px);
    grid-auto-rows: 130px;
    gap: 18px 20px;
    align-items: stretch;

    &.zero-to-pro {
      li:nth-of-type(2) {
        order: 3;
      }

      li:nth-of-type(3) {
        order: 2;
      }
    }
  }
`;

export const EligibilityItem = styled(motion.li)`
  border: 2px solid;
  border-radius: 10px;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.5);
  border-color: rgba(215, 215, 215, 0.8);
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  color: #020202;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  transition:
    transform 0.32s ease,
    box-shadow 0.32s ease,
    border-color 0.32s ease,
    background 0.32s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        120deg,
        rgba(255, 255, 255, 0) 20%,
        rgba(160, 102, 255, 0.12) 50%,
        rgba(255, 255, 255, 0) 80%
      );
    transform: translateX(-140%);
    transition: transform 0.7s ease;
    pointer-events: none;
  }

  svg {
    flex-shrink: 0;
    color: #8345f5;
    animation: ${iconFloat} 4.6s ease-in-out infinite;
  }

  p {
    max-width: 230px;
    width: 100%;
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover,
    &:focus-within {
      transform: translateY(-3px);
      background: rgba(255, 255, 255, 0.82);
      border-color: rgba(160, 102, 255, 0.42);
      box-shadow: 0 14px 28px rgba(84, 39, 177, 0.1);

      &::before {
        transform: translateX(140%);
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 340px;
    width: 100%;
    height: 85px;
    box-sizing: border-box;
    font-size: 13px;
    line-height: 120%;
    gap: 20px;
    border-radius: 8px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p {
      max-width: 100%;
      font-size: 15px;
      line-height: 130%;
    }

    &:not(:last-of-type) {
      margin-bottom: 12px;
    }
  }

  @media (min-width: 1024px) {
    max-width: none;
  }

  @media (min-width: 1920px) {
    width: 385px;
    max-width: 385px;
    height: 130px;
    padding: 18px 20px;
    gap: 16px;
    border-radius: 14px;

    &:not(:last-of-type) {
      margin-bottom: 0;
    }

    p {
      font-size: 16px;
      line-height: 130%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::before {
      transition: none;
    }

    svg {
      animation: none;
    }
  }
`;
