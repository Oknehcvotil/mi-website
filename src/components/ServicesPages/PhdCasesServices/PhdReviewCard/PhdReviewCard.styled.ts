import styled from "@emotion/styled";

export const CardContainer = styled.div`
  max-width: 390px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (min-width: 768px) {
    max-width: 340px;
    padding: 0;
  }

  @media (min-width: 1920px) {
    max-width: 740px;
  }
`;

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

  @media (min-width: 1920px) {
    padding: 25px;
  }
`;

export const PhdReviewImgCont = styled.div`
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PhdReviewTextCont = styled.div`
  flex: 1 1 auto;

  ul {
    margin: 0;
    padding-left: 18px;
  }

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

  @media (min-width: 1920px) {
    ul {
      padding-left: 0;
      max-width: 620px;
    }

    h3 {
      font-size: 30px;
      line-height: 142%;
      padding-top: 0;
    }

    li {
      font-size: 20px;
      line-height: 142%;
    }
  }
`;
