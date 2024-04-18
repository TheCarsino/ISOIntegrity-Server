import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import UserRoleUnit from "./UserRoleUnit.js";

const ReportRiskFactor = sequelize.define(
  "ReportRiskFactor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_role_unit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User_X_Role_X_Unit",
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

ReportRiskFactor.belongsTo(UserRoleUnit, {
  foreignKey: "user_role_unit_id",
});

export default ReportRiskFactor;
