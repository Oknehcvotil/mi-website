import styled from "@emotion/styled";

export const AdvSection = styled.div`
  padding: 30px 0;
  background: rgba(243, 244, 249, 0.62);

  @media (min-width: 768px) {
    padding: 40px 0;
  }

  @media (min-width: 1920px) {
    padding: 80px 0 50px;
  }
`;

export const AdvList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 34px;

  @media (min-width: 768px) {
    gap: 20px;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 1920px) {
    gap: 0;
    justify-content: space-between;
  }
`;
