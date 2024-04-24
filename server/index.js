import cors from "cors";
import express from "express";
import { SV_PORT } from "./config.js";
import sequelize from "./database/database.js";
import { pool } from "./db.js";

import "./models/Area.js";
import "./models/GroupedArea.js";
import "./models/Organization.js";
import "./models/Process.js";
import "./models/ReportRiskFactor.js";
import "./models/ReportWhistleAlert.js";
import "./models/Risk.js";
import "./models/RiskIndSubReq.js";
import "./models/RiskIndicator.js";
import "./models/RiskIndicatorCategory.js";
import "./models/RiskReport.js";
import "./models/RiskStandardRequirement.js";
import "./models/RiskTreatment.js";
import "./models/Role.js";
import "./models/StandardRequirement.js";
import "./models/StandardSubrequirement.js";
import "./models/SurveyResult.js";
import "./models/SurveyScale.js";
import "./models/UnitArea.js";
import "./models/User.js";
import "./models/UserRoleUnit.js";

import areaRoutes from "./routes/area.routes.js";
import authRoutes from "./routes/auth.routes.js";
import groupedAreaRoutes from "./routes/groupedarea.routes.js";
import organizacionRoutes from "./routes/organization.routes.js";
import processRoutes from "./routes/process.routes.js";
import unitAreaRoutes from "./routes/unitarea.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cors({ origin: "*" }));
//Ping test
app.get("/ping", async (req, res) => {
  const [result] = await pool.query('SELECT "Pong" AS Result');
  res.json(result[0]);
});

// Connection test to Database with sequelize
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");

  await sequelize.sync({ force: false }).then(() => {
    console.log("Syncronization to BD, done.");
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

/* Routes inclusion */
app.use(authRoutes);
app.use(areaRoutes);
app.use(groupedAreaRoutes);
app.use(organizacionRoutes);
app.use(processRoutes);
app.use(unitAreaRoutes);

app.listen(SV_PORT);
console.log(`Server is listening on port ${SV_PORT}`);
