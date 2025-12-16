import { Hono } from "hono"

const app = new Hono()

import { createJoke, deleteJoke, listJokes } from "./db/queries";

 app.get("/api/jokes", (c) => c.json(listJokes()))

 app.post("/api/jokes", async (c) => {
  const body = await c.req.json().catch(() => null)
  const item = (body?.item ?? "").toString().trim()
  if (!item) return c.json({ error: "item is required "}, 400)

  return c.json(createJoke(item), 201)
 })

 app.delete("/api/jokes/:id", (c) => {
  const id = Number(c.req.param("id"))
  if (!Number.isFinite(id)) return c.json({ error: "bad id" }, 400)

  const res = deleteJoke(id)
  if (res.changes === 0) return c.json({error: "id not found" }, 404)

  return c.json({ ok: true })
 })