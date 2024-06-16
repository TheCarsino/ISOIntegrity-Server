import UnitArea from "../models/UnitArea.js";
import Process from "../models/Process.js";
import Risk from "../models/Risk.js";
import RiskTreatment from "../models/RiskTreatment.js";
import RiskIndicator from "../models/RiskIndicator.js";
import RiskIndicatorCategory from "../models/RiskIndicatorCategory.js";
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

async function fillStructureDetailwithRisks(structure) {
  let structuredDetail = [];

  for (let unitProcess of structure) {
    let processDetail = {
      id: unitProcess.id,
      unit_area_id: unitProcess.unit_area_id,
      codigo: unitProcess.codigo,
      nombre: unitProcess.nombre,
      descripcion: unitProcess.descripcion,
      tiene_controles: unitProcess.tiene_controles,
      Risks: [],
      totalRisk: 0,
      totalSumRisk: 0,
      totalExceedRisk: 0,
      nivel_riesgo: 0,
    };

    //Add Risk Cases
    let riskDetail = [];

    for (const risk of unitProcess.Risks) {
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

      if (risk.process_id === unitProcess.id) {
        processDetail.totalSumRisk += risk.nivel_riesgo;
        processDetail.totalRisk++;
        if (risk.nivel_riesgo > NIVEL_RIESGO_BAJO)
          processDetail.totalExceedRisk++;
      }
    }
    processDetail.nivel_riesgo =
      processDetail.totalRisk <= 0
        ? 0
        : processDetail.totalSumRisk / processDetail.totalRisk;
    processDetail.Risks = riskDetail;
    structuredDetail.push(processDetail);
  }

  return structuredDetail;
}

export const getUnitArea = async (req, res) => {
  try {
    const unitareas = await UnitArea.findAll({
      where: {
        activo: true,
      },
    });
    res.json(unitareas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getUnitAreabyId = async (req, res) => {
  const { id } = req.params;
  try {
    const unitarea = await UnitArea.findOne({
      where: {
        id,
        activo: true,
      },
    });
    res.json(unitarea);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createUnitArea = async (req, res) => {
  const { area_id, codigo, nombre, descripcion, responsable } = req.body;
  try {
    let newUnitArea = await UnitArea.create(
      {
        area_id,
        codigo,
        nombre,
        descripcion,
        responsable,
        es_area: false,
        fecha_creacion: new Date().getTime(),
        ultima_modificacion: new Date().getTime(),
        activo: true,
      },
      {
        fields: [
          "area_id",
          "codigo",
          "nombre",
          "descripcion",
          "responsable",
          "es_area",
          "fecha_creacion",
          "ultima_modificacion",
          "activo",
        ],
      }
    );
    return res.json(newUnitArea);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateUnitArea = async (req, res) => {
  try {
    const { id } = req.params;
    const { area_id, codigo, nombre, descripcion, responsable } = req.body;

    const unitarea = await UnitArea.findByPk(id);
    if (unitarea.es_area == true) return res.send("Cannot edit Area");

    unitarea.area_id = area_id;
    unitarea.codigo = codigo;
    unitarea.nombre = nombre;
    unitarea.descripcion = descripcion;
    unitarea.responsable = responsable;
    unitarea.ultima_modificacion = new Date().getTime();
    await unitarea.save();

    res.json(unitarea);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUnitArea = async (req, res) => {
  const { id } = req.params;
  try {
    const unitarea = await UnitArea.findByPk(id);
    unitarea.ultima_modificacion = new Date().getTime();
    unitarea.activo = false;
    await unitarea.save();
    //Delete the Process
    const process_unit = await Process.findAll({
      where: {
        unit_area_id: id,
      },
    });
    for (let process of process_unit) {
      process.ultima_modificacion = new Date().getTime();
      process.activo = false;
      await process.save();
      //Delete the Risks
      const process_risks = await Risk.findAll({
        where: {
          process_id: process.id,
        },
      });
      for (let risk of process_risks) {
        risk.ultima_modificacion = new Date().getTime();
        risk.activo = false;
        await risk.save();
      }
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProcessbyUnitAreaId = async (req, res) => {
  const { id } = req.params;
  try {
    const unitareas = await Process.findAll({
      where: {
        unit_area_id: id,
        activo: true,
      },
    });
    res.json(unitareas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProcessRisksbyUnitAreaId = async (req, res) => {
  const { id } = req.params;
  try {
    let structuredDetail = [];
    const processes_risk = await Process.findAll({
      include: [
        {
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
          ],
          where: {
            activo: true,
          },
        },
      ],
      where: {
        unit_area_id: id,
        activo: true,
      },
    });

    structuredDetail = await fillStructureDetailwithRisks(processes_risk);

    res.json(structuredDetail);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
