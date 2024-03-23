import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.html(
    <>
      <h1>Polenta e Deploy 2024 🍻!</h1>
      <a href="/blog"> Blog </a>
      <div>
        <img src="/static/tdd.jpeg" alt="tdd" />
      </div>
    </>
  );
});

app.get("/blog", (c) => {
  return c.html(
    <>
      <h1>Blog!</h1>
    </>
  );
});

app.use("/static/*", serveStatic({ root: "./" }));

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
