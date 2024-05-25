import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import Risk from "./Risk.js";
import StandardRequirement from "./StandardRequirement.js";

const RiskStandardRequirement = sequelize.define(
  "RiskStandardRequirement",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    risk_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Risk",
        key: "id",
      },
    },
    std_req_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "StandardRequirement",
        key: "id",
      },
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "Risk_X_StandardRequirement",
    timestamps: false, // Disable automatic timestamps
  }
);

RiskStandardRequirement.belongsTo(Risk, { foreignKey: "risk_id" });
RiskStandardRequirement.belongsTo(StandardRequirement, {
  foreignKey: "std_req_id",
});

export default RiskStandardRequirement;
