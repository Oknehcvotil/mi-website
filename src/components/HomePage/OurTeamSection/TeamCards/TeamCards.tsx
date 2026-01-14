import { useTranslation } from "react-i18next";
import StatsBadge from "../StatsBadge/StatsBadge";
import { CardCont, NameCont } from "./TeamCards.styled";
import SocialLink from "../../../Buttons/SocialLink/SocialLink";

type StatItem = {
  value: string;
  labelKey: string;
  className?: string;
};

export type TeamCardData = {
  id: string;
  name: string;
  role: string;
  imgBase: string;
  stats?: StatItem[];
  link: {
    id: string;
    href: string;
    labelKey: string;
    width: string;
    height: string;
  };
};

type TeamCardProps = {
  data: TeamCardData;
};

export const TeamCard: React.FC<TeamCardProps> = ({ data }) => {
  const { t } = useTranslation("home");

  return (
    <CardCont aria-label={`${data.name}, ${data.role}`}>
      <NameCont className={`team-${data.id}`}>
        <h3>{data.name}</h3>
        <p>{data.role}</p>
      </NameCont>
      <img
        src={`/images/mob/team/${data.imgBase}.webp`}
        srcSet={`
                  /images/mob/team/${data.imgBase}.webp 1x,
                  /images/mob/team/${data.imgBase}@2x.webp 2x,
                  /images/mob/team/${data.imgBase}@3x.webp 3x
                `}
        alt={`${data.name} photo`}
        loading="lazy"
      />

      <SocialLink
        key={data.link.id}
        id={data.link.id}
        href={data.link.href}
        ariaLabel={t(data.link.labelKey ?? "")}
        width={data.link.width}
        height={data.link.height}
        className="team-card-social"
      />

      {data.stats?.map((s, i) => (
        <StatsBadge
          key={`${data.id}-stat-${i}`}
          value={s.value}
          label={t(s.labelKey)}
          className={s.className}
        />
      ))}
    </CardCont>
  );
};
