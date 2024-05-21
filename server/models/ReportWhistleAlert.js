import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import User from "./User.js";

const ReportWhistleAlert = sequelize.define(
  "Report_WhistleAlert",
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
    nombre_contacto: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    numero_contacto: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    correo_contacto: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    posicion_contacto: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    detalles_cargo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    divulgacion: {
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
    tableName: "Report_WhistleAlert",
    timestamps: false, // Disable automatic createdAt and updatedAt timestamps
  }
);

ReportWhistleAlert.belongsTo(User, {
  foreignKey: "user_id",
});

export default ReportWhistleAlert;
