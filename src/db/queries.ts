import { db } from "./index"
import { jokes } from "./schema"
import { eq, desc } from "drizzle-orm"

export function listJokes() {
    return db.select().from(jokes).orderBy(desc(jokes.id)).all()
}

export function createJoke(item: string) {
    const createdAt = Math.floor(Date.now() / 1000) //date

    const res = db.insert(jokes).values({
        item,
        createdAt
    }).run()

    return { id: Number(res.lastInsertRowid) }
}

export function deleteJoke(id: number){
    const res = db.delete(jokes).where(eq(jokes.id, id)).run()
    return { changes: res.changes }
}