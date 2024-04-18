import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import UnitArea from "./Area.js";

const Process = sequelize.define(
  "Process",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    unit_area_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "UnitArea",
        key: "id",
      },
    },
    codigo: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    tiene_controles: {
      type: DataTypes.BOOLEAN,
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
    tableName: "Process",
    timestamps: false, // Disable automatic createdAt and updatedAt timestamps
  }
);

Process.belongsTo(UnitArea, { foreignKey: "unit_area_id" });

export default Process;
