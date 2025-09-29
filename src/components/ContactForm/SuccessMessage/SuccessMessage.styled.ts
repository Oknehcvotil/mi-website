import styled from "@emotion/styled";

export const MessageCont = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  border: 3px solid #a066ff;
  border-radius: 8px;
  padding: 5px;
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
    border: 3px solid #a066ff;
    border-radius: 8px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 125%;
    color: #000;
  }
`;
