import type CasesMessage from "../../components/CasesMessage/CasesMessage";
import type VideoReviewCard from "../../components/VideoReviewCard/VideoReviewCard";

type CaseCfg = {
  img: string;
  title: string;
  items: string;
  className?: string | string[];
};

export type CasesCandidatesItem =
  | {
      kind: "video";
      url: string;
      posterOverride?: string;
      author: string;
      position: string;
    }
  | { kind: "pair"; left: CaseCfg; right: CaseCfg }
  | { kind: "single"; card: CaseCfg };

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

export type NoVideoCasesItem =
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
