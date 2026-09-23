import { Pool } from "pg";

const pool = new Pool({
    host: process.env.POSTGRES_HOST?.trim(),
    port: Number(process.env.POSTGRES_PORT?.trim()),
    database: process.env.POSTGRES_DB?.trim(),
    user: process.env.POSTGRES_USER?.trim(),
    password: process.env.POSTGRES_PASSWORD?.trim(),

    // Connection pool configuration
    max: 10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
});

export default pool;