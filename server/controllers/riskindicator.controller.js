import RiskIndicator from "../models/RiskIndicator.js";
import Risk from "../models/Risk.js";
import StandardRequirement from "../models/StandardRequirement.js";
import StandardSubrequirement from "../models/StandardSubrequirement.js";
import SurveyScale from "../models/SurveyScale.js";
import SurveyResult from "../models/SurveyResult.js";
import RiskIndSubReq from "../models/RiskIndSubReq.js";
import RiskIndicatorCategory from "../models/RiskIndicatorCategory.js";
import RiskTreatment from "../models/RiskTreatment.js";

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
  let stdxriskPrev = null,
    standardsub = [];
  for (let stdxrisk of stdXRisks) {
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
    if (stdxrisk.StandardSubrequirement != null)
      standardsub.push({
        id: stdxrisk.StandardSubrequirement.id,
        nombre: stdxrisk.StandardSubrequirement.nombre,
      });
    else standardsub.push(null);
    stdxriskPrev = stdxrisk;
  }

  return requisitos;
}

async function retrieveScales(indId) {
  let surveyResult = [];
  let scales = await SurveyScale.findOne({
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
  for (const scale of scales) {
    const result = await SurveyResult.findOne({
      required: false,
      where: {
        survey_scale_id: scale.id,
      },
      attributes: ["escala_seleccion", "fecha_creacion"],
      order: [["fecha_creacion", "DESC"]],
    });
    surveyResult.push({
      SurveyScale: scale,
      SurveyResult: result,
    });
  }

  return scales.dataValues;
}

async function retrieveRisks(indId) {
  const riesgos = await Risk.findAll({
    where: { risk_indicator_id: indId, activo: true },
  });
  let listRisk = [];

  for (let risk of listRisk) {
    listRisk.push({
      id: risk.id,
      codigo: risk.codigo,
      tratamiento: await RiskTreatment.findOne({
        where: {
          id: ri.risk_treatment_id,
        },
      }).nombre,
      probabilidad: risk.probabilidad,
      impacto: riesgos.impacto,
      severidad: riesgos.severidad_riesgo,
      escala: risk.escala,
      total_casos_irr: 0,
      total_casos_risk: 0,
      nivel_riesgo: risk.nivel_riesgo,
    });
  }

  // Total Risk Cases with Report Associations

  return listRisk;
}

async function fillIndicatorDetail(indicatorDetail) {
  indicatorDetail.Requisitos = await retrieveRequirements(indicatorDetail.id);
  indicatorDetail.Riesgos = await retrieveRisks(indicatorDetail.id);
  indicatorDetail.Escalas = await retrieveScales(indicatorDetail.id);

  //Fill Metrics
}

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
        nommbre: ri.nombre,
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
      fillIndicatorDetail(indicatorDetail);
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
      nommbre: riskindicator.nombre,
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
    fillIndicatorDetail(indicatorDetail);
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
    const risks = retrieveRisks(id);
    res.json(risks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
