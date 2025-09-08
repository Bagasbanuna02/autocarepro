import { serve } from "bun";

serve({
  port: 3003, // bebas ganti port
  fetch(req) {
    if (req.url.endsWith("/api/hello")) {
      return new Response(JSON.stringify({ message: "Hello from Bun Server!" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response("Hello World from custom Bun server!");
  },
});

