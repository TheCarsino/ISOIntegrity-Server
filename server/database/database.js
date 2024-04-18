import Sequelize from "sequelize";
import {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_CREDENTIALS,
  DB_NAME,
} from "../config.js";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_CREDENTIALS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
});

export default sequelize;
