import type { Variants } from "framer-motion";
import { webpSet } from "../../../../lib/helpers/helpers";
import { Img } from "./PsyMiImg.styled";

type PsyMiImgProps = {
  className: string;
  base: string;
  alt: string;
  variants: Variants;
};

const PsyMiImg = ({ className, base, alt, variants }: PsyMiImgProps) => {
  const mob = webpSet(base);
  const tab = webpSet(`${base}-tab`);
  const laptop = webpSet(`${base}-laptop`);
  const desk = webpSet(`${base}-desk`);
  const sources = [
    { media: "(min-width: 1920px)", srcSet: desk.srcSet },
    { media: "(min-width: 1024px)", srcSet: laptop.srcSet },
    { media: "(min-width: 768px)", srcSet: tab.srcSet },
  ];

  return (
    <picture>
      {sources.map((source) => (
        <source
          key={source.media}
          media={source.media}
          type="image/webp"
          srcSet={source.srcSet}
        />
      ))}

      <Img
        className={className}
        variants={variants}
        src={mob.src}
        srcSet={mob.srcSet}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
};

export default PsyMiImg;
