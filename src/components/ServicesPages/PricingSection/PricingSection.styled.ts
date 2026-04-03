import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const PricingSectionWrap = styled(motion.section)`
  padding: 30px;
  background-color: #f3f4f9;

  @media (min-width: 1920px) {
    padding: 75px 0;
  }
`;

export const CardsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    align-items: stretch;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    gap: 16px;
  }

  @media (min-width: 1920px) {
    flex-wrap: nowrap;
    gap: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    &.full-width-last > li:last-child {
      flex: 0 0 100%;
      max-width: 100%;
    }

    &.full-width-last > li:last-child > div {
      max-width: 715px;
      margin: 0 auto;
    }

    &.full-width-last > li:last-child h2 {
      text-align: center;
    }

    &.full-width-last-clients > li:last-child > div {
      max-width: 510px;
    }

    &.full-width-last-clients > li:last-child > div > a {
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;
