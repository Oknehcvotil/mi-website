import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

type RouteLang = "ua" | "en";

type PageMeta = {
  title: string;
  description: string;
};

type SeoBundle = {
  home: PageMeta;
  fallback: PageMeta;
  imageAlt: string;
  pages?: Record<string, PageMeta>;
};

const SITE_NAME = "MI Agency";
const FALLBACK_BASE_URL = "https://mi-website-gamma.vercel.app";
const OG_IMAGE = "https://miagency.com.ua/img/opengraph.png";

const getRouteLang = (pathname: string): RouteLang => {
  const lang = pathname.split("/").filter(Boolean)[0];
  return lang === "ua" ? "ua" : "en";
};

const stripTrailingSlash = (value: string) =>
  value.length > 1 && value.endsWith("/") ? value.slice(0, -1) : value;

const getPathKey = (pathname: string) =>
  pathname
    .split("/")
    .filter(Boolean)
    .slice(1)
    .join("/");

const ensureMeta = (attr: "name" | "property", key: string) => {
  let tag = document.head.querySelector(
    `meta[${attr}="${key}"]`
  ) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }

  return tag;
};

const ensureLink = (rel: string, hreflang?: string) => {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;

  let tag = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!tag) {
    tag = document.createElement("link");
    tag.rel = rel;
    if (hreflang) tag.hreflang = hreflang;
    document.head.appendChild(tag);
  }

  return tag;
};

const SeoMeta = () => {
  const location = useLocation();
  const { i18n } = useTranslation("seo");

  useEffect(() => {
    const pathname = stripTrailingSlash(location.pathname || "/");
    const lang = getRouteLang(pathname);
    const htmlLang = lang === "ua" ? "uk" : "en";
    const locale = lang === "ua" ? "uk_UA" : "en_US";
    const altLocale = lang === "ua" ? "en_US" : "uk_UA";
    const pathKey = getPathKey(pathname);
    const baseUrl = window.location.origin || FALLBACK_BASE_URL;
    const bundle = i18n.getResourceBundle(lang, "seo") as SeoBundle | undefined;
    const fallbackMeta = bundle?.fallback ?? {
      title: "MI Agency | HR & Recruiting Solutions",
      description:
        "MI Agency provides modern HR and recruiting solutions for businesses and candidates.",
    };
    const meta = !pathKey
      ? bundle?.home ?? fallbackMeta
      : bundle?.pages?.[pathKey] ?? fallbackMeta;
    const canonicalPath = pathname === "/" ? `/${lang}` : pathname;
    const canonicalUrl = `${baseUrl}${canonicalPath}`;
    const uaUrl = `${baseUrl}/ua${pathKey ? `/${pathKey}` : ""}`;
    const enUrl = `${baseUrl}/en${pathKey ? `/${pathKey}` : ""}`;
    const imageAlt =
      bundle?.imageAlt ?? "MI Agency HR and recruiting services";

    document.documentElement.lang = htmlLang;
    document.title = meta.title;

    ensureMeta("name", "description").content = meta.description;
    ensureMeta("name", "robots").content = "index, follow";
    ensureMeta("name", "theme-color").content = "#ffffff";
    ensureMeta("name", "twitter:card").content = "summary_large_image";
    ensureMeta("name", "twitter:title").content = meta.title;
    ensureMeta("name", "twitter:description").content = meta.description;
    ensureMeta("name", "twitter:image").content = OG_IMAGE;
    ensureMeta("name", "twitter:image:alt").content = imageAlt;

    ensureMeta("property", "og:locale").content = locale;
    ensureMeta("property", "og:locale:alternate").content = altLocale;
    ensureMeta("property", "og:type").content = "website";
    ensureMeta("property", "og:site_name").content = SITE_NAME;
    ensureMeta("property", "og:title").content = meta.title;
    ensureMeta("property", "og:description").content = meta.description;
    ensureMeta("property", "og:url").content = canonicalUrl;
    ensureMeta("property", "og:image").content = OG_IMAGE;
    ensureMeta("property", "og:image:secure_url").content = OG_IMAGE;
    ensureMeta("property", "og:image:type").content = "image/png";
    ensureMeta("property", "og:image:width").content = "1200";
    ensureMeta("property", "og:image:height").content = "630";
    ensureMeta("property", "og:image:alt").content = imageAlt;

    ensureLink("canonical").href = canonicalUrl;
    ensureLink("alternate", "uk").href = uaUrl;
    ensureLink("alternate", "en").href = enUrl;
    ensureLink("alternate", "x-default").href = uaUrl;
  }, [i18n, location.pathname]);

  return null;
};

export default SeoMeta;
