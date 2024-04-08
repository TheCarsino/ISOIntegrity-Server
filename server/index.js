import express from "express";
import cors from "cors";
import { PORT } from "./config.js";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);
