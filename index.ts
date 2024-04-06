import { serve } from "bun";
const server = serve({
  port: 5000,
  hostname: "localhost",
  fetch(req) {
    console.log("METHOD = ", req.method);
    return new Response("Hello world");
  },
});

console.log(`Listen in ${server.port}`);
