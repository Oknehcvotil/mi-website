export function extractYoutubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1) || null;
    const v = u.searchParams.get("v");
    if (v) return v;
    const m = u.pathname.match(/\/(embed|shorts)\/([^/?#]+)/);
    return m?.[2] ?? null;
  } catch {
    return null;
  }
}

export const getYoutubePosterMax = (id: string) =>
  `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

export const getYoutubePosterHQ = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
