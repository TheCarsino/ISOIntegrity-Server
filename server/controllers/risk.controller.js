import RiskIndicator from "../models/RiskIndicator.js";
import Risk from "../models/Risk.js";
import StandardRequirement from "../models/StandardRequirement.js";
import StandardSubrequirement from "../models/StandardSubrequirement.js";
import SurveyScale from "../models/SurveyScale.js";
import SurveyResult from "../models/SurveyResult.js";
import RiskIndSubReq from "../models/RiskIndSubReq.js";
import RiskIndicatorCategory from "../models/RiskIndicatorCategory.js";
import RiskTreatment from "../models/RiskTreatment.js";
import Process from "../models/Process.js";
import UnitArea from "../models/UnitArea.js";
import Area from "../models/Area.js";
import { calculateRiskCases } from "../constants/metrics.js";
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

async function calculateRiskLevel(risk) {
  const today = new Date();
  const oneYearAgo = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
  );

  const riskReports = await RiskReport.findAll({
    where: {
      risk_id: risk.id,
      activo: true,
      fecha_creacion: {
        [Op.gte]: oneYearAgo,
        [Op.lte]: today,
      },
    },
  });

  /* CURRENT METRIC FOR THE EVALUATION OF THE RISK LEVEL -- CAN BE CHANGED LATER */
  return evaluateRiskLevelbyReports(risk, riskReports);
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
    where: { risk_indicator_id: indId },
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

export const getRiskTreatments = async (req, res) => {
  try {
    const risksTreats = await RiskTreatment.findAll();
    res.json(risksTreats);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getRisks = async (req, res) => {
  try {
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
      where: {
        activo: true,
      },
    });
    res.json(risks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getRiskDetail = async (req, res) => {
  try {
    let riskDetail = [];
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
      where: {
        activo: true,
      },
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
      riskDetail.push(currentDetail);
    }

    res.json(riskDetail);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getRiskbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const risks = await Risk.findOne({
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
        id,
        activo: true,
      },
    });
    res.json(risks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getRiskDetailbyId = async (req, res) => {
  const { id } = req.params;
  try {
    let riskDetail = [];
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
      where: {
        id: id,
        activo: true,
      },
    });

    riskDetail = risks;
    //Add Risk Cases

    res.json(riskDetail);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createRisk = async (req, res) => {
  const {
    risk_indicator_id,
    process_id,
    risk_treatment_id,
    codigo,
    nombre,
    descripcion,
    probabilidad,
    impacto,
    severidad_riesgo,
    escala_indicador,
    sintomas,
    causas,
    plan_accion,
    responsables_encargados,
    especificacion,
  } = req.body;
  try {
    /* CURRENT METRIC FOR THE EVALUATION OF THE RISK LEVEL -- CAN BE CHANGED LATER */
    const riskLevel = evaluateRiskLevelbyReports(
      { severidad_riesgo: severidad_riesgo },
      []
    );

    let newRisk = await Risk.create(
      {
        risk_indicator_id,
        process_id,
        risk_treatment_id,
        codigo,
        nombre,
        descripcion,
        probabilidad,
        impacto,
        severidad_riesgo,
        escala_indicador,
        sintomas,
        causas,
        plan_accion,
        responsables_encargados,
        especificacion,
        nivel_riesgo: riskLevel,
        fecha_creacion: new Date().getTime(),
        ultima_modificacion: new Date().getTime(),
        activo: true,
      },
      {
        fields: [
          "risk_indicator_id",
          "process_id",
          "risk_treatment_id",
          "codigo",
          "nombre",
          "descripcion",
          "probabilidad",
          "impacto",
          "severidad_riesgo",
          "escala_indicador",
          "sintomas",
          "causas",
          "plan_accion",
          "responsables_encargados",
          "especificacion",
          "nivel_riesgo",
          "fecha_creacion",
          "ultima_modificacion",
          "activo",
        ],
      }
    );

    return res.json(newRisk);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateRisk = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      risk_indicator_id,
      process_id,
      risk_treatment_id,
      codigo,
      nombre,
      descripcion,
      probabilidad,
      impacto,
      severidad_riesgo,
      escala_indicador,
      sintomas,
      causas,
      plan_accion,
      responsables_encargados,
      especificacion,
    } = req.body;

    const risk = await Risk.findByPk(id);

    risk.risk_indicator_id = risk_indicator_id;
    risk.process_id = process_id;
    risk.risk_treatment_id = risk_treatment_id;
    risk.codigo = codigo;
    risk.nombre = nombre;
    risk.descripcion = descripcion;
    risk.probabilidad = probabilidad;
    risk.impacto = impacto;
    risk.severidad_riesgo = severidad_riesgo;
    risk.escala_indicador = escala_indicador;
    risk.sintomas = sintomas;
    risk.causas = causas;
    risk.plan_accion = plan_accion;
    risk.responsables_encargados = responsables_encargados;
    risk.especificacion = especificacion;
    risk.ultima_modificacion = new Date().getTime();

    //Validation if --> severidad has been modified [change risk level -- base or with cases]
    risk.nivel_riesgo = await calculateRiskLevel(risk);
    await risk.save();

    res.json(risk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteRisk = async (req, res) => {
  const { id } = req.params;
  try {
    const risk = await Risk.findByPk(id);
    risk.ultima_modificacion = new Date().getTime();
    risk.activo = false;
    await risk.save();

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
