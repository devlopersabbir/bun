import { serve } from "bun";
import figlet from "figlet";

const server = serve({
  port: Bun.env["PORT"],
  hostname: "localhost",
  fetch(req) {
    const url = new URL(req.url);
    figlet.textSync(req.url);
    if (url.pathname === "/") return new Response("<h1>Home page</h1>");
    if (url.pathname === "/blog") return new Response("<h1>Blog page</h1>");
    return new Response("<h1>404 Not found!</h1>");
  },
});

console.log(`Listen in ${server.port}`);
