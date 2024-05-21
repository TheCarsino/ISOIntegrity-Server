import RiskIndicator from "../models/RiskIndicator.js";
import Risk from "../models/Risk.js";
import StandardRequirement from "../models/StandardRequirement.js";
import StandardSubrequirement from "../models/StandardSubrequirement.js";
import SurveyScale from "../models/SurveyScale.js";
import SurveyResult from "../models/SurveyResult.js";
import RiskIndSubReq from "../models/RiskIndSubReq.js";
import RiskIndicatorCategory from "../models/RiskIndicatorCategory.js";
import RiskTreatment from "../models/RiskTreatment.js";
import Area from "../models/Area.js";
import UnitArea from "../models/UnitArea.js";
import Process from "../models/Process.js";
import { NIVEL_RIESGO_BAJO, calculateRiskCases } from "../constants/metrics.js";
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

async function retrieveRequirements(indId) {
  let requisitos = [];

  let stdXRisks = await RiskIndSubReq.findAll({
    distinct: true,
    attributes: ["id", "riskind_id"],
    include: [
      {
        model: RiskIndicator,
        attributes: ["id"],
      },
      {
        model: StandardRequirement,
        attributes: ["id", "nombre"],
      },
      {
        model: StandardSubrequirement,
        attributes: ["id", "nombre"],
        required: false, // LEFT JOIN
      },
    ],
    where: {
      riskind_id: indId,
    },
  });

  let stdxriskPrev = null;
  let standardsub = [];

  for (let stdxrisk of stdXRisks) {
    if (stdxriskPrev)
      if (
        stdxriskPrev != null &&
        stdxriskPrev.StandardRequirement.id !== stdxrisk.StandardRequirement.id
      ) {
        requisitos.push({
          id: stdxriskPrev.StandardRequirement.id,
          nombre: stdxriskPrev.StandardRequirement.nombre,
          subrequisitos: standardsub,
        });
        standardsub = [];
      }
    if (stdxrisk.StandardSubrequirement != null) {
      standardsub.push({
        id: stdxrisk.StandardSubrequirement.id,
        nombre: stdxrisk.StandardSubrequirement.nombre,
      });
    } else standardsub = null;
    stdxriskPrev = stdxrisk;
  }
  requisitos.push({
    id: stdxriskPrev.StandardRequirement.id,
    nombre: stdxriskPrev.StandardRequirement.nombre,
    subrequisitos: standardsub,
  });

  return requisitos;
}

async function retrieveScales(indId) {
  let surveyResult = [];
  let scale = await SurveyScale.findOne({
    where: { risks_indicator_id: indId },
    attributes: [
      "id",
      "descripcion_e1",
      "descripcion_e2",
      "descripcion_e3",
      "descripcion_e4",
      "descripcion_e5",
      "descripcion_e6",
    ],
  });

  //Retrieve current results
  const result = await SurveyResult.findOne({
    required: false,
    where: {
      survey_scale_id: scale.id,
    },
    attributes: ["escala_seleccion", "fecha_creacion"],
    order: [["fecha_creacion", "DESC"]],
  });

  surveyResult = {
    SurveyScale: scale,
    SurveyResult: result,
  };

  return surveyResult;
}

async function retrieveRisks(indicatorDetail) {
  const riesgos = await Risk.findAll({
    where: { risk_indicator_id: indicatorDetail.id, activo: true },
  });
  let listRisk = [];

  for (let risk of riesgos) {
    const numCases = await getRiskCases(risk.id);
    indicatorDetail.casos_reportados_irreg += numCases[0];
    indicatorDetail.casos_reportados_riesgo += numCases[1];

    listRisk.push({
      id: risk.id,
      codigo: risk.codigo,
      tratamiento: await RiskTreatment.findOne({
        where: {
          id: risk.risk_treatment_id,
        },
      }).nombre,
      probabilidad: risk.probabilidad,
      impacto: risk.impacto,
      severidad: risk.severidad_riesgo,
      escala: risk.escala,
      total_casos_irr: 0,
      total_casos_risk: 0,
      nivel_riesgo: risk.nivel_riesgo,
      es_excedido: risk.nivel_riesgo > NIVEL_RIESGO_BAJO ? 1 : 0,
    });
  }

  return listRisk;
}

