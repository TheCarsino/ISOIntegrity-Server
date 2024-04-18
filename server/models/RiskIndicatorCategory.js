import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const RiskIndicatorCategory = sequelize.define(
  "RiskIndicatorCategory",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "RiskIndicatorCategory",
    timestamps: false, // Disable automatic createdAt and updatedAt timestamps
  }
);

export default RiskIndicatorCategory;
