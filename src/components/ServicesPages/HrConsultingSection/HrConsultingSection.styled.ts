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

  @media (min-width: 768px) {
    &::before {
      height: 36px;
    }
  }
`;

export const HrTitle = styled.h2`
  font-family: "Unbounded";
  font-weight: 500;
  font-size: 26px;
  line-height: 130%;
  color: #020202;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 40px;
  }

  @media (min-width: 1280px) {
    font-size: 45px;
  }

  @media (min-width: 1920px) {
    font-size: 80px;
    margin-bottom: 30px;
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

  @media (min-width: 1024px) {
    max-width: 1024px;
    padding: 0 30px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 65px;
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 100px;
  }
`;

export const HrLeadText = styled.div`
  max-width: 390px;
  padding: 0 15px;
  margin: 0 auto;

  h4 {
    font-size: 15px;
    line-height: 130%;
    margin-bottom: 15px;
    color: #8a38f5;
  }

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

    h4 {
      font-size: 15px;
      line-height: 130%;
      margin-bottom: 15px;
      color: #8a38f5;
    }

    p {
      font-size: 15px;
      line-height: 130%;
    }
  }

  @media (min-width: 1024px) {
    max-width: none;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    margin: 0;
    width: 100%;
    margin-right: auto;
    padding-bottom: 15px;

    h4 {
      font-size: 23px;
      line-height: 130%;
      margin-bottom: 15px;
      color: #8a38f5;
    }

    p {
      font-size: 23px;
      line-height: 130%;
      max-width: 845px;
    }
  }

  @media (min-width: 1920px) {
    max-width: 1115px;
    h4 {
      font-size: 35px;
      margin-bottom: 35px;
      color: #8a38f5;
    }

    p {
      font-size: 35px;
      line-height: 130%;
      margin-bottom: 60px;
    }
  }
`;

export const HrImgCont = styled(motion.div)`
  padding: 35px 80px 65px;
  max-width: 390px;
  width: 100%;
  margin: 0 auto;

  picture {
    display: block;
    width: 100%;
  }

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

  @media (min-width: 1024px) {
    flex: 0 0 245px;
    max-width: 245px;
  }

  @media (min-width: 1920px) {
    flex: 0 0 620px;
    max-width: 620px;
  }
`;

export const HrAdditionalCont = styled.div`
  background: #f3f4f9;
  padding: 20px 0 30px;

  @media (min-width: 1280px) {
    padding: 20px 0 50px;
  }

  @media (min-width: 1920px) {
    padding: 60px 0 70px;
  }
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

  @media (min-width: 1920px) {
    font-size: 80px;
    margin-bottom: 55px;
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
