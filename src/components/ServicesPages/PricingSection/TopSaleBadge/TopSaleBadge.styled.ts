import styled from "@emotion/styled";

export const BadgeWrap = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  color: #fff;

  @media (min-width: 1920px) {
    font-size: 20px;

    svg{
      width: 24px;
      height: 24px;
    }
  }
`;
