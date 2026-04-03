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
      bottom: 0;
      right: 105px;
      z-index: 1;
    }

    &.card-daria {
      position: absolute;
      bottom: 0;
      right: 0;
    }

    &.card-maria {
      position: relative;
      z-index: 2;
    }
  }

  @media (min-width: 1024px) {
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
      bottom: 0;
      right: 255px;
      z-index: 1;
    }
  }
`;
