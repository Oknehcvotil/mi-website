import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HrSectionWrap = styled(motion.section)`
  padding-top: 20px;
`;

export const HrTitle = styled.h2`
  font-family: "Unbounded";
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  color: #020202;
  margin-bottom: 15px;
`;

export const HrLeadText = styled.div`
  max-width: 390px;
  padding: 0 15px;
  margin: 0 auto;
  p {
    margin-bottom: 20px;
  }
`;

export const HrImgCont = styled(motion.div)`
  padding: 35px 80px 65px;
  max-width: 390px;
  width: 100%;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }
`;

export const HrAdditionalCont = styled.div`
  background: #f3f4f9;
  padding: 20px 0 30px;
`;

export const HrAdditionalTitle = styled.h3`
  font-family: "Unbounded";
  font-weight: 500;
  font-size: 25px;
  line-height: 31px;
  text-transform: uppercase;
  text-align: center;
  color: #020202;
  margin: 0 auto 15px;
  max-width: 360px;
  width: 100%;
`;
