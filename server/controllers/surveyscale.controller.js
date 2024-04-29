import SurveyScale from "../models/SurveyScale.js";
import SurveyResult from "../models/SurveyResult.js";
import RiskIndicator from "../models/RiskIndicator.js";
import RiskIndicatorCategory from "../models/RiskIndicatorCategory.js";

export const getLatestSurveyResults = async (req, res) => {
  try {
    let surveyResult = [];
    const scales = await SurveyScale.findAll({
      model: SurveyScale,

      include: [
        {
          model: RiskIndicator,
          attributes: ["id", "nombre"],
          include: {
            model: RiskIndicatorCategory,
            attributes: ["nombre"],
          },
        },
      ],
      attributes: [
        "id",
        "descripcion_e1",
        "descripcion_e2",
        "descripcion_e3",
        "descripcion_e4",
        "descripcion_e5",
        "descripcion_e6",
      ],
      required: false,
    });

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
    res.json(surveyResult);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getLatestSurveyResultsbyCategory = async (req, res) => {
  const { category } = req.params;
  try {
    let surveyResult = [];
    const scales = await SurveyScale.findAll({
      model: SurveyScale,

      include: [
        {
          model: RiskIndicator,
          attributes: ["id", "nombre"],
          include: {
            model: RiskIndicatorCategory,
            attributes: ["nombre"],
          },
        },
      ],
      attributes: [
        "id",
        "descripcion_e1",
        "descripcion_e2",
        "descripcion_e3",
        "descripcion_e4",
        "descripcion_e5",
        "descripcion_e6",
      ],
      required: false,
      where: {
        "$RiskIndicator.riskind_cat_id$": category,
      },
    });

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
    res.json(surveyResult);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const createNewSurveyResultHistory = async (req, res) => {
  const { id } = req.params;
  const { escala_seleccion } = req.body;
  let associatedString = "";
  try {
    const associatedScale = await SurveyScale.findOne({
      where: { id: id },
    });
    switch (escala_seleccion) {
      case 1:
        associatedString = associatedScale.descripcion_e1;
        break;
      case 2:
        associatedString = associatedScale.descripcion_e2;
        break;
      case 3:
        associatedString = associatedScale.descripcion_e3;
        break;
      case 4:
        associatedString = associatedScale.descripcion_e4;
        break;
      case 5:
        associatedString = associatedScale.descripcion_e5;
        break;
      case 6:
        associatedString = associatedScale.descripcion_e6;
        break;
      default:
        break;
    }
    if (!associatedString.length)
      return res.json(
        "Can't create a new scale that doesn't exist in the current riskindicator  options"
      );
    let newResult = await SurveyResult.create(
      {
        survey_scale_id: id,
        escala_seleccion,
        fecha_creacion: new Date().getTime(),
      },
      {
        fields: ["survey_scale_id", "escala_seleccion", "fecha_creacion"],
      }
    );

    return res.json(newResult);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getLatestSurveyResultsbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const scale = await SurveyScale.findOne({
      model: SurveyScale,

      include: [
        {
          model: RiskIndicator,
          attributes: ["id", "nombre"],
          include: {
            model: RiskIndicatorCategory,
            attributes: ["nombre"],
          },
        },
      ],
      attributes: [
        "id",
        "descripcion_e1",
        "descripcion_e2",
        "descripcion_e3",
        "descripcion_e4",
        "descripcion_e5",
        "descripcion_e6",
      ],
      required: false,
      where: {
        id: id,
      },
    });

    const result = await SurveyResult.findOne({
      required: false,
      where: {
        survey_scale_id: scale.id,
      },
      attributes: ["escala_seleccion", "fecha_creacion"],
      order: [["fecha_creacion", "DESC"]],
    });

    res.json({
      SurveyScale: scale,
      SurveyResult: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getLatestSurveyResultsbyIndicatorId = async (req, res) => {
  const { id } = req.params;
  try {
    const scale = await SurveyScale.findOne({
      model: SurveyScale,
      include: [
        {
          model: RiskIndicator,
          attributes: ["id", "nombre"],
          include: {
            model: RiskIndicatorCategory,
            attributes: ["nombre"],
          },
        },
      ],
      attributes: [
        "id",
        "descripcion_e1",
        "descripcion_e2",
        "descripcion_e3",
        "descripcion_e4",
        "descripcion_e5",
        "descripcion_e6",
      ],
      required: false,
      where: {
        risks_indicator_id: id,
      },
    });

    const result = await SurveyResult.findOne({
      required: false,
      where: {
        survey_scale_id: scale.id,
      },
      attributes: ["escala_seleccion", "fecha_creacion"],
      order: [["fecha_creacion", "DESC"]],
    });

    res.json({
      SurveyScale: scale,
      SurveyResult: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
