import { CustomSocialLink } from "./SocialLink.styled";

type SocialLinkProps = {
  id: string;
  href: string;
  ariaLabel: string;
  width?: number | string;
  height?: number | string;
  spritePath?: string;
  className?: string;
  newTab?: boolean;
};

const SocialLink = ({
  id,
  href,
  ariaLabel,
  width = 15,
  height = 15,
  spritePath = "/icons/sprite.svg",
  className,
  newTab = true,
}: SocialLinkProps) => {
  return (
    <CustomSocialLink
      href={href}
      aria-label={ariaLabel}
      className={className}
      {...(newTab ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <svg width={width} height={height} aria-hidden="true" focusable="false">
        <use
          href={`${spritePath}#icon-${id}`}
          xlinkHref={`${spritePath}#icon-${id}`}
        />
      </svg>
    </CustomSocialLink>
  );
};

export default SocialLink;
