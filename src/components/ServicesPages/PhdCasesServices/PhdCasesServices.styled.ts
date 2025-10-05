import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const PhdCasesWrapper = styled(motion.section)`
  padding: 40px 0 20px;
`;

export const PhdCasesTitle = styled(motion.h2)`
  line-height: 100%;
  font-family: "Unbounded";
  font-weight: 700;
  font-size: 35px;
  text-transform: uppercase;
  text-align: center;
  color: #020202;
  margin: 0 auto 20px;

  span {
    color: #a066ff;
  }
`;
