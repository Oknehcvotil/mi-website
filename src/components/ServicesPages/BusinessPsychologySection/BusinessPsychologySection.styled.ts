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
`;

export const PsyhologyInner = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
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
    h2 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
      line-height: 130%;
    }
  }
`;

export const PsyhologyImgCont = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    img {
      max-width: 220px;
      width: 100%;
      height: auto;
      display: block;
      object-fit: contain;
    }
  }
`;
