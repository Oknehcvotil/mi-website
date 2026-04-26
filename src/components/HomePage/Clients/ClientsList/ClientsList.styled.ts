import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const List = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin: 0 auto 20px;

  @media (min-width: 768px) {
    margin-bottom: 15px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    max-width: 828px;
    gap: 12px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    width: 100%;
    max-width: 100%;
    gap: 12px;
  }

  @media (min-width: 1920px) {
    margin-bottom: 0;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 16px;
    justify-items: center;
    align-items: center;
  }
`;

export const ListItem = styled(motion.li)`
  border-radius: 10px;
  background-color: #fff;
  border: 2px solid #d8dadc;
  flex-basis: calc((100% - 16px) / 2);
  min-height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;

  img {
    display: block;
    max-width: 100%;
    max-height: 34px;
    width: auto;
    height: auto;
    object-fit: contain;
  }

  @media (min-width: 768px) {
    flex-basis: calc((100% - 48px) / 4);
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    flex-basis: auto;
    width: 156px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    flex-basis: calc((100% - 60px) / 6);
    width: calc((100% - 60px) / 6);
  }

  @media (min-width: 1920px) {
    flex-basis: auto;
    width: 100%;
    min-height: 97px;
    grid-column: span 2;

    img {
      max-height: 52px;
    }

    &:nth-of-type(7) {
      grid-column: 2 / span 2;
    }
    &:nth-of-type(8) {
      grid-column: 4 / span 2;
    }
    &:nth-of-type(9) {
      grid-column: 6 / span 2;
    }
    &:nth-of-type(10) {
      grid-column: 8 / span 2;
    }
    &:nth-of-type(11) {
      grid-column: 10 / span 2;
    }

    &:nth-of-type(12) {
      grid-column: 4 / span 2;
    }
    &:nth-of-type(13) {
      grid-column: 6 / span 2;
    }
    &:nth-of-type(14) {
      grid-column: 8 / span 2;
    }
  }
`;
