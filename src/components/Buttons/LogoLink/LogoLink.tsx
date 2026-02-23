import { Link, useMatch } from "react-router-dom";
import { StyledLogo } from "./LogoLink.styled";

type LogoLinkProps = {
  width?: number | string;
  height?: number | string;
};

const LogoLink = ({ width = 100, height = 42 }: LogoLinkProps) => {
  const match = useMatch("/:lang/*");
  const currentLang = match?.params.lang ?? "en";

  return (
    <Link to={`/${currentLang}`}>
      <StyledLogo
        width={width}
        height={height}
        aria-hidden="true"
        focusable="false"
      >
        <use
          href="/icons/sprite.svg#icon-main-logo"
          xlinkHref="/icons/sprite.svg#icon-main-logo"
        ></use>
      </StyledLogo>
    </Link>
  );
};

export default LogoLink;
