import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import StandardRequirement from "./StandardRequirement.js";

const StandardSubrequirement = sequelize.define(
  "StandardSubrequirement",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    std_req_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "StandardRequirement",
        key: "id",
      },
    },
    nombre: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    tableName: "StandardSubrequirement",
    timestamps: false, // Disable automatic createdAt and updatedAt timestamps
  }
);

StandardSubrequirement.belongsTo(StandardRequirement, {
  foreignKey: "std_req_id",
});

export default StandardSubrequirement;
