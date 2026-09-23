import pool from "./database";

export async function checkPostgresConnection(): Promise<boolean> {
    try {
        await pool.query("SELECT 1");

        return true;
    } catch (error) {
        console.error("PostgreSQL connection failed:", error);

        return false;
    }
}