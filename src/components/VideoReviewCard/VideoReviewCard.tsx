import React, {
  useMemo,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import {
  PosterLayer,
  PlayBtn,
  FrameLayer,
  Meta,
  Name,
  Card,
  VideoCardWrap,
  Position,
} from "./VideoReviewCard.styled";
import { useTranslation } from "react-i18next";
import type { VideoReviewCardProps } from "../../lib/types/common.types";
import {
  extractYoutubeId,
  getYoutubePosterHQ,
  getYoutubePosterMax,
} from "../../lib/helpers/youtube";

const VideoReviewCard = ({
  youtubeUrl,
  author,
  position,
  className,
  withBorders = true,
  classes,
  posterOverride,
  translationNs = "reviews",
}: VideoReviewCardProps) => {
  const { t } = useTranslation(translationNs);
  const [playing, setPlaying] = useState(false);
  const [posterSrc, setPosterSrc] = useState<string | undefined>(
    posterOverride
  );
  const cardRef = useRef<HTMLDivElement | null>(null);
  const id = useMemo(() => extractYoutubeId(youtubeUrl), [youtubeUrl]);

  useEffect(() => {
    if (posterOverride) {
      setPosterSrc(posterOverride);
    } else if (id) {
      setPosterSrc(getYoutubePosterMax(id));
    } else {
      setPosterSrc(undefined);
    }
  }, [posterOverride, id]);

  const onPosterError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (id && e.currentTarget.src !== getYoutubePosterHQ(id)) {
        e.currentTarget.src = getYoutubePosterHQ(id);
      }
    },
    [id]
  );

  const embed = id
    ? `https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1&rel=0&modestbranding=1&controls=1`
    : null;

  const authorText = author ? t(author) : undefined;
  const positionText = position ? t(position) : undefined;

  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && playing) setPlaying(false);
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [playing]);

  const mergedClassName = [className, classes?.root]
    .filter(Boolean)
    .join(" ")
    .trim();

  return (
    <VideoCardWrap>
      <Card
        ref={cardRef}
        className={mergedClassName}
        data-with-borders={withBorders}
      >
        {playing && embed ? (
          <FrameLayer data-visible="true" data-with-borders={withBorders}>
            <iframe
              title={authorText ?? "Video review"}
              src={embed}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </FrameLayer>
        ) : (
          <PosterLayer data-visible="true" data-with-borders={withBorders}>
            {posterSrc && (
              <img
                src={posterSrc}
                alt={authorText ?? "Video poster"}
                loading="lazy"
                onError={onPosterError}
              />
            )}
            <PlayBtn
              className={classes?.playBtn}
              onClick={() => setPlaying(true)}
              aria-label="Play video"
            />
          </PosterLayer>
        )}
      </Card>
      {(authorText || positionText) && (
        <Meta className={`${classes?.meta ?? ""} ${className ?? ""}`}>
          {authorText && <Name>{authorText}</Name>}
          {positionText && <Position>{positionText}</Position>}
        </Meta>
      )}
    </VideoCardWrap>
  );
};

export default VideoReviewCard;
