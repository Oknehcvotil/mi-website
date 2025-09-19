import styled from "@emotion/styled";

export const MapPointBtn = styled.button<{ xPct: number; yPct: number }>`
  position: absolute;
  left: ${({ xPct }) => `${xPct}%`};
  top: ${({ yPct }) => `${yPct}%`};
  z-index: 10;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  background-color: red;
  cursor: pointer;
  overflow: visible;
`;

export const MapPoint = styled.div<{ xPct: number; yPct: number }>`
  position: absolute;
  left: ${({ xPct }) => `${xPct}%`};
  top: ${({ yPct }) => `${yPct}%`};
  z-index: 5;
  overflow: visible;
  width: 100%;
`;

export const PopupsWrapper = styled.div`
  position: absolute;
  top: -33px;
  left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const CountryPopup = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  border-radius: 8px;
  padding: 3px 4px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  position: relative;

  img {
    width: 21px;
    height: 21px;
  }

  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    color: #000;
  }

  /* &::after {
    content: "";
    position: absolute;
    left: 8%;
    bottom: -12%;
    width: 30%;
    height: 20%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #fff;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
  } */
`;

export const ClientPopup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 3px 4px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #fff;

  img {
    width: 80px;
    height: 25px;
  }
`;
