import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const GroupedArea = sequelize.define(
  "GroupedArea",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(100),
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
    tableName: "GroupedArea",
    timestamps: false, // Disable automatic createdAt and updatedAt timestamps
  }
);

export default GroupedArea;
