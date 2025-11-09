import styled from "@emotion/styled";

export const StatsWrap = styled.div`
  position: absolute;
  bottom: 100px;
  left: 35px;
  border-radius: 13px;
  background: linear-gradient(
    90deg,
    #a066ff 52.83%,
    rgba(160, 102, 255, 0) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 11px;
  gap: 10px;

  strong {
    font-weight: 500;
    font-size: 40px;
    line-height: 100%;
    color: #fff;
  }

  span {
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    max-width: 120px;
  }

  &.badge-left {
    bottom: 125px;
    left: 20px;
  }

  &.badge-right {
    bottom: 50px;
    left: 140px;
  }
`;
