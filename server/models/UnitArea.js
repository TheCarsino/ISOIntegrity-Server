import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import Area from "./Area.js";

const UnitArea = sequelize.define(
  "UnitArea",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    area_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Area",
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
    es_area: {
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
    tableName: "UnitArea",
    timestamps: false, // Disable automatic createdAt and updatedAt timestamps
  }
);

UnitArea.belongsTo(Area, { foreignKey: "area_id" });
Area.hasMany(UnitArea, { as: "Unit_Unit", foreignKey: "area_id" });
Area.hasMany(UnitArea, { as: "Area_Unit", foreignKey: "area_id" });

export default UnitArea;
