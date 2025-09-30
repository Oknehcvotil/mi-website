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
  padding: 10px 20px;
  color: #020202;
  background-color: #fff;
  z-index: 1;
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
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
      line-height: 100%;
      background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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
`;

export const LineWrapper = styled.div`
  position: relative;
  width: 100%;
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
