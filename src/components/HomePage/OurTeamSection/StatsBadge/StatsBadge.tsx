import React from "react";
import { StatsWrap } from "./StatsBadge.styled";

type StatsBadgeProps = {
  value: string;
  label: string;
  className?: string;
};

const StatsBadge: React.FC<StatsBadgeProps> = ({ value, label, className }) => {
  return (
    <StatsWrap
      className={className}
      role="group"
      aria-label={`${value} ${label}`}
    >
      <strong>{value}</strong>
      <span>{label}</span>
    </StatsWrap>
  );
};

export default StatsBadge;
