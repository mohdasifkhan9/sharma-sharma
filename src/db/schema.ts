import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const consultations = pgTable("consultations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Consultation = typeof consultations.$inferSelect;
export type NewConsultation = typeof consultations.$inferInsert;
