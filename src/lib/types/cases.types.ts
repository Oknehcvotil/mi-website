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
