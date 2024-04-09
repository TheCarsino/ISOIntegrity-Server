import express from "express";
import cors from "cors";
import { pool } from "./db.js";
import { SV_PORT } from "./config.js";

const app = express();

app.use(cors());
app.use(express.json());

//Ping test
app.get("/ping", async (req, res) => {
  const [result] = await pool.query('SELECT "Pong" AS Result');
  res.json(result[0]);
});

/* Routes inclusion */

app.listen(SV_PORT);
console.log(`Server is listening on port ${SV_PORT}`);
