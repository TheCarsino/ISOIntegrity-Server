import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import Process from "./Process.js";
import RiskIndicator from "./RiskIndicator.js";
import RiskTreatment from "./RiskTreatment.js";

const Risk = sequelize.define(
  "Risk",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    risk_indicator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "RiskIndicator",
        key: "id",
      },
    },
    process_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Process",
        key: "id",
      },
    },
    risk_treatment_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "RiskTreatment",
        key: "id",
      },
    },
    codigo: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    probabilidad: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    impacto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    severidad_riesgo: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    escala_indicador: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    sintomas: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    causas: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    plan_accion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    responsables_encargados: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    especificacion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    nivel_riesgo: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ultima_modificacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ultima_evaluacion_riesgo: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "Risk",
    timestamps: false, // Disable automatic createdAt and updatedAt timestamps
  }
);

Risk.belongsTo(RiskIndicator, { foreignKey: "risk_indicator_id" });
Risk.belongsTo(RiskTreatment, { foreignKey: "risk_treatment_id" });

export default Risk;
