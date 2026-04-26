import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const PsyhologyWrap = styled(motion.section)`
  background: rgba(255, 255, 255, 0.4);
  padding: 40px 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 17px;
    background: #8a38f5;
  }

  @media (min-width: 1920px) {
    padding: 110px 0 80px;
    &::before {
      content: "";
      height: 36px;
    }
  }
`;

export const PsyhologyInner = styled.div`
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    gap: 24px;
  }

  @media (min-width: 1024px) {
    align-items: center;
    gap: 30px;
  }

  @media (min-width: 1920px) {
    gap: 60px;
  }
`;

export const PsyhologyLeadCont = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  color: #020202;

  h2 {
    font-family: "Unbounded";
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    flex: 1 1 0;
    min-width: 0;
    max-width: none;

    h2 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
      line-height: 130%;
    }
  }

  @media (min-width: 1280px) {
    h2 {
      font-size: 45px;
    }

    p {
      font-size: 23px;
      max-width: 730px;
    }
  }

  @media (min-width: 1920px) {
    h2 {
      font-size: 80px;
      margin-bottom: 30px;
    }

    p {
      font-size: 40px;
      line-height: 130%;
      max-width: 990px;
    }
  }
`;

export const PsyhologyImgCont = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    flex: 0 0 280px;
    width: 280px;
    margin-left: auto;

    picture {
      display: block;
      width: 100%;
    }

    img {
      width: 100%;
      display: block;
      object-fit: contain;
    }
  }

  @media (min-width: 1024px) {
    flex-basis: 374px;
    width: 374px;
  }

  @media (min-width: 1920px) {
    flex-basis: 672px;
    width: 672px;
  }
`;
