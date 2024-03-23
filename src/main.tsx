import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.html(
    <>
      <h1>Polenta and Deploy 🍻!</h1>
      <p> Yeeeeee </p>
      <a href="/blog"> Blog </a>
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

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
