import styled from "@emotion/styled";

export const ConsultBtnStyled = styled.a<{
  variant: string;
  maxWidth?: string;
}>`
  font-weight: 500;
  font-size: 14px;
  line-height: 107%;
  text-align: center;
  color: #020202;
  transition: all 0.2s ease;
  border: 2px solid;
  border-radius: 8px;
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  width: 100%;
  transition: background 0.3s ease, color 0.3s ease, box-shadow 0.2s ease;

 

  ${({ variant }) =>
    variant === "primary" &&
    `

  border: none;
  background: linear-gradient(90deg, #5427b1 0%, #a066ff 100%);  
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 45px;
  height: 100%;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  color: #fff;
transition: background 0.3s ease,  box-shadow 0.2s ease;

  &:hover,
  &:focus {
    background: #5427b1;  
  }

  &:active {
    box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #5427b1;
    transform: scale(0.97);
  }
    `};

  ${({ variant }) =>
    variant === "header" &&
    `

  border-color: #a066ff;
  
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 202px;
  width: 100%;
  min-height: 40px;
  height: 100%;
  transition: background 0.3s ease, color 0.3s ease, box-shadow 0.2s ease;

  &:hover,
  &:focus {
    background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: #fff;

  }

  &:active {
    box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #5427b1;
    transform: scale(0.97);
  }
    `};
`;
