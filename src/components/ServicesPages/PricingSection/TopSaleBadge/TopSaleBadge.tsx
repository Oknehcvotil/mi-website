import { BadgeWrap } from "./TopSaleBadge.styled";

type TopSaleBadge = {
  children: string;
};

const TopSaleBadge = ({ children }: TopSaleBadge) => {
  return (
    <BadgeWrap>
      <svg width={24} height={24}>
        <use href="/icons/sprite.svg#icon-flame"></use>
      </svg>
      {children}
    </BadgeWrap>
  );
};

export default TopSaleBadge;
