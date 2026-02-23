import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SectionDesktop = styled(motion.div)`
  display: none;

  @media (min-width: 1920px) {
    display: block;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
`;

export const TeamCardContent = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 340px;
  width: auto;

  &.card-content-irina {
    top: 110px;
    left: 900px;
  }

  &.card-content-tatyana {
    top: 160px;
    left: 100px;
  }

  &.card-content-maria {
    top: 160px;
    right: 430px;
  }

  &.card-content-anastasia {
    top: 140px;
    left: 500px;
  }

  &.card-content-daria {
    top: 190px;
    right: 100px;
  }
`;
