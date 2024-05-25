import RiskStandardRequirement from "../models/RiskStandardRequirement.js";
import Risk from "../models/Risk.js";
import StandardRequirement from "../models/StandardRequirement.js";
import StandardSubrequirement from "../models/StandardSubrequirement.js";
import { NIVEL_RIESGO_BAJO, calculateRiskCases } from "../constants/metrics.js";
import RiskTreatment from "../models/RiskTreatment.js";
import RiskIndicator from "../models/RiskIndicator.js";
import RiskIndicatorCategory from "../models/RiskIndicatorCategory.js";
import Process from "../models/Process.js";
import UnitArea from "../models/UnitArea.js";
import Area from "../models/Area.js";
import RiskReport from "../models/RiskReport.js";
import { Op } from "sequelize";

async function getRiskCases(riskId) {
  const today = new Date();
  const oneYearAgo = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
  );

  const riskReports = await RiskReport.findAll({
    where: {
      risk_id: riskId,
      activo: true,
      fecha_creacion: {
        [Op.gte]: oneYearAgo,
        [Op.lte]: today,
      },
    },
  });

  /* CURRENT METRIC FOR THE EVALUATION OF THE RISK LEVEL -- CAN BE CHANGED LATER */
  let numCases = calculateRiskCases(riskReports);

  return numCases;
}

export const getStandardRequirement = async (req, res) => {
  try {
    let stdReqResp = [];
    const stdreqs = await StandardRequirement.findAll();
    for (const stdreq of stdreqs) {
      const stdsub = await StandardSubrequirement.findAll({
        where: {
          std_req_id: stdreq.id,
        },
      });
      stdReqResp.push({
        id: stdreq.id,
        nombre: stdreq.nombre,
        StandardSubRequirement: stdsub,
      });
    }
    res.json(stdReqResp);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getStandardRequirementbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const stdreq = await StandardRequirement.findOne({
      where: {
        id,
      },
    });
    const stdsub = await StandardSubrequirement.findAll({
      where: {
        std_req_id: stdreq.id,
      },
    });
    res.json({
      id: stdreq.id,
      nombre: stdreq.nombre,
      StandardSubRequirement: stdsub,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getRisksbyStandardRequirementId = async (req, res) => {
  const { id } = req.params;
  try {
    let riskDetail = [];
    const stdreq = await RiskStandardRequirement.findAll({
      include: {
        model: Risk,
        include: [
          {
            model: RiskTreatment,
            attributes: ["nombre"],
            allowNull: true, //LEFT JOIN
          },
          {
            model: RiskIndicator,
            include: {
              model: RiskIndicatorCategory,
              attributes: ["nombre"],
            },
          },
          {
            model: Process,
            include: {
              model: UnitArea,
              include: {
                model: Area,
                where: {
                  activo: true,
                },
              },
              where: {
                activo: true,
              },
            },
            where: {
              activo: true,
            },
          },
        ],
        where: {
          activo: true,
        },
        required: true,
      },
      where: {
        std_req_id: id,
      },
    });

    //Add Risk Cases
    let totalInventory = 0,
      totalRiskExceeded = 0,
      totalRiskLevel = 0;
    for (const riskReq of stdreq) {
      const risk = riskReq.Risk;
      const currentDetail = {
        risk_stdreq_id: riskReq.id,
        id: risk.id,
        risk_indicator_id: risk.risk_indicator_id,
        process_id: risk.process_id,
        risk_treatment_id: risk.risk_treatment_id,
        codigo: risk.codigo,
        nombre: risk.nombre,
        descripcion: risk.descripcion,
        probabilidad: risk.probabilidad,
        impacto: risk.impacto,
        severidad_riesgo: risk.severidad_riesgo,
        escala_indicador: risk.escala_indicador,
        sintomas: risk.sintomas,
        causas: risk.causas,
        plan_accion: risk.plan_accion,
        responsables_encargados: risk.responsables_encargados,
        especificacion: risk.especificacion,
        nivel_riesgo: risk.nivel_riesgo,
        fecha_creacion: risk.fecha_creacion,
        ultima_modificacion: risk.ultima_modificacion,
        ultima_evaluacion_riesgo: risk.ultima_evaluacion_riesgo,
        activo: risk.activo,
        RiskTreatment: risk.RiskTreatment,
        RiskIndicator: risk.RiskIndicator,
        Process: risk.Process,
        total_whistlecases: 0,
        total_factorcases: 0,
      };
      const numCases = await getRiskCases(risk.id);
      currentDetail.total_whistlecases = numCases[0];
      currentDetail.total_factorcases = numCases[1];
      riskDetail.push(currentDetail);

      totalInventory++;
      if (risk.nivel_riesgo > NIVEL_RIESGO_BAJO) totalRiskExceeded++;
      totalRiskLevel += risk.nivel_riesgo;
    }

    res.json([
      riskDetail,
      {
        reqInventory: totalInventory,
        reqInventoryExc: totalRiskExceeded,
        reqTotalRiskLevel: totalRiskLevel / totalInventory,
      },
    ]);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const linkRisktoStandardRequirement = async (req, res) => {
  const { risk_id, std_req_id } = req.body;
  try {
    let newStdRisk = await RiskStandardRequirement.create(
      {
        risk_id,
        std_req_id,
        activo: true,
      },
      {
        fields: ["risk_id", "std_req_id", "activo"],
      }
    );

    return res.json(newStdRisk);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const unlinkRisktoStandardRequirement = async (req, res) => {
  const { id } = req.params;
  try {
    const riskReq = await RiskStandardRequirement.findByPk(id);
    riskReq.activo = false;
    await riskReq.save();

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
