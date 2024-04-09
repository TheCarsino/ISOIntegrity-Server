import express from "express";
import cors from "cors";
import { SV_PORT } from "./config.js";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(SV_PORT);
console.log(`Server is listening on port ${SV_PORT}`);
