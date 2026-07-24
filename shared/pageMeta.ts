export type PageMeta = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage?: string;
};

// Per-route overrides for <title>/description/OG/Twitter tags.
// Routes not listed here keep whatever is already baked into index.html.
export const PAGE_META: Record<string, PageMeta> = {
  "/newself": {
    title: "newself",
    description: "Technology made for you. Get back to the old you.",
    ogTitle: "Technology Made For You",
    ogDescription: "Get back to the old you. Free to explore, no commitment.",
    ogUrl: "https://www.helpmyform.online/newself",
    ogImage: "https://www.helpmyform.online/images/newself-hero.png",
  },
};

export function injectMeta(html: string, meta: PageMeta): string {
  let result = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${meta.description}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${meta.ogUrl}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${meta.ogTitle}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${meta.ogDescription}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${meta.ogTitle}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${meta.ogDescription}$2`);

  if (meta.ogImage) {
    result = result
      .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${meta.ogImage}$2`)
      .replace(/(<meta property="og:image:secure_url" content=")[^"]*(")/, `$1${meta.ogImage}$2`)
      .replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${meta.ogImage}$2`);
  }

  return result;
}
