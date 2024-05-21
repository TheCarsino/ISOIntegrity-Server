import UserRoleUnit from "../models/UserRoleUnit.js";
import User from "../models/User.js";
import Role from "../models/Role.js";
import UnitArea from "../models/UnitArea.js";
import ReportWhistleAlert from "../models/ReportWhistleAlert.js";
import ReportRiskFactor from "../models/ReportRiskFactor.js";
import RiskReport from "../models/RiskReport.js";
import Risk from "../models/Risk.js";
import {
  COLABORADOR,
  evaluateRiskLevelbyReports,
  logaritmicCalculation,
} from "../constants/metrics.js";
import { Op } from "sequelize";
import Process from "../models/Process.js";
import Area from "../models/Area.js";

async function calculateRiskLevel(idRisk) {
  const today = new Date();
  const oneYearAgo = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
  );

  const risk = await Risk.findByPk(idRisk);

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
  risk.nivel_riesgo = evaluateRiskLevelbyReports(risk, riskReports);

  await risk.save();
}

async function getLastestCode(typeReport) {
  if (typeReport === "whistlealert") {
    let maxId = await ReportWhistleAlert.max("id");
    if (maxId == null) maxId = 0;
    return "IRR" + (maxId + 1).toString();
  } else {
    let maxId = await ReportRiskFactor.max("id");
    if (maxId == null) maxId = 0;
    return "FAC" + (maxId + 1).toString();
  }
}

