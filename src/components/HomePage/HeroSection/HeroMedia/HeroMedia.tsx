import { imageIn } from "../../../../lib/animations/home/animation.hero";
import { HeroPictCont, HeroImage } from "./HeroMedia.styled";

type HeroMediaProps = {
  alt?: string;
};

const HeroMedia = ({ alt = "MI Agency team" }: HeroMediaProps) => {
  return (
    <HeroPictCont variants={imageIn}>
      <picture>
        <source
          type="image/webp"
          srcSet="/images/mob/team.webp 1x, /images/mob/team@2x.webp 2x, /images/mob/team@3x.webp 3x"
        />
        <HeroImage
          decoding="async"
          fetchPriority="high"
          src="/images/mob/team.webp"
          srcSet="/images/mob/team.webp 1x, /images/mob/team@2x.webp 2x, /images/mob/team@3x.webp 3x"
          alt={alt}
          loading="eager"
        />
      </picture>
    </HeroPictCont>
  );
};

export default HeroMedia;
