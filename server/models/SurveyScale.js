import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import SurveyResult from "./SurveyResult.js";
import RiskIndicator from "./RiskIndicator.js";

const SurveyScale = sequelize.define(
  "SurveyScale",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    risks_indicator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "RiskIndicator",
        key: "id",
      },
    },
    descripcion_e1: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    descripcion_e2: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    descripcion_e3: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    descripcion_e4: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    descripcion_e5: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    descripcion_e6: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
  },
  {
    tableName: "SurveyScale",
    timestamps: false, // Disable automatic createdAt and updatedAt timestamps
  }
);

SurveyScale.belongsTo(RiskIndicator, {
  foreignKey: "risks_indicator_id",
});

export default SurveyScale;
