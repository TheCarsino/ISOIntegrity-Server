import Organization from "../models/Organization.js";
import GroupedArea from "../models/GroupedArea.js";
import Area from "../models/Area.js";
import UnitArea from "../models/UnitArea.js";
import Process from "../models/Process.js";
import Risk from "../models/Risk.js";
import { NIVEL_RIESGO_BAJO } from "../constants/metrics.js";

function fillStructureDetailwithRisks(structure, risks, structuredDetail) {
  for (let groupedarea of structure) {
    let groupedAreaDetail = {
      id: groupedarea.id,
      codigo: groupedarea.codigo,
      nombre: groupedarea.nombre,
      Areas: [],
    };

    let listAreaDetail = [];
    for (let area of groupedarea.Areas) {
      let areaDetail = {
        id: area.id,
        grouped_area_id: area.grouped_area_id,
        codigo: area.codigo,
        nombre: area.nombre,
        descripcion: area.descripcion,
        responsable: area.responsable,
        Unit_Unit: [],
        Area_Unit: [],
        totalRisk: 0,
        totalSumRisk: 0,
        totalExceedRisk: 0,
        nivel_riesgo: 0,
      };
      let listUnitDetail = [];
      for (let unit of area.Unit_Unit) {
        let unitDetail = {
          id: unit.id,
          area_id: unit.area_id,
          codigo: unit.codigo,
          nombre: unit.nombre,
          descripcion: unit.descripcion,
          responsable: unit.responsable,
          es_area: unit.es_area,
          Processes: [],
          totalRisk: 0,
          totalSumRisk: 0,
          totalExceedRisk: 0,
          nivel_riesgo: 0,
        };
        let listProcessDetail = [];

        for (let unitProcess of unit.Processes) {
          let processDetail = {
            id: unitProcess.id,
            unit_area_id: unitProcess.unit_area_id,
            codigo: unitProcess.codigo,
            nombre: unitProcess.nombre,
            descripcion: unitProcess.descripcion,
            tiene_controles: unitProcess.tiene_controles,
            totalRisk: 0,
            totalSumRisk: 0,
            totalExceedRisk: 0,
            nivel_riesgo: 0,
          };
          risks.map((risk) => {
            if (risk.process_id === unitProcess.id) {
              processDetail.totalSumRisk += risk.nivel_riesgo;
              processDetail.totalRisk++;
              if (risk.nivel_riesgo > NIVEL_RIESGO_BAJO)
                processDetail.totalExceedRisk++;
            }
          });
          processDetail.nivel_riesgo =
            processDetail.totalRisk <= 0
              ? 0
              : processDetail.totalSumRisk / processDetail.totalRisk;

          listProcessDetail.push(processDetail);

          unitDetail.totalSumRisk += processDetail.totalSumRisk;
          unitDetail.totalRisk += processDetail.totalRisk;
          unitDetail.totalExceedRisk += processDetail.totalExceedRisk;
        }

        unitDetail.nivel_riesgo =
          unitDetail.totalRisk <= 0
            ? 0
            : unitDetail.totalSumRisk / unitDetail.totalRisk;
        unitDetail.Processes = listProcessDetail;

        listUnitDetail.push(unitDetail);
      }
      let listAreaUnitDetail = [];
      if (area.Area_Unit[0] != null) {
        let areaUnitDetail = {
          id: area.Area_Unit[0].id,
          grouped_area_id: area.Area_Unit[0].grouped_area_id,
          codigo: area.Area_Unit[0].codigo,
          nombre: area.Area_Unit[0].nombre,
          descripcion: area.Area_Unit[0].descripcion,
          responsable: area.Area_Unit[0].responsable,
          es_area: area.Area_Unit[0].es_area,
          Processes: [],
          totalRisk: 0,
          totalSumRisk: 0,
          totalExceedRisk: 0,
          nivel_riesgo: 0,
        };
        let listProcessDetail = [];
        for (let areaProcess of area.Area_Unit[0].Processes) {
          let processDetail = {
            id: areaProcess.id,
            unit_area_id: areaProcess.unit_area_id,
            codigo: areaProcess.codigo,
            nombre: areaProcess.nombre,
            descripcion: areaProcess.descripcion,
            tiene_controles: areaProcess.tiene_controles,
            totalRisk: 0,
            totalSumRisk: 0,
            totalExceedRisk: 0,
            nivel_riesgo: 0,
          };
          risks.map((risk) => {
            if (risk.process_id === areaProcess.id) {
              processDetail.totalSumRisk += risk.nivel_riesgo;
              processDetail.totalRisk++;
              if (risk.nivel_riesgo > NIVEL_RIESGO_BAJO)
                processDetail.totalExceedRisk++;
            }
          });
          processDetail.nivel_riesgo =
            processDetail.totalRisk <= 0
              ? 0
              : processDetail.totalSumRisk / processDetail.totalRisk;

          listProcessDetail.push(processDetail);

          areaUnitDetail.totalSumRisk += processDetail.totalSumRisk;
          areaUnitDetail.totalRisk += processDetail.totalRisk;
          areaUnitDetail.totalExceedRisk += processDetail.totalExceedRisk;
        }
        areaUnitDetail.nivel_riesgo =
          areaUnitDetail.totalRisk <= 0
            ? 0
            : areaUnitDetail.totalSumRisk / areaUnitDetail.totalRisk;
        areaUnitDetail.Processes = listProcessDetail;

        areaDetail.totalSumRisk += areaUnitDetail.totalSumRisk;
        areaDetail.totalRisk += areaUnitDetail.totalRisk;
        areaDetail.totalExceedRisk += areaUnitDetail.totalExceedRisk;

        listAreaUnitDetail.push(areaUnitDetail);
      }

      areaDetail.nivel_riesgo =
        areaDetail.totalRisk <= 0
          ? 0
          : areaDetail.totalSumRisk / areaDetail.totalRisk;
      areaDetail.Unit_Unit = listUnitDetail;
      areaDetail.Area_Unit = listAreaUnitDetail;

      listAreaDetail.push(areaDetail);
    }
    groupedAreaDetail.Areas = listAreaDetail;

    structuredDetail.push(groupedAreaDetail);
  }
}

