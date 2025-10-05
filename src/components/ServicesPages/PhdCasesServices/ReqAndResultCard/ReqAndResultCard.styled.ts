import styled from "@emotion/styled";

export const ReqAndResultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 385px;
`;

export const ReqAndResultCardWrap = styled.div`
  position: relative;
  max-width: 390px;
  width: 100%;

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

export const ReqAndResultCardCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 390px;
  width: 100%;
  border-radius: 12px;
  backdrop-filter: blur(100px);
  box-shadow: inset 6px 11px 5px 0 #fff;
  border: 3px solid #a066ff;
  padding: 20px;
  color: #020202;
  background-color: #fff;
  z-index: 1;

  h4 {
    font-weight: 700;
    font-size: 20px;
    line-height: 190%;
    text-transform: uppercase;
  }
`;

export const ReqCont = styled.div`
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.5);
  margin-bottom: 15px;

  p {
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ResultCont = styled.div`
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.5);

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    color: #020202;
  }
`;
