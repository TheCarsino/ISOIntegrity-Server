import { Router } from "express";
import {
  getLatestSurveyResults,
  getLatestSurveyResultsbyCategory,
  createNewSurveyResultHistory,
  getLatestSurveyResultsbyId,
  getLatestSurveyResultsbyIndicatorId,
} from "../controllers/surveyscale.controller.js";

const router = Router();

router.get("/survey/result", getLatestSurveyResults);
router.get("/survey/result/cat/:category", getLatestSurveyResultsbyCategory);
router.post("/survey/result/:id", createNewSurveyResultHistory);
router.get("/survey/result/:id", getLatestSurveyResultsbyId);
router.get("/survey/result/indicator/:id", getLatestSurveyResultsbyIndicatorId);

export default router;
