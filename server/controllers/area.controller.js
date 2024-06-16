import Area from "../models/Area.js";
import UnitArea from "../models/UnitArea.js";

export const getArea = async (req, res) => {
  try {
    const areas = await Area.findAll({
      where: {
        activo: true,
      },
    });
    res.json(areas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAreabyId = async (req, res) => {
  const { id } = req.params;
  try {
    const area = await Area.findOne({
      where: {
        id,
        activo: true,
      },
    });
    res.json(area);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createArea = async (req, res) => {
  const { grouped_area_id, codigo, nombre, descripcion, responsable } =
    req.body;
  try {
    let newArea = await Area.create(
      {
        grouped_area_id,
        codigo,
        nombre,
        descripcion,
        responsable,
        fecha_creacion: new Date().getTime(),
        ultima_modificacion: new Date().getTime(),
        activo: true,
      },
      {
        fields: [
          "grouped_area_id",
          "codigo",
          "nombre",
          "descripcion",
          "responsable",
          "fecha_creacion",
          "ultima_modificacion",
          "activo",
        ],
      }
    );

    //By definition -- a new Area also creates it's own UnitArea
    await UnitArea.create(
      {
        area_id: newArea.id,
        codigo,
        nombre,
        descripcion,
        responsable,
        es_area: true,
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
    return res.json(newArea);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateArea = async (req, res) => {
  try {
    const { id } = req.params;
    const { grouped_area_id, codigo, nombre, descripcion, responsable } =
      req.body;

    const area = await Area.findByPk(id);
    area.grouped_area_id = grouped_area_id;
    area.codigo = codigo;
    area.nombre = nombre;
    area.descripcion = descripcion;
    area.responsable = responsable;
    area.ultima_modificacion = new Date().getTime();
    await area.save();

    //By definition -- a modified Area also modifies it's UnitArea

    const unitarea = await UnitArea.findOne({
      where: {
        area_id: id,
        es_area: true,
        activo: true,
      },
    });
    if (unitarea != null) {
      unitarea.codigo = codigo;
      unitarea.nombre = nombre;
      unitarea.descripcion = descripcion;
      unitarea.responsable = responsable;
      unitarea.ultima_modificacion = new Date().getTime();
    }

    await unitarea.save();

    res.json(area);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteArea = async (req, res) => {
  const { id } = req.params;
  try {
    const area = await Area.findByPk(id);
    area.ultima_modificacion = new Date().getTime();
    area.activo = false;
    await area.save();
    //Delete the Units
    const units_area = await UnitArea.findAll({
      where: {
        area_id: id,
      },
    });
    for (let unit of units_area) {
      unit.ultima_modificacion = new Date().getTime();
      unit.activo = false;
      await unit.save();
      //Delete the Process
      const process_unit = await Process.findAll({
        where: {
          unit_area_id: unit.id,
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
    }

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUnitAreabyAreaId = async (req, res) => {
  const { id } = req.params;
  try {
    const unitareas = await UnitArea.findAll({
      where: {
        area_id: id,
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
