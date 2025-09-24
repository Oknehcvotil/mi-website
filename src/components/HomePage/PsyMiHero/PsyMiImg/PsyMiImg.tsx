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
  const imgPath = webpSet(`${base}`);
  
  return (
    <picture>
      <source type="image/webp" srcSet={imgPath.srcSet} />
      <Img
        className={className}
        variants={variants}
        src={imgPath.src}
        srcSet={imgPath.srcSet}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
};

export default PsyMiImg;
