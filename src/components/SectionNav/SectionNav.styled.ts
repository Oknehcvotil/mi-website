import styled from "@emotion/styled";

export const SectionNavWrap = styled.nav<{ hidden?: boolean }>`
  position: fixed;
  left: 50%;
  bottom: 25px;
  z-index: 800;
  transform: translateX(-50%);
  border: 2px solid #a066ff;
  border-radius: 29px;
  padding: 10px 14px;
  backdrop-filter: blur(50px);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  max-width: 340px;
  width: 100%;
  opacity: ${({ hidden }) => (hidden ? 0 : 1)};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SectionsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    font-family: "Unbounded";
    font-weight: 400;
    font-size: 13px;
    line-height: 130%;
    color: #000;

    transition: color 0.3 ease;

    &.active,
    &:hover,
    &:focus {
      color: #a066ff;
    }
  }
`;
