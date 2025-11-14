import styled from "@emotion/styled";

export const PsiCustomLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 45px;
  height: 100%;
  max-width: 90px;
  width: 100%;
  border: 2px solid #138af9;
  border-radius: 8px;

  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: #000;
  transition: background 0.3s ease, box-shadow 0.2s ease;

  &.psiMi-seciton--btn {
    display: inline-flex;
    width: fit-content;
    font-weight: 700;
    line-height: 130%;
    color: #020202;
    max-width: 100%;
    padding: 0 12px;
  }

  &:hover,
  &:focus {
    background: linear-gradient(90deg, #138af9 0%, #6966ff 100%);
    color: #fff;
  }

  &:active {
    box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #138af9;
    transform: scale(0.97);
    color: #fff;
  }
`;
