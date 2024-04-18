import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import RiskIndicatorCategory from "./RiskIndicatorCategory.js";

const RiskIndicator = sequelize.define(
  "RiskIndicator",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    riskind_cat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "RiskIndicatorCategory",
        key: "id",
      },
    },
    codigo: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    escala: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    impacto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "RiskIndicator",
    timestamps: false, // Disable automatic createdAt and updatedAt timestamps
  }
);

RiskIndicator.belongsTo(RiskIndicatorCategory, {
  foreignKey: "riskind_cat_id",
});

export default RiskIndicator;
