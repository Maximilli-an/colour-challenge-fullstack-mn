import { serve } from "bun";
import { getRandomColourSwatch } from "../services/colourService";

const PORT = 3000;

serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url, `http://${req.headers.get("host")}`)

    if (url.pathname === "/colours") {
      return new Response(JSON.stringify(getRandomColourSwatch()), {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (url.pathname === "/") {
        return new Response("This is the root landing for the Colour API. Please poll /colours for a 5 colour swatch.", {
          headers: { "Content-Type": "text/plain" },
        });
      }

      //if invalid path input
    return new Response("The path you are looking for is not available at this time", { status: 404 });
  },
});

console.log(`Server running on http://localhost:${PORT}`);
