// AIGIS launcher: serves all images/videos straight from disk (with video
// streaming support) and forwards every page request to the website server.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(ROOT, "public");
const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "0.0.0.0";
const INNER = PORT + 1;

const TYPES = {
  ".mp4": "video/mp4", ".webm": "video/webm", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml", ".ico": "image/x-icon",
  ".css": "text/css", ".js": "text/javascript", ".woff2": "font/woff2", ".txt": "text/plain",
};

const child = spawn(process.execPath, [path.join(ROOT, "server/index.mjs")], {
  env: { ...process.env, PORT: String(INNER), HOST: "127.0.0.1", NITRO_PORT: String(INNER), NITRO_HOST: "127.0.0.1" },
  stdio: "inherit",
});
child.on("exit", (c) => process.exit(c ?? 1));
process.on("SIGTERM", () => child.kill("SIGTERM"));
process.on("SIGINT", () => child.kill("SIGINT"));

function serveFile(req, res, file) {
  const stat = fs.statSync(file);
  const type = TYPES[path.extname(file).toLowerCase()] || "application/octet-stream";
  const base = { "Content-Type": type, "Accept-Ranges": "bytes", "Cache-Control": "public, max-age=2592000" };
  const range = req.headers.range && /bytes=(\d*)-(\d*)/.exec(req.headers.range);
  if (range) {
    let start = range[1] ? parseInt(range[1], 10) : stat.size - parseInt(range[2], 10);
    let end = range[1] && range[2] ? parseInt(range[2], 10) : stat.size - 1;
    if (isNaN(start) || start >= stat.size) { res.writeHead(416, { "Content-Range": `bytes */${stat.size}` }); return res.end(); }
    end = Math.min(end, stat.size - 1);
    res.writeHead(206, { ...base, "Content-Range": `bytes ${start}-${end}/${stat.size}`, "Content-Length": end - start + 1 });
    if (req.method === "HEAD") return res.end();
    return fs.createReadStream(file, { start, end }).pipe(res);
  }
  res.writeHead(200, { ...base, "Content-Length": stat.size });
  if (req.method === "HEAD") return res.end();
  fs.createReadStream(file).pipe(res);
}

http.createServer((req, res) => {
  const url = decodeURIComponent((req.url || "/").split("?")[0]);
  if (req.method === "GET" || req.method === "HEAD") {
    const file = path.normalize(path.join(PUBLIC, url));
    if (file.startsWith(PUBLIC + path.sep) && fs.existsSync(file) && fs.statSync(file).isFile()) {
      return serveFile(req, res, file);
    }
  }
  const p = http.request({ host: "127.0.0.1", port: INNER, path: req.url, method: req.method, headers: req.headers }, (r) => {
    res.writeHead(r.statusCode || 502, r.headers);
    r.pipe(res);
  });
  p.on("error", () => { res.writeHead(502); res.end("Server starting, refresh in a moment."); });
  req.pipe(p);
}).listen(PORT, HOST, () => console.log(`AIGIS running on http://${HOST}:${PORT}`));
