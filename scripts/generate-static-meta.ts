import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PAGE_META, injectMeta } from "../shared/pageMeta";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPublic = path.resolve(__dirname, "..", "dist", "public");
const indexPath = path.join(distPublic, "index.html");
const baseHtml = fs.readFileSync(indexPath, "utf-8");

for (const [route, meta] of Object.entries(PAGE_META)) {
  const html = injectMeta(baseHtml, meta);
  const outPath = path.join(distPublic, `${route.replace(/^\//, "")}.html`);
  fs.writeFileSync(outPath, html);
  console.log(`Generated ${outPath} with route-specific meta tags`);
}
