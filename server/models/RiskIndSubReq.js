import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import RiskIndicator from "./RiskIndicator.js";
import StandardRequirement from "./StandardRequirement.js";
import StandardSubrequirement from "./StandardSubrequirement.js";

const RiskIndSubReq = sequelize.define(
  "RiskIndSubReq",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    riskind_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "RiskIndicator",
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
    std_sub_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "StandardSubrequirement",
        key: "id",
      },
    },
  },
  {
    tableName: "RiskIndicator_X_StandardSubRequirement",
    timestamps: false, // Disable automatic timestamps
  }
);

RiskIndSubReq.belongsTo(RiskIndicator, { foreignKey: "riskind_id" });
RiskIndSubReq.belongsTo(StandardRequirement, { foreignKey: "std_req_id" });
RiskIndSubReq.belongsTo(StandardSubrequirement, { foreignKey: "std_sub_id" });

export default RiskIndSubReq;
