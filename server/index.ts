import express from "express";
import { createServer } from "http";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type PageMeta = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
};

// Per-route overrides for <title>/description/OG/Twitter tags.
// Routes not listed here fall back to whatever is already in index.html.
const PAGE_META: Record<string, PageMeta> = {
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

function injectMeta(html: string, meta: PageMeta): string {
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${meta.description}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${meta.ogUrl}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${meta.ogTitle}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${meta.ogDescription}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${meta.ogTitle}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${meta.ogDescription}$2`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  const indexPath = path.join(staticPath, "index.html");

  // Handle client-side routing - serve index.html for all routes,
  // injecting route-specific meta tags where defined above.
  app.get("*", (req, res) => {
    const meta = PAGE_META[req.path];
    if (meta) {
      const html = fs.readFileSync(indexPath, "utf-8");
      res.send(injectMeta(html, meta));
      return;
    }
    res.sendFile(indexPath);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
