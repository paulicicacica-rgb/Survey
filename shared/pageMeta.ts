export type PageMeta = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
};

// Per-route overrides for <title>/description/OG/Twitter tags.
// Routes not listed here keep whatever is already baked into index.html.
export const PAGE_META: Record<string, PageMeta> = {
  "/newself": {
    title: "Medical Weight Loss Options — newself",
    description:
      "Compare telehealth providers offering physician-guided weight loss programs. Free to explore, no commitment.",
    ogTitle: "Struggling With Weight Loss? See Your Options",
    ogDescription:
      "Compare telehealth providers offering physician-guided weight loss programs. Free to explore, no commitment.",
    ogUrl: "https://helpmyform.online/newself",
  },
};

export function injectMeta(html: string, meta: PageMeta): string {
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${meta.description}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${meta.ogUrl}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${meta.ogTitle}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${meta.ogDescription}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${meta.ogTitle}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${meta.ogDescription}$2`);
}
