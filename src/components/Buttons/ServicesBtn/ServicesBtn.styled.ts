import styled from "@emotion/styled";

export const ServButton = styled.a`
  border: 2px solid #a066ff;
  border-radius: 8px;
  padding: 12px 9px;
  max-width: 80px;
  width: 100%;
  height: 40px;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: #020202;
  margin-right: 15px;

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
`;
