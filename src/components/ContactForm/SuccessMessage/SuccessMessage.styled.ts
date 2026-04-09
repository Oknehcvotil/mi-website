import styled from "@emotion/styled";

type MessageContProps = {
  variant: "error" | "success";
};

export const MessageCont = styled.div<MessageContProps>`
  position: absolute;
  top: -58px;
  left: 50%;
  transform: translateX(-50%);
  border: 3px solid
    ${({ variant }) => (variant === "error" ? "#ff2400" : "#a066ff")};
  border-radius: 8px;
  padding: 8px 10px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 80%;
  width: 100%;

  div {
    width: 31px;
    height: 31px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid
      ${({ variant }) => (variant === "error" ? "#ff2400" : "#a066ff")};
    border-radius: 8px;
    color: ${({ variant }) => (variant === "error" ? "#ff2400" : "#5427b1")};
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 125%;
    color: ${({ variant }) => (variant === "error" ? "#8d1f0e" : "#000")};
    margin: 0;
  }

  @media (min-width: 1920px) {
    padding: 20px;

    p {
      font-size: 25px;
    }
  }
`;
