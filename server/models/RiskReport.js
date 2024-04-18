import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import ReportRiskFactor from "./ReportRiskFactor.js";
import ReportWhistleAlert from "./ReportWhistleAlert.js";
import Risk from "./Risk.js";

const RiskReport = sequelize.define(
  "RiskReport",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    risk_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Risk",
        key: "id",
      },
    },
    report_whistlealert_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Report_WhistleAlert",
        key: "id",
      },
    },
    report_riskfactor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Report_RiskFactor",
        key: "id",
      },
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "Risk_X_Report",
    timestamps: false, // Disable automatic timestamps
  }
);

RiskReport.belongsTo(Risk, { foreignKey: "risk_id" });
RiskReport.belongsTo(ReportWhistleAlert, {
  foreignKey: "report_whistlealert_id",
});
RiskReport.belongsTo(ReportRiskFactor, { foreignKey: "report_riskfactor_id" });

export default RiskReport;
