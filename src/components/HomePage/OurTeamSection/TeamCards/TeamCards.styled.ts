import styled from "@emotion/styled";

export const CardCont = styled.div`
  position: relative;

  @media (min-width: 768px) {
    &.card-tatyana {
      position: absolute;
      bottom: 0;
      right: 0;
    }

    &.card-anastasia {
      position: absolute;
      bottom: 30px;
      right: -30px;
      z-index: 1;
    }

    &.card-daria {
      position: absolute;
      bottom: 0;
      right: 105px;
    }

    &.card-maria {
      position: relative;
      z-index: 2;
      padding-left: 60px;
    }
  }

  @media (min-width: 1024px) {
    &.card-maria {
      padding-left: 190px;
      margin-bottom: 30px;
    }

    &.card-irina {
      padding-left: 85px;
    }

    &.card-tatyana {
      position: absolute;
      bottom: 0;
      right: 130px;
    }

    &.card-anastasia {
      position: absolute;
      bottom: 15px;
      right: 35px;
      z-index: 0;
    }

    &.card-daria {
      position: absolute;
      bottom: 30px;
      right: 130px;
    }
  }

  @media (min-width: 1280px) {
    &.card-irina {
      padding-left: 145px;
    }

    &.card-anastasia {
      bottom: -30px;
      right: 180px;
    }

    &.card-maria {
      padding-left: 280px;
      margin-bottom: 30px;
    }

    &.card-daria {
      position: absolute;
      bottom: 30px;
      right: 110px;
      z-index: 2;
    }
  }
`;
