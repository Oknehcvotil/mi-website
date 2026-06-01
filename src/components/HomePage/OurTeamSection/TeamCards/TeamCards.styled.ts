import styled from "@emotion/styled";

export const CardCont = styled.div`
  position: relative;

  picture {
    display: block;
  }

  img {
    display: block;
    height: auto;
  }

  @media (min-width: 768px) {
    img.photo-irina {
      width: 434px;
    }

    img.photo-anastasia {
      width: 499px;
    }

    img.photo-maria {
      width: 484px;
    }

    img.photo-daria {
      width: 349px;
    }

    &.card-tatyana {
      position: absolute;
      bottom: 0;
      right: 0;
    }

    &.card-maria {
      position: relative;
      z-index: 2;
      padding-left: 60px;
    }

    &.card-anastasia {
      position: absolute;
      bottom: 30px;
      right: -30px;
      z-index: 1;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      transform: translateZ(0);
    }

    &.card-daria {
      position: absolute;
      bottom: 0;
      right: 105px;
    }
  }

  @media (min-width: 1024px) {
    img.photo-irina {
      width: 456px;
    }

    img.photo-anastasia {
      width: 501px;
    }

    img.photo-maria {
      width: 484px;
    }

    img.photo-daria {
      width: 462px;
    }

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
      z-index: 1;
    }

    &.card-daria {
      position: absolute;
      bottom: 30px;
      right: 130px;
    }
  }

  @media (min-width: 1280px) {
    img.photo-irina {
      width: 508px;
    }

    img.photo-anastasia {
      width: 553px;
    }

    img.photo-maria {
      width: 507px;
    }

    img.photo-daria {
      width: 611px;
    }

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
