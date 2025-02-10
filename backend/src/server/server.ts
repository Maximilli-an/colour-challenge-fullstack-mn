import { serve } from "bun";
import { getRandomColourSwatch } from "../services/colourService";

const PORT = 3000;

serve({
  port: PORT,
  fetch(req) {
    if (req.url.endsWith("/colours")) {
      return new Response(JSON.stringify(getRandomColourSwatch()), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running on http://localhost:${PORT}`);
