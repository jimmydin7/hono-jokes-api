import { Hono } from "hono"

const app = new Hono()

app.get("/", (c) => c.text("Works!"))

export default app