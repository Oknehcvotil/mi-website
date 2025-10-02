import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const EligibilityWrap = styled(motion.section)`
  background-color: rgba(243, 244, 249, 0.62);
  padding: 20px 0 40px 0;
`;

export const ConsultLinkCont = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

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
`;
