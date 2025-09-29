import type { homeLinks } from "../data/home.page";

export type SectionName = (typeof homeLinks)[number]["name"] | "Footer";

export type PolicySections = {
  dataCollectTitle: string;
  dataCollectList: string[];
  purposeTitle: string;
  purposeList: string[];
  unsubscribe: string;
  securityTitle: string;
  securityText: string;
  thirdPartyTitle: string;
  thirdPartyText: string;
  thirdPartyList: string[];
  rightsTitle: string;
  rightsList: string[];
  changesTitle: string;
  changesText: string;
};
