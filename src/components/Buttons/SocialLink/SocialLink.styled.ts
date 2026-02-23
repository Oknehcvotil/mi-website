import styled from "@emotion/styled";

export const CustomSocialLink = styled.a`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a066ff;
  border-radius: 50%;

  transition: background-color 0.25s ease;

  &:hover,
  &:focus {
    background-color: #5427b1;
  }

  &.footer-links {
    width: 35px;
    height: 35px;
  }

  &.telegram-icon {
    svg {
      margin-right: 3px;
    }
  }

  &.team-card-social {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 35px;
    height: 35px;

    @media (min-width: 1920px) {
      position: relative;
      top: 0;
      right: 0;
      width: 55px;
      height: 55px;
      margin-left: 8px;

      &.team-card-social.social-irina,
      &.team-card-social.social-daria {
        top: 0;
        right: 0;
      }

      &.team-card-social.social-tatyana,
      &.team-card-social.social-maria,
      &.team-card-social.social-anastasia {
        top: 0;
        left: 0;
      }
    }
  }

  @media (min-width: 768px) {
    &.team-card-social.social-irina {
      top: 125px;
      right: -10px;
    }

    &.team-card-social.social-tatyana {
      top: 150px;
      left: 120px;
    }

    &.team-card-social.social-maria {
      top: 50px;
      left: 200px;
    }

    &.team-card-social.social-anastasia {
      top: 25px;
      left: 240px;
    }

    &.team-card-social.social-daria {
      top: -30px;
      right: 75px;
    }
  }
`;
