import styled from "@emotion/styled";

export const StyledCardsWrapper = styled.div<{ $isSingle?: boolean }>`
  @media (min-width: 768px) {
    padding: 70px 0 0 0;
    display: flex;
    gap: 25px;
    max-width: 768px;
    margin: 0 auto;
    align-items: center;
    justify-content: ${({ $isSingle }) =>
      $isSingle ? "center" : "space-around"};
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
    gap: 110px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;
