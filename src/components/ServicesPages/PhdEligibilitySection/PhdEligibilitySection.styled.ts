import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const glowLeft = keyframes`
  0% {
    transform: translate3d(-8%, -6%, 0) scale(1);
  }

  50% {
    transform: translate3d(4%, 3%, 0) scale(1.06);
  }

  100% {
    transform: translate3d(-3%, 6%, 0) scale(0.98);
  }
`;

const glowRight = keyframes`
  0% {
    transform: translate3d(8%, 2%, 0) scale(1);
  }

  50% {
    transform: translate3d(-5%, -4%, 0) scale(1.08);
  }

  100% {
    transform: translate3d(2%, 5%, 0) scale(1);
  }
`;

export const EligibilityWrap = styled(motion.section)`
  background-color: rgba(243, 244, 249, 0.62);
  padding: 20px 0 40px 0;
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 999px;
    filter: blur(40px);
    opacity: 0.55;
    pointer-events: none;
    z-index: 0;
  }

  &::before {
    width: 220px;
    height: 220px;
    top: 22px;
    left: -74px;
    background: radial-gradient(
      circle,
      rgba(160, 102, 255, 0.2) 0%,
      rgba(160, 102, 255, 0) 72%
    );
    animation: ${glowLeft} 16s ease-in-out infinite;
  }

  &::after {
    width: 260px;
    height: 260px;
    right: -95px;
    bottom: 10px;
    background: radial-gradient(
      circle,
      rgba(84, 39, 177, 0.18) 0%,
      rgba(84, 39, 177, 0) 74%
    );
    animation: ${glowRight} 18s ease-in-out infinite;
  }

  > div {
    position: relative;
    z-index: 1;
  }

  @media (min-width: 768px) {
    padding: 40px 0;
  }

  @media (min-width: 1920px) {
    padding: 56px 0 64px;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      animation: none;
    }
  }
`;

export const EligibilityCardsCont = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    align-items: stretch;
    max-width: 768px;
    width: 100%;
    margin: 0 auto;

    > div {
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 1024px) {
    max-width: 100%;
    gap: 32px;
  }

  @media (min-width: 1920px) {
    max-width: 1720px;
    gap: 96px;
    align-items: start;
  }
`;

export const ConsultLinkCont = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  h2 {
    font-family: "Unbounded";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #020202;
    backdrop-filter: blur(25px);
    margin-bottom: 20px;
    text-align: center;
    max-width: 320px;
    width: 100%;

    span {
      font-weight: 700;
      color: #a066ff;
    }
  }

  @media (min-width: 768px) {
    margin-top: 20px;

    h2 {
      max-width: none;
      font-size: 20px;
      line-height: 130%;
    }
  }

  @media (min-width: 1024px) {
    h2 {
      max-width: 730px;
    }
  }

  @media (min-width: 1920px) {
    margin-top: 80px;

    > div {
      width: auto;
    }

    h2 {
      max-width: none;
      font-size: 40px;
      line-height: 138%;
      margin-bottom: 35px;
    }
  }
`;
