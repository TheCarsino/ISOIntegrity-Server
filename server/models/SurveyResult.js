import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import SurveyScale from "./SurveyScale.js";

const SurveyResult = sequelize.define(
  "SurveyResult",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    survey_scale_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "SurveyScale",
        key: "id",
      },
    },
    escala_seleccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "SurveyResult",
    timestamps: false, // Disable automatic createdAt and updatedAt timestamps
  }
);

SurveyResult.belongsTo(SurveyScale, {
  foreignKey: "survey_scale_id",
});

export default SurveyResult;