async function retrieveWhistleReportsbyUserPermission(userPermissions) {
  let reports = [],
    allowedUnitAreas = [];

  if (userPermissions == null) return reports;

  if (userPermissions.UnitAreas != null)
    for (const unit of userPermissions.UnitAreas)
      allowedUnitAreas.push(unit.id);

  let riskReport = [];
  //Obtain the report_x_risk association for the user
  if (userPermissions.role_id === COLABORADOR) {
    riskReport = await RiskReport.findAll({
      include: [
        {
          model: ReportWhistleAlert,
          include: [
            {
              attributes: ["id"],
              model: User,
              where: {
                id: userPermissions.user_id,
              },
              required: true,
            },
          ],
          required: true,
        },
        {
          model: Risk,
          include: [
            {
              model: Process,
              include: {
                model: UnitArea,
                include: {
                  model: Area,
                  where: {
                    activo: true,
                  },
                  required: true,
                },
                where: {
                  id: {
                    [Op.in]: allowedUnitAreas,
                  },
                  activo: true,
                },
                required: true,
              },
              where: {
                activo: true,
              },
              required: true,
            },
          ],
          where: {
            activo: true,
          },
          required: true,
        },
      ],
      where: {
        activo: true,
      },
    });
  } else if (userPermissions.UnitAreas != null) {
    riskReport = await RiskReport.findAll({
      include: [
        {
          model: ReportWhistleAlert,
          include: [
            {
              attributes: ["id"],
              model: User,
            },
          ],
          required: true,
        },
        {
          model: Risk,
          include: [
            {
              model: Process,
              include: {
                model: UnitArea,
                include: {
                  model: Area,
                  where: {
                    activo: true,
                  },
                  required: true,
                },
                where: {
                  id: {
                    [Op.in]: allowedUnitAreas,
                  },
                  activo: true,
                },
                required: true,
              },
              where: {
                activo: true,
              },
              required: true,
            },
          ],
          where: {
            activo: true,
          },
          required: true,
        },
      ],
      where: {
        activo: true,
      },
    });
  } else {
    riskReport = await RiskReport.findAll({
      include: [
        {
          model: ReportWhistleAlert,
          include: [
            {
              attributes: ["id"],
              model: User,
            },
          ],
          required: true,
        },
        {
          model: Risk,
          include: [
            {
              model: Process,
              include: {
                model: UnitArea,
                include: {
                  model: Area,
                  where: {
                    activo: true,
                  },
                  required: true,
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
        },
      ],
      where: {
        activo: true,
      },
    });
  }

  return riskReport;
}

async function retrieveRiskReportsbyUserPermission(userPermissions) {
  let reports = [],
    allowedUnitAreas = [];

  if (userPermissions == null) return reports;

  if (userPermissions.UnitAreas != null)
    for (const unit of userPermissions.UnitAreas)
      allowedUnitAreas.push(unit.id);

  let riskReport = [];
  //Obtain the report_x_risk association for the user
  if (userPermissions.role_id === COLABORADOR) return [];
  if (userPermissions.UnitAreas != null) {
    riskReport = await RiskReport.findAll({
      include: [
        {
          model: ReportRiskFactor,
          include: [
            {
              model: User,
            },
          ],
          required: true,
        },
        {
          model: Risk,
          include: [
            {
              model: Process,
              include: {
                model: UnitArea,
                include: {
                  model: Area,
                  where: {
                    activo: true,
                  },
                  required: true,
                },
                where: {
                  id: {
                    [Op.in]: allowedUnitAreas,
                  },
                  activo: true,
                },
                required: true,
              },
              where: {
                activo: true,
              },
              required: true,
            },
          ],
          where: {
            activo: true,
          },
          required: true,
        },
      ],
      where: {
        activo: true,
      },
    });
  } else {
    riskReport = await RiskReport.findAll({
      include: [
        {
          model: ReportRiskFactor,
          include: [
            {
              model: User,
            },
          ],
          required: true,
        },
        {
          model: Risk,
          include: [
            {
              model: Process,
              include: {
                model: UnitArea,
                include: {
                  model: Area,
                  where: {
                    activo: true,
                  },
                  required: true,
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
        },
      ],
      where: {
        activo: true,
      },
    });
  }

  return riskReport;
}

export const testMetrics = async (req, res) => {
  const severities = [0.2, 0.4, 0.6, 0.8, 1];
  const num_cases = [0, 1, 2, 4, 6, 10];

  let listTest = [];
  for (let severity of severities) {
    for (let num of num_cases) {
      const output = logaritmicCalculation(severity, num);
      listTest.push(
        `For severity: ${severity} - num_cases: ${num} => ${output}`
      );
    }
  }
  return res.json(listTest);
};

export const getReportWhistleAlertbyUserId = async (req, res) => {
  const { id } = req.params;
  try {
    let userPermissions = null;

    const permissions = await UserRoleUnit.findAll({
      attributes: ["id", "user_id", "role_id", "unit_area_id"],
      include: [
        {
          model: User,
          attributes: ["usuario", "nombres", "apellidos", "correo"],
          where: { activo: true },
        },
        {
          model: Role,
          attributes: ["nombre", "descripcion"],
          where: { activo: true },
        },
        {
          model: UnitArea,
          attributes: ["codigo", "nombre"],
          where: { activo: true },
          required: false, // LEFT JOIN
        },
      ],
      where: {
        user_id: id,
        activo: true,
      },
    });

    let unitList = [];

    for (let permission of permissions) {
      if (permission.UnitArea != null)
        unitList.push({
          id: permission.unit_area_id,
          codigo: permission.UnitArea.codigo,
          nombre: permission.UnitArea.nombre,
        });
    }
    userPermissions = {
      user_id: permissions[0].user_id,
      role_id: permissions[0].role_id,
      User: permissions[0].User,
      Role: permissions[0].Role,
      UnitAreas: unitList.length == 0 ? null : unitList,
    };
    if (userPermissions == null)
      return res.json(
        "This user doesn't have permissions enabled in the system."
      );

    //Retrieve Reports by User
    const reports = await retrieveWhistleReportsbyUserPermission(
      userPermissions
    );

    res.json(reports);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createReportWhistleAlert = async (req, res) => {
  const {
    risk_id,
    user_id,
    nombre_contacto,
    numero_contacto,
    correo_contacto,
    posicion_contacto,
    detalles_cargo,
    divulgacion,
    informacion_adicional,
  } = req.body;
  try {
    //Create the current report
    const code = await getLastestCode("whistlealert");
    let newReport = await ReportWhistleAlert.create(
      {
        user_id,
        codigo: code,
        nombre_contacto,
        numero_contacto,
        correo_contacto,
        posicion_contacto,
        detalles_cargo,
        divulgacion,
        informacion_adicional,
        fecha_registro: new Date().getTime(),
        activo: true,
      },
      {
        fields: [
          "user_id",
          "codigo",
          "nombre_contacto",
          "numero_contacto",
          "correo_contacto",
          "posicion_contacto",
          "detalles_cargo",
          "divulgacion",
          "informacion_adicional",
          "fecha_registro",
          "activo",
        ],
      }
    );

    //Create the report_X_risk association
    const riskReport = await RiskReport.create(
      {
        risk_id: risk_id,
        report_whistlealert_id: newReport.id,
        report_riskfactor_id: null,
        fecha_creacion: new Date().getTime(),
        activo: true,
      },
      {
        fields: [
          "risk_id",
          "report_whistlealert_id",
          "report_riskfactor_id",
          "fecha_creacion",
          "activo",
        ],
      }
    );

    //Update the risk "nivel_riesgo" value
    await calculateRiskLevel(risk_id);

    return res.json(newReport);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteReportWhistleAlert = async (req, res) => {
  const { id } = req.params;
  try {
    //Delete the current report
    const report = await ReportWhistleAlert.findByPk(id);
    report.ultima_modificacion = new Date().getTime();
    report.activo = false;
    await report.save();

    //Delete the report_X_risk association
    const riskReport = await RiskReport.findOne({
      where: {
        report_whistlealert_id: id,
      },
    });

    riskReport.activo = false;

    await riskReport.save();

    //Update the risk "nivel_riesgo" value
    await calculateRiskLevel(riskReport.risk_id);

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getReportRiskFactorbyUserId = async (req, res) => {
  const { id } = req.params;
  try {
    let userPermissions = null;

    const permissions = await UserRoleUnit.findAll({
      attributes: ["id", "user_id", "role_id", "unit_area_id"],
      include: [
        {
          model: User,
          attributes: ["usuario", "nombres", "apellidos", "correo"],
          where: { activo: true },
        },
        {
          model: Role,
          attributes: ["nombre", "descripcion"],
          where: { activo: true },
        },
        {
          model: UnitArea,
          attributes: ["codigo", "nombre"],
          where: { activo: true },
          required: false, // LEFT JOIN
        },
      ],
      where: {
        user_id: id,
        activo: true,
      },
    });

    let unitList = [];

    for (let permission of permissions) {
      if (permission.UnitArea != null)
        unitList.push({
          id: permission.unit_area_id,
          codigo: permission.UnitArea.codigo,
          nombre: permission.UnitArea.nombre,
        });
    }
    userPermissions = {
      user_id: permissions[0].user_id,
      role_id: permissions[0].role_id,
      User: permissions[0].User,
      Role: permissions[0].Role,
      UnitAreas: unitList.length == 0 ? null : unitList,
    };
    if (userPermissions == null)
      return res.json(
        "This user doesn't have permissions enabled in the system."
      );

    //Retrieve Reports by User
    const reports = await retrieveRiskReportsbyUserPermission(userPermissions);

    res.json(reports);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createReportRiskFactor = async (req, res) => {
  const {
    risk_id,
    user_id,
    descripcion_corta,
    detalle,
    informacion_adicional,
  } = req.body;
  try {
    //Create the current report
    const code = await getLastestCode("riskfactor");
    let newReport = await ReportRiskFactor.create(
      {
        user_id,
        codigo: code,
        descripcion_corta,
        detalle,
        informacion_adicional,
        fecha_registro: new Date().getTime(),
        activo: true,
      },
      {
        fields: [
          "user_id",
          "codigo",
          "descripcion_corta",
          "detalle",
          "informacion_adicional",
          "fecha_registro",
          "activo",
        ],
      }
    );

    //Create the report_X_risk association
    const riskReport = await RiskReport.create(
      {
        risk_id: risk_id,
        report_whistlealert_id: null,
        report_riskfactor_id: newReport.id,
        fecha_creacion: new Date().getTime(),
        activo: true,
      },
      {
        fields: [
          "risk_id",
          "report_whistlealert_id",
          "report_riskfactor_id",
          "fecha_creacion",
          "activo",
        ],
      }
    );

    //Update the risk "nivel_riesgo" value
    await calculateRiskLevel(risk_id);

    return res.json(newReport);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteReportRiskFactor = async (req, res) => {
  const { id } = req.params;
  try {
    //Delete the current report
    const report = await ReportRiskFactor.findByPk(id);
    report.ultima_modificacion = new Date().getTime();
    report.activo = false;
    await report.save();

    //Delete the report_X_risk association
    const riskReport = await RiskReport.findOne({
      where: {
        report_riskfactor_id: id,
      },
    });

    riskReport.activo = false;

    await riskReport.save();

    //Update the risk "nivel_riesgo" value
    await calculateRiskLevel(riskReport.risk_id);

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
