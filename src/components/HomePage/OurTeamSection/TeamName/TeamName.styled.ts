import styled from "@emotion/styled";


export const NameCont = styled.div`
  position: absolute;
  top: 20px;
  font-weight: 700;
  font-size: 20px;
  color: #000;
  line-height: 112%;

  &.team-irina {
    left: 50px;
  }

  &.team-tatyana {
    max-width: 145px;
    width: 100%;
    left: 8px;
    top: 70px;
  }

  &.team-maria {
    max-width: 130px;
    width: 100%;
    left: 8px;
  }

  &.team-anastasia {
    max-width: 130px;
    width: 100%;
    top: 70px;
    right: 0;
  }

  &.team-daria {
    left: 15px;
    max-width: 130px;
    width: 100%;
  }

  p {
    font-weight: 500;
    font-size: 15px;
  }

  &::before {
    content: "";
    position: absolute;
    left: -8px;
    top: 0;
    height: 100%;
    border: 3px solid #a066ff;
  }

  @media (min-width: 768px) {
    &.team-irina {
      top: 30px;
      right: 230px;
    }

    &.team-tatyana {
      left: 18px;
      top: 145px;
    }

    &.team-maria {
      top: 50px;
      left: 130px;
    }

    &.team-anastasia {
      top: 30px;
      left: 300px;
    }

    &.team-daria {
      left: 100px;
      top: -35px;
    }
  }

  

  @media (min-width: 1024px) {
    &::before {
      left: unset;
      right: -8px;
    }

    &.team-irina {
      top: 120px;
      left: 410px;
      right: unset;

      &::before {
        right: unset;
        left: -10px;
      }
    }

    &.team-tatyana {
      left: 8px;
      top: 145px;
    }

    &.team-maria {
      top: 170px;
      left: 130px;
    }

    &.team-anastasia {
      top: 175px;
      left: 10px;
    }

    &.team-daria {
      left: 390px;
      top: 80px;
    }
  }

  @media (min-width: 1280px) {
    &::before {
      left: unset;
      right: -8px;
    }

    &.team-irina {
      top: 180px;
      left: 150px;
      right: unset;

      &::before {
        right: unset;
        left: -10px;
      }
    }

    &.team-tatyana {
      left: 8px;
      top: 145px;
    }

    &.team-maria {
      top: 140px;
      left: 250px;
    }

    &.team-anastasia {
      top: 175px;
      left: 410px;
    }

    &.team-daria {
      left: 365px;
      top: 80px;
    }
  }

  @media (min-width: 1920px) {
    font-weight: 500;
    line-height: 112%;
    position: relative;
    max-width: 240px;
    gap: 0;

    p {
      font-size: 20px;
    }

    &.team-irina,
    &.team-tatyana,
    &.team-maria,
    &.team-anastasia,
    &.team-daria {
      top: 0;
      left: 0;
      max-width: 190px;
    }

    &.team-maria {
      max-width: 160px;
    }

    &.team-anastasia {
      max-width: 170px;
    }

    h3 {
      font-weight: 700;
      font-size: 26px;
    }

    &::before {
      left: -15px;
      right: unset;
    }
  }
`;
