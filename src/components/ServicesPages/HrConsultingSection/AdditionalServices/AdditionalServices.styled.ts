import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const AdditionalServicesList = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  padding: 0 15px;
  max-width: 390px;
  width: 100%;
  margin: 0 auto 25px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
    gap: 10px;
    max-width: 768px;
    padding: 0 25px;
    margin: 0 auto 20px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    max-width: 1024px;
    padding: 0 30px;

    &.is-expanded {
      grid-template-columns: repeat(16, minmax(0, 1fr));
      row-gap: 10px;

      > li:nth-of-type(-n + 4) {
        grid-column: span 4;
      }

      > li:nth-of-type(5) {
        grid-column: 2 / span 4;
      }

      > li:nth-of-type(6) {
        grid-column: 6 / span 5;
      }

      > li:nth-of-type(7) {
        grid-column: 11 / span 4;
      }

      > li:nth-of-type(8) {
        grid-column: 3 / span 4;
      }

      > li:nth-of-type(9) {
        grid-column: 7 / span 5;
      }

      > li:nth-of-type(10) {
        grid-column: 12 / span 4;
      }
    }
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    max-width: 1120px;
    padding: 0;

    &.is-expanded {
      display: grid;
      grid-template-columns: repeat(98, minmax(0, 1fr));
      justify-content: center;
      column-gap: 0;
      row-gap: 10px;

      > li:nth-of-type(n) {
        grid-column: auto;
        justify-self: stretch;
        width: 100%;
      }

      > li:nth-of-type(1) {
        grid-row: 1;
        grid-column: 6 / span 23;
      }

      > li:nth-of-type(2) {
        grid-row: 1;
        grid-column: 30 / span 23;
      }

      > li:nth-of-type(3) {
        grid-row: 1;
        grid-column: 55 / span 22;
      }

      > li:nth-of-type(4) {
        grid-row: 1;
        grid-column: 79 / span 16;
      }

      > li:nth-of-type(5) {
        grid-row: 2;
        grid-column: 3 / span 23;
      }

      > li:nth-of-type(6) {
        grid-row: 2;
        grid-column: 28 / span 27;
      }

      > li:nth-of-type(7) {
        grid-row: 2;
        grid-column: 56 / span 19;
      }

      > li:nth-of-type(8) {
        grid-row: 2;
        grid-column: 76 / span 23;
      }

      > li:nth-of-type(9) {
        grid-row: 3;
        grid-column: 25 / span 26;
      }

      > li:nth-of-type(10) {
        grid-row: 3;
        grid-column: 53 / span 22;
      }
    }
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 45px;

    &.is-expanded {
      grid-template-columns: repeat(12, minmax(0, 1fr));
      row-gap: 10px;

      > li {
        justify-self: center;
      }

      > li:nth-of-type(1) {
        grid-column: 1 / span 6;
      }

      > li:nth-of-type(2) {
        grid-column: 7 / span 6;
      }

      > li:nth-of-type(3) {
        grid-column: 1 / span 5;
      }

      > li:nth-of-type(4) {
        grid-column: 6 / span 3;
      }

      > li:nth-of-type(5) {
        grid-column: 9 / span 4;
      }

      > li:nth-of-type(6) {
        grid-column: 1 / span 5;
      }

      > li:nth-of-type(7) {
        grid-column: 6 / span 3;
      }

      > li:nth-of-type(8) {
        grid-column: 9 / span 4;
      }

      > li:nth-of-type(9) {
        grid-column: 3 / span 4;
      }

      > li:nth-of-type(10) {
        grid-column: 7 / span 4;
      }
    }
  }
`;

export const AdditionalServicesItems = styled(motion.li)`
  border: 5px solid #fff;
  border-radius: 10px;
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.5);
  padding: 15px 10px;
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 13px;
  line-height: 129%;
  text-align: center;
  color: #14111a;

  @media (min-width: 768px) {
    min-height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-size: 12px;
    line-height: 120%;
  }

  @media (min-width: 1024px) {
    min-height: 42px;
    padding: 8px 10px;
    font-size: 11px;
    line-height: 118%;
  }

  @media (min-width: 1280px) {
    font-size: 13px;
  }

  @media (min-width: 1920px) {
    font-size: 28px;
    line-height: 129%;
  }
`;
