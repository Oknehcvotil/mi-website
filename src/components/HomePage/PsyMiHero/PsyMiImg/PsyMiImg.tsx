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
  const desk = webpSet(`${base}-desk`);

  return (
    <picture>
      <source
        media="(min-width: 1920px)"
        type="image/webp"
        srcSet={desk.srcSet}
      />

      <source
        media="(min-width: 768px)"
        type="image/webp"
        srcSet={tab.srcSet}
      />

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