export const getOrganization = async (req, res) => {
  try {
    const organizations = await Organization.findAll();
    res.json(organizations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getOrganizationbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const organization = await Organization.findOne({
      where: {
        id,
      },
    });
    res.json(organization);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getOrganizationbyStructure = async (req, res) => {
  try {
    const structure = await GroupedArea.findAll({
      include: [
        {
          model: Area,
          include: [
            {
              model: UnitArea,
              as: "Unit_Unit",
              include: [
                {
                  model: Process,
                  where: {
                    activo: true,
                  },
                  order: [["codigo", "ASC"]],
                  required: false,
                },
              ],
              where: {
                es_area: false,
                activo: true,
              },
              order: [["codigo", "ASC"]],
              required: false,
            },
            {
              model: UnitArea,
              as: "Area_Unit",
              include: [
                {
                  model: Process,
                  where: {
                    activo: true,
                  },
                  order: [["codigo", "ASC"]],
                  required: false,
                },
              ],
              where: {
                es_area: true,
                activo: true,
              },
              order: [["codigo", "ASC"]],
              required: false,
            },
          ],
          where: {
            activo: true,
          },
          order: [["codigo", "ASC"]],
          required: false,
        },
      ],
      where: {
        activo: true,
      },
      order: [["codigo", "ASC"]],
    });
    res.json(structure);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getOrganizationbyStructureDetail = async (req, res) => {
  try {
    let structuredDetail = [];

    const structure = await GroupedArea.findAll({
      include: [
        {
          model: Area,
          include: [
            {
              model: UnitArea,
              as: "Unit_Unit",
              include: [
                {
                  model: Process,
                  where: {
                    activo: true,
                  },
                  order: [["codigo", "ASC"]],
                  required: false,
                },
              ],
              where: {
                es_area: false,
                activo: true,
              },
              order: [["codigo", "ASC"]],
              required: false,
            },
            {
              model: UnitArea,
              as: "Area_Unit",
              include: [
                {
                  model: Process,
                  where: {
                    activo: true,
                  },
                  order: [["codigo", "ASC"]],
                  required: false,
                },
              ],
              where: {
                es_area: true,
                activo: true,
              },
              order: [["codigo", "ASC"]],
              required: false,
            },
          ],
          where: {
            activo: true,
          },
          order: [["codigo", "ASC"]],
          required: false,
        },
      ],
      where: {
        activo: true,
      },
      order: [["codigo", "ASC"]],
    });

    const risks = await Risk.findAll({
      attributes: ["id", "process_id", "nivel_riesgo"],
      where: {
        activo: true,
      },
    });

    fillStructureDetailwithRisks(structure, risks, structuredDetail);

    res.json(structuredDetail);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
