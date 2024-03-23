import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "hono/jsx/jsx-runtime";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
const app = new Hono();
app.get("/", (c) => {
    return c.html(_jsxs(_Fragment, { children: [_jsx("h1", { children: "Polenta and Deploy \uD83C\uDF7B!" }), _jsx("p", { children: " Yeeeeee " }), _jsx("a", { href: "/blog", children: " Blog " })] }));
});
app.get("/blog", (c) => {
    return c.html(_jsx(_Fragment, { children: _jsx("h1", { children: "Blog!" }) }));
});
const port = 3000;
console.log(`Server is running on port ${port}`);
serve({
    fetch: app.fetch,
    port,
});
