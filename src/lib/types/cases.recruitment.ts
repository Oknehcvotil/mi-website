import type CasesMessage from "../../components/CasesMessage/CasesMessage";
import type VideoReviewCard from "../../components/VideoReviewCard/VideoReviewCard";

export type CasesItem =
  | { type: "video"; props: React.ComponentProps<typeof VideoReviewCard> }
  | {
      type: "case";
      keyPrefix: string;
      logos?: Array<{ src: string; width: number; height: number }>;
      logoTitle?: string;
      className?: string;
    }
  | ({ type: "msg" } & Omit<
      React.ComponentProps<typeof CasesMessage>,
      "translationNs"
    >);

export type FintechCasesItem =
  | {
      type: "case";
      keyPrefix: string;
      logos?: Array<{ src: string; width: number; height: number }>;
      logoTitle?: string;
      className?: string;
    }
  | ({ type: "msg" } & Omit<
      React.ComponentProps<typeof CasesMessage>,
      "translationNs"
    >);
