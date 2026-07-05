import { db, usersTable, visitsTable } from "@workspace/db";
import { eq, desc, gte } from "drizzle-orm";

export type User = typeof usersTable.$inferSelect;
export type Visit = typeof visitsTable.$inferSelect;

export const storage = {
  async getUserById(id: number): Promise<User | undefined> {
    const rows = await db.select().from(usersTable).where(eq(usersTable.id, id)).limit(1);
    return rows[0];
  },

  async getUserByGoogleId(googleId: string): Promise<User | undefined> {
    const rows = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.googleId, googleId))
      .limit(1);
    return rows[0];
  },

  async getUserByEmail(email: string): Promise<User | undefined> {
    const rows = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);
    return rows[0];
  },

  async createUserWithGoogle(input: {
    username: string;
    googleId: string;
    email: string | null;
    displayName: string | null;
  }): Promise<User> {
    const rows = await db.insert(usersTable).values(input).returning();
    return rows[0];
  },

  async updateUserGoogle(
    id: number,
    updates: { googleId?: string; displayName?: string | null },
  ): Promise<User> {
    const rows = await db
      .update(usersTable)
      .set(updates)
      .where(eq(usersTable.id, id))
      .returning();
    return rows[0];
  },

  async recordVisit(userId: number, email: string | null): Promise<void> {
    await db.insert(visitsTable).values({ userId, email });
  },

  async getVisits(limit: number): Promise<Visit[]> {
    return db.select().from(visitsTable).orderBy(desc(visitsTable.visitedAt)).limit(limit);
  },

  async getVisitTimestampsSince(since: Date | null): Promise<Date[]> {
    const rows = since
      ? await db
          .select({ visitedAt: visitsTable.visitedAt })
          .from(visitsTable)
          .where(gte(visitsTable.visitedAt, since))
      : await db.select({ visitedAt: visitsTable.visitedAt }).from(visitsTable);
    return rows.map((r) => r.visitedAt);
  },
};
