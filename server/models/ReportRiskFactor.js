import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import User from "./User.js";

const ReportRiskFactor = sequelize.define(
  "ReportRiskFactor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
    codigo: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    descripcion_corta: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    detalle: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    informacion_adicional: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fecha_registro: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "Report_RiskFactor",
    timestamps: false, // Disable automatic createdAt and updatedAt timestamps
  }
);

ReportRiskFactor.belongsTo(User, {
  foreignKey: "user_id",
});

export default ReportRiskFactor;
