import { Link, useMatch } from "react-router-dom";

type LogoLinkProps = {
  width?: number | string;
  height?: number | string;
};

const LogoLink = ({ width = 99, height = 41 }: LogoLinkProps) => {
  const match = useMatch("/:lang/*");
  const currentLang = match?.params.lang ?? "en";

  return (
    <Link to={`/${currentLang}`}>
      <svg width={width} height={height} aria-hidden="true" focusable="false">
        <use
          href="/icons/sprite.svg#icon-main-logo"
          xlinkHref="/icons/sprite.svg#icon-main-logo"
        ></use>
      </svg>
    </Link>
  );
};

export default LogoLink;
