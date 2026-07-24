import express from "express";
import { createServer } from "http";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { PAGE_META, injectMeta } from "../shared/pageMeta";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
