import { useMemo, useState, useRef, useEffect } from "react";
import {
  PosterLayer,
  PlayBtn,
  FrameLayer,
  Meta,
  Name,
  Card,
} from "./VideoReviewCard.styled";
import { useTranslation } from "react-i18next";

type VideoReviewCardProps = {
  youtubeUrl: string;
  author: string;
  position: string;
  className?: string;
  classes?: { root?: string; meta?: string; playBtn?: string };
  posterOverride?: string;
};

function extractYoutubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1) || null;
    const v = u.searchParams.get("v");
    if (v) return v;
    const m = u.pathname.match(/\/(embed|shorts)\/([^/?#]+)/);
    return m?.[2] ?? null;
  } catch {
    return null;
  }
}

const VideoReviewCard = ({
  youtubeUrl,
  author,
  position,
  className,
  classes,
  posterOverride,
}: VideoReviewCardProps) => {
  const { t } = useTranslation("reviews");
  const [playing, setPlaying] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const id = useMemo(() => extractYoutubeId(youtubeUrl), [youtubeUrl]);
  const poster =
    posterOverride ||
    (id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "");

  const embed = id
    ? `https://www.youtube.com/embed/${id}` +
      `?autoplay=1&playsinline=1&rel=0&modestbranding=1&controls=1`
    : null;

  const authorText = t(author);
  const positionText = t(position);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && playing) {
            setPlaying(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [playing]);

  return (
    <Card
      ref={cardRef}
      className={[className, classes?.root].filter(Boolean).join(" ")}
    >
      {playing && embed ? (
        <FrameLayer data-visible="true">
          <iframe
            title={authorText}
            src={embed}
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </FrameLayer>
      ) : (
        <PosterLayer data-visible="true">
          {poster && <img src={poster} alt={authorText} loading="lazy" />}
          <PlayBtn
            className={classes?.playBtn}
            onClick={() => setPlaying(true)}
            aria-label="Play video"
          />
        </PosterLayer>
      )}

      <Meta className={classes?.meta}>
        <Name>{authorText}</Name>
        <p>{positionText}</p>
      </Meta>
    </Card>
  );
};

export default VideoReviewCard;
