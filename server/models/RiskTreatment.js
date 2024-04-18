import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const RiskTreatment = sequelize.define(
  "RiskTreatment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    tableName: "RiskTreatment",
    timestamps: false, // Disable automatic createdAt and updatedAt timestamps
  }
);

export default RiskTreatment;
