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
  }
`;
