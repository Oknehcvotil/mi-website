import Container from "../../Container/Container";
import {
  SectionCont,
  StatsList,
  Wrap,
  PicFrame,
} from "./MissionSection.styled";
import MissionMainTitle from "./MissionMainTitle/MissionMainTitle";
import { statsCards } from "../../../lib/data/home.page";
import { StatsItemCard } from "../StatsSection/StatsItemCard/StatsItemCard";
import { useMediaQuery } from "../../../lib/hooks/useMediaQuery";
import { useReducedMotion } from "framer-motion";
import {
  missionContentVariants,
  missionImageVariants,
  missionSectionVariants,
  missionStatsItemVariants,
  missionStatsListVariants,
} from "../../../lib/animations/home/animations.mission";

const MissionSection = () => {
  const isDesk = useMediaQuery("(min-width: 1920px)");
  const reduce = !!useReducedMotion();

  return (
    <Wrap
      variants={reduce ? undefined : missionSectionVariants}
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.18 }}
      animate={reduce ? "show" : undefined}
    >
      <Container style={isDesk ? { marginBottom: 110 } : { marginBottom: 16 }}>
        <MissionMainTitle useOwnViewportAnimation={false} />
      </Container>
      <SectionCont variants={reduce ? undefined : missionContentVariants}>
        <StatsList variants={reduce ? undefined : missionStatsListVariants}>
          {statsCards.map((c, idx) => (
            <StatsItemCard
              key={idx}
              value={c.value}
              labelKey={c.label}
              variants={reduce ? undefined : missionStatsItemVariants}
              useOwnViewportAnimation={false}
            />
          ))}
        </StatsList>
        <PicFrame variants={reduce ? undefined : missionImageVariants}>
          <picture>
            {/* Desktop 1920+ WEBP */}
            <source
              media="(min-width: 1920px)"
              type="image/webp"
              srcSet="/images/desktop/mission-team.webp 1x, /images/desktop/mission-team@2x.webp 2x, /images/desktop/mission-team@3x.webp 3x"
            />

            {/* Desktop 1920+ JPG fallback */}
            <source
              media="(min-width: 1920px)"
              type="image/jpeg"
              srcSet="/images/desktop/mission-team.jpg 1x, /images/desktop/mission-team@2x.jpg 2x, /images/desktop/mission-team@3x.jpg 3x"
            />

            {/* Mac laptop WEBP */}
            <source
              media="(min-width: 1024px)"
              type="image/webp"
              srcSet="/images/macbook/mission-team.webp 1x, /images/macbook/mission-team@2x.webp 2x, /images/macbook/mission-team@3x.webp 3x"
            />

            {/* Mac JPG fallback */}
            <source
              media="(min-width: 1024px)"
              type="image/jpeg"
              srcSet="/images/macbook/mission-team.jpg 1x, /images/macbook/mission-team@2x.jpg 2x, /images/macbook/mission-team@3x.jpg 3x"
            />

            {/* Desktop laptop WEBP */}
            <source
              media="(min-width: 1024px)"
              type="image/webp"
              srcSet="/images/laptop/mission-team.webp 1x, /images/laptop/mission-team@2x.webp 2x, /images/laptop/mission-team@3x.webp 3x"
            />

            {/* Desktop 1024+ JPG fallback */}
            <source
              media="(min-width: 1024px)"
              type="image/jpeg"
              srcSet="/images/laptop/mission-team.jpg 1x, /images/laptop/mission-team@2x.jpg 2x, /images/laptop/mission-team@3x.jpg 3x"
            />

            {/* Tablet WEBP */}
            <source
              type="image/webp"
              srcSet="/images/tab/mission-team.webp 1x, /images/tab/mission-team@2x.webp 2x, /images/tab/mission-team@3x.webp 3x"
            />

            {/* Tablet JPG fallback */}
            <source
              type="image/jpeg"
              srcSet="/images/tab/mission-team.jpg 1x, /images/tab/mission-team@2x.jpg 2x, /images/tab/mission-team@3x.jpg 3x"
            />
            <img
              src="/images/tab/mission-team.jpg"
              alt="MI Agency team"
              width="268"
              height="368"
              loading="lazy"
            />
          </picture>
        </PicFrame>
      </SectionCont>
    </Wrap>
  );
};

export default MissionSection;
