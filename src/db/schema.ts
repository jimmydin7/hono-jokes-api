import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const jokes = sqliteTable("jokes", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    item: text("item").notNull(),
    createdAt: integer("created_at").notNull()
})