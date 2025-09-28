export const webpSet = (basePathNoExt: string) => ({
  src: `${basePathNoExt}.webp`,
  srcSet: `${basePathNoExt}@2x.webp 2x, ${basePathNoExt}@3x.webp 3x`,
});
