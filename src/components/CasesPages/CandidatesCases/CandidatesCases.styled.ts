import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const CandidatesSectionWrap = styled(motion.section)`
  padding-top: 105px;
`;

export const CandidatesCasesTitle = styled(motion.h1)`
  font-family: "Unbounded";
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-bottom: 30px;
`;

export const MergedCasesCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
`
