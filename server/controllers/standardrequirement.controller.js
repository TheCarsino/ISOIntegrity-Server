import Risk from "../models/Risk.js";
import StandardRequirement from "../models/StandardRequirement.js";
import StandardSubrequirement from "../models/StandardSubrequirement.js";

export const getStandardRequirement = async (req, res) => {
  try {
    let stdReqResp = [];
    const stdreqs = await StandardRequirement.findAll();
    for (const stdreq of stdreqs) {
      const stdsub = await StandardSubrequirement.findAll({
        where: {
          std_req_id: stdreq.id,
        },
      });
      stdReqResp.push({
        id: stdreq.id,
        nombre: stdreq.nombre,
        StandardSubRequirement: stdsub,
      });
    }
    res.json(stdReqResp);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getStandardRequirementbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const stdreq = await StandardRequirement.findOne({
      where: {
        id,
      },
    });
    const stdsub = await StandardSubrequirement.findAll({
      where: {
        std_req_id: stdreq.id,
      },
    });
    res.json({
      id: stdreq.id,
      nombre: stdreq.nombre,
      StandardSubRequirement: stdsub,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const linkRisktoStandardRequirement = async (req, res) => {
  {
    res.json("Not implemented yet");
  }
};
export const unlinkRisktoStandardRequirement = async (req, res) => {
  res.json("Not implemented yet");
};
