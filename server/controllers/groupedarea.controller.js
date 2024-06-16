import GroupedArea from "../models/GroupedArea.js";
import Area from "../models/Area.js";

export const getGroupedArea = async (req, res) => {
  try {
    const groupedareas = await GroupedArea.findAll({
      where: {
        activo: true,
      },
    });
    res.json(groupedareas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getGroupedAreabyId = async (req, res) => {
  const { id } = req.params;
  try {
    const groupedarea = await GroupedArea.findOne({
      where: {
        id,
        activo: true,
      },
    });
    res.json(groupedarea);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createGroupedArea = async (req, res) => {
  const { codigo, nombre } = req.body;
  try {
    let newGroupedArea = await GroupedArea.create(
      {
        codigo,
        nombre,
        fecha_creacion: new Date().getTime(),
        ultima_modificacion: new Date().getTime(),
        activo: true,
      },
      {
        fields: [
          "codigo",
          "nombre",
          "fecha_creacion",
          "ultima_modificacion",
          "activo",
        ],
      }
    );
    return res.json(newGroupedArea);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateGroupedArea = async (req, res) => {
  try {
    const { id } = req.params;
    const { codigo, nombre } = req.body;

    const groupedarea = await GroupedArea.findByPk(id);
    groupedarea.codigo = codigo;
    groupedarea.nombre = nombre;
    groupedarea.ultima_modificacion = new Date().getTime();
    await groupedarea.save();

    res.json(groupedarea);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteGroupedArea = async (req, res) => {
  const { id } = req.params;
  try {
    const groupedarea = await GroupedArea.findByPk(id);
    groupedarea.ultima_modificacion = new Date().getTime();
    groupedarea.activo = false;
    await groupedarea.save();

    //Delete the Areas
    const area_groupeds = await UnitArea.findAll({
      where: {
        grouped_area_id: id,
      },
    });
    for (let area of area_groupeds) {
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
    }

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAreabyGroupedAreaId = async (req, res) => {
  const { id } = req.params;
  try {
    const areas = await Area.findAll({
      where: {
        grouped_area_id: id,
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
