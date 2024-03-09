import { integer, text, sqliteTable, } from "drizzle-orm/sqlite-core";

export const todo = sqliteTable("todo", {
    id: integer("id").primaryKey(),
    text: text("text").notNull(),
    done: integer("done", { mode: "boolean" }).default(false).notNull(),
});