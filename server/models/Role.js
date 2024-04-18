import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Role = sequelize.define(
  "Role",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ultima_modificacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "Role",
    timestamps: false, // Disable automatic createdAt and updatedAt timestamps
  }
);

export default Role;
