import express from "express";

import { checkPostgresConnection } from "./infrastructure/postgres/health";

const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "smart-support-api",
    environment: process.env.NODE_ENV,
  });
});

app.get("/health/db", async (_req, res) => {
  const postgresHealthy = await checkPostgresConnection();

  if (!postgresHealthy) {
    return res.status(503).json({
      status: "error",
      database: "postgresql",
    });
  }

  return res.json({
    status: "ok",
    database: "postgresql",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`SmartSupport API running on port ${PORT}`);
});