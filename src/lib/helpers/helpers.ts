export const webpSet = (basePathNoExt: string) => ({
  src: `${basePathNoExt}.webp`,
  srcSet: `${basePathNoExt}@2x.webp 2x, ${basePathNoExt}@3x.webp 3x`,
});

export const withDensitySet = (basePath: string, ext: string) =>
  `${basePath}.${ext} 1x, ${basePath}@2x.${ext} 2x, ${basePath}@3x.${ext} 3x`;

export const replaceImageViewport = (
  basePath: string,
  viewport: "laptop" | "desktop",
) => basePath.replace("/images/mob/", `/images/${viewport}/`);

export const getPosterUrl = (id: string, withBorders: boolean): string => {
  const base = `https://i.ytimg.com/vi/${id}`;
  return withBorders ? `${base}/hqdefault.jpg` : `${base}/hq720.jpg`;
};

export const cx = (v?: string | string[]) =>
  Array.isArray(v) ? v.filter(Boolean).join(" ") : (v ?? "");
