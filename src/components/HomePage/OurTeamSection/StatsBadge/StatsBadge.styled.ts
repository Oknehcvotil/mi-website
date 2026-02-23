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

  @media (min-width: 768px) {
    &.badge-left.irina {
      bottom: 150px;
      left: 30px;
    }

    &.badge-right.irina {
      bottom: 70px;
      left: 210px;
      z-index: 25;
    }

    &.tatyana {
      bottom: 90px;
      left: 490px;
    }

    &.maria {
      bottom: 125px;
      left: 25px;
      z-index: 2;

      span {
        max-width: 160px;
      }
    }

    &.anastasia {
      left: 280px;
      bottom: 65px;
      z-index: 2;
    }

    &.daria {
      z-index: 2;
      max-width: 240px;
      bottom: 125px;
      right: 0px;
      left: auto;
    }
  }

  @media (min-width: 1920px) {
    padding: 5px 0px 5px 15px;
    width: 100%;
    strong {
      font-size: 66px;
    }

    span {
      font-size: 18px;
    }

    &.badge-left.irina {
      bottom: 300px;
      left: 750px;
      max-width: 350px;
    }

    &.badge-right.irina {
      bottom: 135px;
      left: 950px;
      max-width: 280px;
    }

    &.tatyana {
      bottom: 135px;
      left: 120px;
      max-width: 380px;
    }

    &.maria {
      bottom: 290px;
      left: 1220px;
      max-width: 310px;

      span {
        max-width: 150px;
      }
    }

    &.anastasia {
      left: 460px;
      bottom: 240px;
      max-width: 290px;
      flex-direction: column;
      align-items: flex-start;
      gap: 0;

      span {
        max-width: 180px;
      }
    }

    &.daria {
      right: 80px;
      bottom: 150px;
      max-width: 290px;
    }
  }
`;
