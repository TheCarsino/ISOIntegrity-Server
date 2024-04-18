import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const StandardRequirement = sequelize.define(
  "StandardRequirement",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(110),
      allowNull: false,
    },
  },
  {
    tableName: "StandardRequirement",
    timestamps: false, // Disable automatic createdAt and updatedAt timestamps
  }
);

export default StandardRequirement;
