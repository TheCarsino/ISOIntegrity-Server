import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import GroupedArea from "./GroupedArea.js";

const Area = sequelize.define(
  "Area",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    grouped_area_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "GroupedArea",
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
    responsable: {
      type: DataTypes.STRING(150),
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
    tableName: "Area",
    timestamps: false, // Disable automatic createdAt and updatedAt timestamps
  }
);

Area.belongsTo(GroupedArea, { foreignKey: "grouped_area_id" });
GroupedArea.hasMany(Area, { foreignKey: "grouped_area_id" });

export default Area;
