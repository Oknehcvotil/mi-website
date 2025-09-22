import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const PopupsWrapper = styled(motion.div)<{ x: number; y: number }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  left: ${({ x }) => `${Math.round(x)}px`};
  top: ${({ y }) => `${Math.round(y)}px`};

  &.lang-en.popup-britain,
  &.lang-en.popup-hungary,
  &.lang-en.popup-croatia {
    left: ${({ x }) => `${Math.round(x) + 2}px`};
  }

  &.lang-en.popup-portugal {
    left: ${({ x }) => `${Math.round(x) + 3}px`};
  }

  &.popup-uae,
  &.popup-turkey {
    flex-direction: row-reverse;
    .popup--country {
      flex-direction: row-reverse;

      &::after {
        content: "";
        position: absolute;
        bottom: 26px;
        left: 58%;
        transform: rotate(135deg);
      }
    }
  }

  &.lang-en.popup-turkey {
    left: ${({ x }) => x + 15}px;
  }

  &.lang-en.popup-czech {
    flex-direction: row-reverse;
    left: 1px;

    .popup--country {
      flex-direction: row-reverse;

      &::after {
        content: "";
        left: 74%;
      }
    }
  }
`;

export const CountryPopup = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 3px;
  border-radius: 8px;
  padding: 3px 4px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  position: relative;
  height: 35px;

  img {
    width: 21px;
    height: 21px;
  }

  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    color: #000;
  }

  &::after {
    content: "";
    height: 15px;
    width: 15px;
    background-color: inherit;
    border: inherit;
    position: absolute;
    bottom: -4px;
    left: 15%;
    clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
    transform: rotate(-45deg);
    border-radius: 0 0 0 0.25em;
  }
`;

export const ClientPopup = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 3px 4px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  height: 35px;
  width: 85px;

  img {
    max-height: 30px;
    max-width: 60px;
  }
`;
