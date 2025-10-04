import styled from "@emotion/styled";

export const CandidatesCasesTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  text-transform: uppercase;
  color: #a066ff;
`;

export const CandidatesCasesList = styled.ul`
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 15px;
  line-height: 130%;
  text-transform: uppercase;
  color: #020202;
  list-style: disc outside;
  padding-left: 1.25rem;

  li {
    text-indent: 0;
  }
`;

export const CadidatesImgCont = styled.div`
  box-shadow: 0 0 0 4px #a066ff;
  border-radius: 12px;
  margin: 0 auto;
  max-width: 294px;
  width: 100%;
  height: 280px;
  overflow: hidden;

  picture,
  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
  }
`;
