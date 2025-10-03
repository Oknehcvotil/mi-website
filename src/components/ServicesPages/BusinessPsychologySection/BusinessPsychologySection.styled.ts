import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const PsyhologyWrap = styled(motion.section)`
  background: rgba(255, 255, 255, 0.4);
  padding: 40px 0;
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
`;

export const PsyhologyImgCont = styled.div`
  padding: 20px 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 250px;
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }
`;
