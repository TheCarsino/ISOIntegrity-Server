import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    contrasena: {
      type: DataTypes.STRING(64),
      len: [2, 10],
      allowNull: false,
    },
    nombres: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    correo: {
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
    tableName: "User",
    timestamps: false, // Disable automatic createdAt and updatedAt timestamps
  }
);

export default User;
