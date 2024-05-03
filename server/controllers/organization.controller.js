import Organization from "../models/Organization.js";
import GroupedArea from "../models/GroupedArea.js";
import Area from "../models/Area.js";
import UnitArea from "../models/UnitArea.js";
import Process from "../models/Process.js";

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
                  required: false,
                },
              ],
              where: {
                es_area: false,
                activo: true,
              },
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
                  required: false,
                },
              ],
              where: {
                es_area: true,
                activo: true,
              },
              required: false,
            },
          ],
          where: {
            activo: true,
          },
          required: false,
        },
      ],
      where: {
        activo: true,
      },
    });
    res.json(structure);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
