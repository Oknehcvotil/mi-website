import styled from "@emotion/styled";

export const CaseInfoCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 385px;
`;

export const CardWrap = styled.div`
  position: relative;
  max-width: 390px;
  width: 100%;

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 190%;
    text-transform: uppercase;
    color: #020202;

    @media (min-width: 1920px) {
      font-size: 35px;
      line-height: 109%;
      margin-bottom: 15px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 3px solid #a066ff;
    border-radius: 16px;
    transform: rotate(-5deg);
    opacity: 0.4;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    max-width: 390px;

    &::before {
      transform: rotate(-16deg);
      border-radius: 0;
      height: 200px;
      top: 23px;
      opacity: 0.4;
      background: rgba(160, 102, 255, 0.05);
    }
  }

  @media (min-width: 1920px) {
    max-width: 1000px;

    &::before {
      height: 400px;
      border: 8px solid #a066ff;
      top: 60px;
    }
  }
`;

export const CardCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 390px;
  width: 100%;
  border-radius: 12px;
  backdrop-filter: blur(100px);
  box-shadow: inset 6px 11px 5px 0 #fff;
  border: 3px solid #a066ff;
  padding: 10px;
  color: #020202;
  background-color: #fff;
  z-index: 1;

  @media (min-width: 768px) {
    width: 360px;
  }

  @media (min-width: 1920px) {
    width: 890px;
    max-width: 100%;
    padding: 40px 80px;
    border: 8px solid #a066ff;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 5px;

  @media (min-width: 1920px) {
    margin-bottom: 40px;
  }
`;

export const VacList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 5px;

  li {
    border: 2px solid #fff;
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: rgba(255, 255, 255, 0.5);
    padding: 9px;

    p {
      font-weight: 700;
      font-size: 15px;
      line-height: 110%;
      background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &.cases--business-psyhology {
    li {
      p {
        font-size: 13px;
        line-height: 115%;
      }
    }
  }

  @media (min-width: 1920px) {
    gap: 20px;
    margin-bottom: 40px;

    li {
      padding: 11px;

      p {
        font-size: 25px;
        line-height: 140%;
      }
    }
  }
`;

export const TermsTitle = styled.h2`
  margin-bottom: 10px;
`;

export const TermsText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 83%;
  text-align: center;
  color: #000;
  margin-bottom: 15px;

  @media (min-width: 1920px) {
    font-size: 25px;
    line-height: 140%;
  }
`;

export const LineWrapper = styled.div`
  position: relative;
  width: 95%;
  margin: 0 auto;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 12px;
    height: 12px;
    background: inherit;
    transform: translateY(-50%) rotate(45deg);
  }

  &::before {
    left: -6px;
  }

  &::after {
    right: -6px;
  }
`;

export const LogoTitle = styled.h2`
  margin: 0 auto 10px;
  width: 100%;
  font-weight: 700;
  font-size: 30px;
  line-height: 107%;
  text-transform: uppercase;
  text-align: center;
  color: #020202;

  &.kutsenko-caseinfo-title {
    font-weight: 700;
    font-size: 35px;
    line-height: 114%;
    text-transform: uppercase;
    color: #020202;
  }

  &.fintech--nda-caseinfo-title {
    max-width: 300px;
    font-weight: 700;
    font-size: 30px;
    line-height: 107%;
    text-transform: uppercase;
    text-align: center;
    color: #020202;
  }

  &.hundredFtd-caseinfo-title {
    font-weight: 700;
    font-size: 40px;
    line-height: 100%;
    text-transform: uppercase;
    color: #020202;
    text-align: center;
  }

  &.digitalMarketingAgency-caseinfo-title {
    font-weight: 700;
    font-size: 30px;
    line-height: 107%;
    text-transform: uppercase;
    text-align: center;
    color: #020202;
  }

  &.ndaWeb-caseinfo-title {
    font-weight: 700;
    font-size: 30px;
    line-height: 107%;
    text-transform: uppercase;
    text-align: center;
    color: #020202;
  }
`;
