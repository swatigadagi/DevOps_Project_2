require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

const fs = require("fs");
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.RDSHOST || process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "Demo",
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync("/usr/src/app/global-bundle.pem").toString(),
  }
});

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Backend is working",
    app: "node backend",
    port: PORT
  });
});

app.get("/api/v1/health", async (req, res) => {
  try {
    const db = await pool.query("SELECT NOW()");

    res.status(200).json({
      status: "healthy",
      message: "Backend and PostgreSQL connected",
      timestamp: db.rows[0].now
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "failed",
      message: "Database connection failed"
    });
  }
});

app.get("/api/v1/health/db", async (req, res) => {
  try {
    const db = await pool.query("SELECT NOW()");

    res.status(200).json({
      status: "healthy",
      message: "Backend and PostgreSQL connected",
      timestamp: db.rows[0].now
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "failed",
      message: "Database connection failed"
    });
  }
});

app.get("/api/v1/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");

    res.json({
      users: result.rows
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "unable to fetch users"
    });
  }
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
