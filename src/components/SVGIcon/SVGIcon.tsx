import React from "react";

type SVGIconProps = {
  width?: number | string;
  height?: number | string;
  iconId: string; // id иконки из sprite.svg (например "icon-menu")
  className?: string;
};

const SVGIcon: React.FC<SVGIconProps> = ({
  width = 24,
  height = 24,
  iconId,
  className,
}) => {
  return (
    <svg width={width} height={height} className={className} aria-hidden="true">
      <use href={`${iconId}`} />
    </svg>
  );
};

export default SVGIcon;
