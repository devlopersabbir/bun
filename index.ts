import { serve } from "bun";
import figlet from "figlet";

const server = serve({
  port: 5000,
  hostname: "localhost",
  fetch(req) {
    console.log(figlet.textSync(req.method));
    return new Response("Hello world");
  },
});

console.log(`Listen in ${server.port}`);
