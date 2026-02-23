import { SectionDesktop, TeamCardContent } from "./TeamDesktop.styled";
import StatsBadge from "../StatsBadge/StatsBadge";
import { teamCards } from "../../../../lib/data/home.page";
import { useTranslation } from "react-i18next";
import { blockV } from "../../../../lib/animations/home/animations.swipers";
import TeamName from "../TeamName/TeamName";
import SocialLink from "../../../Buttons/SocialLink/SocialLink";

const TeamDesktop = () => {
  const { t } = useTranslation("home");

  return (
    <SectionDesktop variants={blockV}>
      <picture>
        <img
          decoding="async"
          fetchPriority="high"
          src="/images/desktop/team/mi-team.webp"
          srcSet="/images/desktop/team/mi-team.webp 1x, /images/desktop/team/mi-team@2x.webp 2x, /images/desktop/team/mi-team@3x.webp 3x"
          alt="MI Agency team"
          loading="eager"
        />
      </picture>

      {teamCards.map((card, i) => (
        <TeamCardContent key={i} className={`card-content-${card.id}`}>
          <TeamName key={i} id={card.id} name={card.name} role={card.role} />
          <SocialLink
            id={card.link.id}
            href={card.link.href}
            ariaLabel={t(card.link.labelKey ?? "")}
            width={"21px"}
            height={"20px"}
            className={`team-card-social social-${card.id}`}
          />
        </TeamCardContent>
      ))}

      {teamCards.map((card) =>
        card.stats.map((stat, i) => (
          <StatsBadge
            key={`${card.id}-stat-${i}`}
            value={stat.value}
            label={t(stat.labelKey)}
            className={`${"className" in stat ? stat.className : ""} ${card.id}`}
          />
        )),
      )}
    </SectionDesktop>
  );
};
export default TeamDesktop;
