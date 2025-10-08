import styled from "@emotion/styled";

export const CasesMessageWrap = styled.div`
  position: relative;
  padding-left: 40px;
`;

export const CasesMessageTextCard = styled.div`
  background-image: url("/images/mob/background/message-bg.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  width: 100%;
  padding: 20px 15px 20px 35px;
`;

export const CasesMessageTitle = styled.h3`
  font-weight: 700;
  font-size: 15px;
  line-height: 147%;
  letter-spacing: -0.03em;
  color: #a066ff;
  margin-bottom: 10px;
`;

export const CasesMessageList = styled.ul`
  font-weight: 400;
  font-size: 12px;
  line-height: 133%;
  color: #000;
  list-style: disc outside;
  padding-left: 1.25rem;
  overflow-wrap: break-word;
  hyphens: auto;

  &.not-list {
    list-style: none;
    padding-left: 0;
  }

  &.gap {
    li {
      &:not(:last-of-type) {
        margin-bottom: 20px;
      }
    }
  }
  & > li::marker {
    color: currentColor;
  }
  li {
    text-indent: 0;

    span {
      font-weight: 700;
    }
  }
`;

export const CasesImgCont = styled.div`
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: 6px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MessageTime = styled.span`
  color: #8e8e93;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-style: italic;
  font-size: 10px;
  position: absolute;
  right: 20px;
  bottom: 5px;
`;
