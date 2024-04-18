import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Organization = sequelize.define(
  "Organization",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    rubro: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    tipo: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    categoria: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    ciudad: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    pais: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    logo_filename: {
      type: DataTypes.STRING(255),
      allowNull: true,
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
    tableName: "Organization",
    timestamps: false, // Disable automatic createdAt and updatedAt timestamps
  }
);

export default Organization;
