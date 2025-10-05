import styled from "@emotion/styled";

export const PhdReviewCont = styled.div`
  width: 100%;
  padding: 5px;
  margin: 0 auto;
  border: 4px solid #a066ff;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  box-sizing: border-box;
`;

export const PhdReviewImgCont = styled.div`
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PhdReviewTextCont = styled.div`
  h3 {
    padding-top: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #a066ff;
    margin-bottom: 5px;
  }

  li {
    font-weight: 400;
    font-size: 10px;
    line-height: 130%;
    color: #020202;

    margin-bottom: 20px;
    white-space: pre-line;
  }
`;
