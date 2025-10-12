import { useMemo, useState, useCallback } from "react";
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
import {
  extractYoutubeId,
  getPosterCandidates,
} from "../../lib/helpers/youtube";

type VideoReviewCardProps = {
  youtubeUrl: string;
  author?: string;
  position?: string;
  className?: string;
  withBorders?: boolean;
  classes?: { root?: string; meta?: string; playBtn?: string };
  posterOverride?: string;
  translationNs?: string;
};

const VideoReviewCard = ({
  youtubeUrl,
  author,
  position,
  className,
  withBorders,
  classes,
  posterOverride,
  translationNs = "reviews",
}: VideoReviewCardProps) => {
  const { t } = useTranslation(translationNs);
  const id = useMemo(() => extractYoutubeId(youtubeUrl), [youtubeUrl]);

  const [srcIdx, setSrcIdx] = useState(0);
  const posters = useMemo(
    () =>
      posterOverride ? [posterOverride] : id ? getPosterCandidates(id) : [],
    [posterOverride, id]
  );

  const handleError = useCallback(() => {
    setSrcIdx((i) => (i + 1 < posters.length ? i + 1 : i));
  }, [posters.length]);

  const authorText = author ? t(author) : "";
  const positionText = position ? t(position) : "";

  return (
    <VideoCardWrap className={classes?.root || ""}>
      <Card className={className || ""} data-border={withBorders}>
        <PosterLayer>
          {posters.length > 0 ? (
            <img
              src={posters[srcIdx]}
              alt={authorText || ""}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={handleError}
            />
          ) : (
            <div className="poster-fallback" />
          )}
        </PosterLayer>

        <FrameLayer>
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={classes?.playBtn || ""}
          >
            <PlayBtn />
          </a>
        </FrameLayer>

        {(authorText || positionText) && (
          <Meta className={classes?.meta || ""}>
            {authorText && <Name>{authorText}</Name>}
            {positionText && <Position>{positionText}</Position>}
          </Meta>
        )}
      </Card>
    </VideoCardWrap>
  );
};

export default VideoReviewCard;
