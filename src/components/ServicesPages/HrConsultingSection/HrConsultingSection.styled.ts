import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HrSectionWrap = styled(motion.section)`
  padding-top: 60px;
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

export const HrTitle = styled.h2`
  font-family: "Unbounded";
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  color: #020202;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const HrLeadCont = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 768px;
    margin: 0 auto;
    padding: 0 25px;
  }
`;

export const HrLeadText = styled.div`
  max-width: 390px;
  padding: 0 15px;
  margin: 0 auto;
  p {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    max-width: none;
    margin: 0;
    max-width: 500px;
    width: 100%;
    margin-right: auto;
    padding: 0;
    p {
      font-size: 20px;
      line-height: 130%;
    }
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

  @media (min-width: 768px) {
    flex: 0 0 220px;
    padding: 20px 0;
    margin: 0;
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

  @media (min-width: 768px) {
    max-width: none;
    font-size: 35px;
  }
`;

export const CollapsBtn = styled.button`
  font-weight: 500;
  font-size: 20px;
  line-height: 75%;
  color: #020202;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 auto;
`;
