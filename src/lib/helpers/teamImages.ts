export type ResponsiveSource = {
  media: string;
  srcSet: string;
};

const TEAM_IMAGE_DEVICES = [
  { dir: "desktop", minWidth: 1920 },
  { dir: "laptop", minWidth: 1024 },
  { dir: "tab", minWidth: 768 },
] as const;

const getTeamImagePath = (
  imagePath: string,
  device: (typeof TEAM_IMAGE_DEVICES)[number]["dir"]
) => imagePath.replace("/images/mob/team/", `/images/${device}/team/`);

export const getImageSrc = (imagePath: string) => `${imagePath}.webp`;

export const getResponsiveSources = (imagePath: string): ResponsiveSource[] => {
  const deviceSources = TEAM_IMAGE_DEVICES.flatMap(({ dir, minWidth }) => {
    const deviceImagePath = getTeamImagePath(imagePath, dir);

    return [
      {
        media: `(min-width: ${minWidth}px) and (min-resolution: 3dppx)`,
        srcSet: `${deviceImagePath}@3x.webp`,
      },
      {
        media: `(min-width: ${minWidth}px) and (min-resolution: 2dppx)`,
        srcSet: `${deviceImagePath}@2x.webp`,
      },
      {
        media: `(min-width: ${minWidth}px)`,
        srcSet: getImageSrc(deviceImagePath),
      },
    ];
  });

  return [
    ...deviceSources,
    {
      media: "(min-resolution: 3dppx)",
      srcSet: `${imagePath}@3x.webp`,
    },
    {
      media: "(min-resolution: 2dppx)",
      srcSet: `${imagePath}@2x.webp`,
    },
  ];
};
