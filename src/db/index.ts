import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const databaseUrl = process.env.DATABASE_URL;

let pool: Pool | null = null;
let db: ReturnType<typeof drizzle>;

if (databaseUrl) {
  const globalForDb = globalThis as typeof globalThis & {
    __arenaNextJsPostgresqlPool?: Pool;
  };

  pool =
    globalForDb.__arenaNextJsPostgresqlPool ??
    new Pool({
      connectionString: databaseUrl,
    });

  if (process.env.NODE_ENV !== "production") {
    globalForDb.__arenaNextJsPostgresqlPool = pool;
  }

  db = drizzle(pool);
} else {
  // During build-time/CI, databaseUrl might be undefined.
  // Use a Proxy to defer throwing the error until db is actually queried at runtime.
  db = new Proxy({} as any, {
    get(target, prop) {
      throw new Error(
        `DATABASE_URL is required but was not provided in the environment variables. Cannot access database property '${String(prop)}'.`
      );
    },
  });
}

export { db, pool };
