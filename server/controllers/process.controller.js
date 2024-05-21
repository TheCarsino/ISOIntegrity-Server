import Process from "../models/Process.js";
import Risk from "../models/Risk.js";
import RiskIndicator from "../models/RiskIndicator.js";
import RiskIndicatorCategory from "../models/RiskIndicatorCategory.js";
import RiskTreatment from "../models/RiskTreatment.js";

export const getProcess = async (req, res) => {
  try {
    const process = await Process.findAll({
      where: {
        activo: true,
      },
    });
    res.json(process);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProcessbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const process = await Process.findOne({
      where: {
        id,
        activo: true,
      },
    });
    res.json(process);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createProcess = async (req, res) => {
  const { unit_area_id, codigo, nombre, descripcion, tiene_controles } =
    req.body;
  try {
    let newProcess = await Process.create(
      {
        unit_area_id,
        codigo,
        nombre,
        descripcion,
        tiene_controles: tiene_controles != null ? true : false,
        fecha_creacion: new Date().getTime(),
        ultima_modificacion: new Date().getTime(),
        activo: true,
      },
      {
        fields: [
          "unit_area_id",
          "codigo",
          "nombre",
          "descripcion",
          "tiene_controles",
          "fecha_creacion",
          "ultima_modificacion",
          "activo",
        ],
      }
    );
    return res.json(newProcess);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateProcess = async (req, res) => {
  try {
    const { id } = req.params;
    const { unit_area_id, codigo, nombre, descripcion, tiene_controles } =
      req.body;

    const process = await Process.findByPk(id);

    process.unit_area_id = unit_area_id;
    process.codigo = codigo;
    process.nombre = nombre;
    process.descripcion = descripcion;
    process.tiene_controles = tiene_controles;
    process.ultima_modificacion = new Date().getTime();

    await process.save();

    res.json(process);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProcess = async (req, res) => {
  const { id } = req.params;
  try {
    const process = await Process.findByPk(id);
    process.ultima_modificacion = new Date().getTime();
    process.activo = false;
    await process.save();

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRiskbyProcessId = async (req, res) => {
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
      ],
      where: {
        process_id: id,
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
