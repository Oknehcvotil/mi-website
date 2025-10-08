import React, { useMemo, useState, useRef, useEffect } from "react";
import {
  PosterLayer,
  PlayBtn,
  FrameLayer,
  Meta,
  Name,
  Card,
  VideoCardWrap,
} from "./VideoReviewCard.styled";
import { useTranslation } from "react-i18next";
import { getPosterUrl } from "../../lib/helpers/helpers";

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

const VideoReviewCard: React.FC<VideoReviewCardProps> = ({
  youtubeUrl,
  author,
  position,
  className,
  withBorders = true,
  classes,
  posterOverride,
  translationNs = "reviews",
}) => {
  const { t } = useTranslation(translationNs);
  const [playing, setPlaying] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const id = useMemo(() => extractYoutubeId(youtubeUrl), [youtubeUrl]);
  const poster = posterOverride || (id ? getPosterUrl(id, withBorders) : "");

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
              title={authorText}
              src={embed}
              allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </FrameLayer>
        ) : (
          <PosterLayer data-visible="true" data-with-borders={withBorders}>
            {poster && <img src={poster} alt={authorText} loading="lazy" />}
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
          {positionText && <p>{positionText}</p>}
        </Meta>
      )}
    </VideoCardWrap>
  );
};

export default VideoReviewCard;

// import React, { useMemo, useState, useRef, useEffect } from "react";
// import {
//   PosterLayer,
//   PlayBtn,
//   FrameLayer,
//   Meta,
//   Name,
//   Card,
// } from "./VideoReviewCard.styled";
// import { useTranslation } from "react-i18next";

// type VideoReviewCardProps = {
//   youtubeUrl: string;
//   author?: string;
//   position?: string;
//   className?: string;
//   classes?: { root?: string; meta?: string; playBtn?: string };
//   posterOverride?: string;
//   translationNs?: string;
// };

// function extractYoutubeId(url: string): string | null {
//   try {
//     const u = new URL(url);
//     if (u.hostname.includes("youtu.be")) return u.pathname.slice(1) || null;
//     const v = u.searchParams.get("v");
//     if (v) return v;
//     const m = u.pathname.match(/\/(embed|shorts)\/([^/?#]+)/);
//     return m?.[2] ?? null;
//   } catch {
//     return null;
//   }
// }

// const VideoReviewCard = ({
//   youtubeUrl,
//   author,
//   position,
//   className,
//   classes,
//   posterOverride,
//   translationNs = "reviews",
// }: VideoReviewCardProps) => {
//   const { t } = useTranslation(translationNs);
//   const [playing, setPlaying] = useState(false);
//   const cardRef = useRef<HTMLDivElement | null>(null);
//   const isVertical = className?.includes("vertical") ?? false;

//   const id = useMemo(() => extractYoutubeId(youtubeUrl), [youtubeUrl]);

//   function getPosterUrl(id: string, isVertical: boolean) {
//     const base = `https://i.ytimg.com/vi/${id}`;
//     if (isVertical) {
//       return `${base}/hq720.jpg`;
//     }
//     return `${base}/hqdefault.jpg`;
//   }

//   const poster = posterOverride || (id ? getPosterUrl(id, isVertical) : "");

//   const embed = id
//     ? `https://www.youtube.com/embed/${id}` +
//       `?autoplay=1&playsinline=1&rel=0&modestbranding=1&controls=1`
//     : null;

//   const authorText = author ? t(author) : undefined;
//   const positionText = position ? t(position) : undefined;

//   useEffect(() => {
//     if (!cardRef.current) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (!entry.isIntersecting && playing) {
//             setPlaying(false);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     observer.observe(cardRef.current);

//     return () => observer.disconnect();
//   }, [playing]);

//   return (
//     <React.Fragment>
//       <Card
//         ref={cardRef}
//         className={[className, classes?.root].filter(Boolean).join(" ")}
//       >
//         {playing && embed ? (
//           <FrameLayer
//             data-visible="true"
//             className={className ? className : ""}
//           >
//             <iframe
//               title={authorText}
//               src={embed}
//               allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               allowFullScreen
//             />
//           </FrameLayer>
//         ) : (
//           <PosterLayer data-visible="true">
//             {poster && <img src={poster} alt={authorText} loading="lazy" />}
//             <PlayBtn
//               className={classes?.playBtn}
//               onClick={() => setPlaying(true)}
//               aria-label="Play video"
//             />
//           </PosterLayer>
//         )}

//         {(authorText || positionText) && className !== "vertical" && (
//           <Meta className={`${classes?.meta ?? ""} ${className ?? ""}`}>
//             {authorText && <Name>{authorText}</Name>}
//             {positionText && <p>{positionText}</p>}
//           </Meta>
//         )}
//       </Card>
//       {(authorText || positionText) && className === "vertical" && (
//         <Meta className={`${classes?.meta ?? ""} ${className ?? ""}`}>
//           {authorText && <Name>{authorText}</Name>}
//           {positionText && <p>{positionText}</p>}
//         </Meta>
//       )}
//     </React.Fragment>
//   );
// };

// export default VideoReviewCard;
