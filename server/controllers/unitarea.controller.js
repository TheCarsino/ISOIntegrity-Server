import UnitArea from "../models/UnitArea.js";
import Process from "../models/Process.js";

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