async function retrieveRisksDetail(indicatorDetail) {
  let listRisk = [];

  const risks = await Risk.findAll({
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
    where: { risk_indicator_id: indicatorDetail.id, activo: true },
  });
  //Add Risk Cases
  for (const risk of risks) {
    const currentDetail = {
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

    indicatorDetail.casos_reportados_irreg += currentDetail.total_whistlecases;
    indicatorDetail.casos_reportados_riesgo += currentDetail.total_factorcases;

    listRisk.push(currentDetail);
  }

  return listRisk;
}

function fillMetrics(indicatorDetail) {
  function sumExcedidos(risks) {
    var total = 0;
    for (const risk of risks) {
      total += risk.es_excedido;
    }
    return total;
  }

  let currentScaleResult =
    indicatorDetail.Escalas?.SurveyResult?.escala_seleccion ?? 0;
  currentScaleResult = (currentScaleResult / indicatorDetail.escala) * 100;
  indicatorDetail.resultado_cuestionario = currentScaleResult;

  indicatorDetail.nivel_riesgo = indicatorDetail.resultado_cuestionario * 0.85;
  //Add Detail depending on risk
  indicatorDetail.total_riesgos = indicatorDetail.Riesgos.length;
  indicatorDetail.total_excedidos = sumExcedidos(indicatorDetail.Riesgos);
}

function fillMetricsOrganization(finalMetrics, indicatorDetail) {
  //Now let's fill the OrganizationRisk, Total Inventory, Risk Tolerance and Cuestionary Results
  finalMetrics.inventario_riesgo += indicatorDetail.total_riesgos;
  finalMetrics.inventario_excedido += indicatorDetail.total_excedidos;
  finalMetrics.evaluacion_org +=
    (indicatorDetail.resultado_cuestionario / 100) * indicatorDetail.impacto;
  finalMetrics.nivel_riesgo_org +=
    (indicatorDetail.nivel_riesgo / 100) * indicatorDetail.impacto;
}

async function fillIndicatorDetail(indicatorDetail) {
  indicatorDetail.Requisitos = await retrieveRequirements(indicatorDetail.id);
  indicatorDetail.Riesgos = await retrieveRisks(indicatorDetail);
  indicatorDetail.Escalas = await retrieveScales(indicatorDetail.id);
  await fillMetrics(indicatorDetail);
}

async function fillIndicatorDetailbyId(indicatorDetail) {
  indicatorDetail.Requisitos = await retrieveRequirements(indicatorDetail.id);
  indicatorDetail.Riesgos = await retrieveRisksDetail(indicatorDetail);
  indicatorDetail.Escalas = await retrieveScales(indicatorDetail.id);
  await fillMetrics(indicatorDetail);
}
async function fillOrganization(finalMetrics, indicatorDetail) {
  indicatorDetail.Riesgos = await retrieveRisks(indicatorDetail);
  indicatorDetail.Escalas = await retrieveScales(indicatorDetail.id);
  await fillMetrics(indicatorDetail);
  await fillMetricsOrganization(finalMetrics, indicatorDetail);
}

export const getGeneralRiskbyOrganizationId = async (req, res) => {
  let finalMetrics = {
    inventario_riesgo: 0,
    inventario_excedido: 0,
    evaluacion_org: 0.0,
    nivel_riesgo_org: 0.0,
  };
  try {
    const riskindicators = await RiskIndicator.findAll({
      attributes: ["id", "escala", "impacto"],
    });
    for (let ri of riskindicators) {
      let indicatorDetail = {
        id: ri.id,
        Riesgos: {},
        Escalas: {},
        escala: ri.escala,
        impacto: ri.impacto,
        total_riesgos: 0,
        casos_reportados_irreg: 0,
        casos_reportados_riesgo: 0,
        resultado_cuestionario: 0,
        nivel_riesgo: 0,
      };

      await fillOrganization(finalMetrics, indicatorDetail);
    }
    res.json(finalMetrics);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getRiskIndicator = async (req, res) => {
  try {
    const riskindicators = await RiskIndicator.findAll();
    res.json(riskindicators);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getRiskIndicatorDetail = async (req, res) => {
  try {
    let riskindicatorsDetail = [];
    const riskindicators = await RiskIndicator.findAll();
    for (let ri of riskindicators) {
      const indicatorCategory = await RiskIndicatorCategory.findOne({
        where: {
          id: ri.riskind_cat_id,
        },
      });
      const indicatorDetail = {
        id: ri.id,
        categoria: indicatorCategory.nombre,
        codigo: ri.codigo,
        nombre: ri.nombre,
        escala: ri.escala,
        impacto: ri.impacto,
        Requisitos: [],
        Escalas: null,
        Riesgos: [],
        total_riesgos: 0,
        casos_reportados_irreg: 0,
        casos_reportados_riesgo: 0,
        resultado_cuestionario: 0,
        nivel_riesgo: 0,
      };
      await fillIndicatorDetail(indicatorDetail);
      riskindicatorsDetail.push(indicatorDetail);
    }
    res.json(riskindicatorsDetail);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getRiskIndicatorbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const riskindicator = await RiskIndicator.findOne({
      where: {
        id,
      },
    });
    res.json(riskindicator);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getRiskIndicatorDetailbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const riskindicator = await RiskIndicator.findOne({
      where: { id: id },
    });
    const indicatorDetail = {
      id: riskindicator.id,
      categoria: await RiskIndicatorCategory.findOne({
        where: {
          id: riskindicator.riskind_cat_id,
        },
      }).nombre,
      codigo: riskindicator.codigo,
      nombre: riskindicator.nombre,
      escala: riskindicator.escala,
      impacto: riskindicator.impacto,
      Requisitos: [],
      Escalas: null,
      Riesgos: [],
      total_riesgos: 0,
      casos_reportados_irreg: 0,
      casos_reportados_riesgo: 0,
      resultado_cuestionario: 0,
      nivel_riesgo: 0,
    };
    await fillIndicatorDetailbyId(indicatorDetail);
    res.json(indicatorDetail);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getRiskbyRiskIndicatorId = async (req, res) => {
  const { id } = req.params;
  try {
    const risks = retrieveRisks(indicatorDetail);
    res.json(risks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
