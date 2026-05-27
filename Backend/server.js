require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: false
});

app.get("/", (req, res) => {
  res.json({
    status: "running",
    app: "node backend",
    port: PORT
  });
});

app.get("/api/health", async (req, res) => {
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

app.get("/api/users", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        1 as id,
        'Swati' as name,
        'DevOps Engineer' as role
    `);

    res.json({
      users: result.rows
    });
  } catch (error) {
    res.status(500).json({
      error: "unable to fetch users"
    });
  }
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
