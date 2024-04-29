import { Router } from "express";
import {
  getRiskIndicator,
  getRiskIndicatorDetail,
  getRiskIndicatorbyId,
  getRiskIndicatorDetailbyId,
  getRiskbyRiskIndicatorId,
} from "../controllers/riskindicator.controller.js";

const router = Router();

router.get("/indicator", getRiskIndicator);
router.get("/indicator/detail", getRiskIndicatorDetail);
router.get("/indicator/:id", getRiskIndicatorbyId);
router.get("/indicator/detail/:id", getRiskIndicatorDetailbyId);
router.get("/indicator/risk/:id", getRiskbyRiskIndicatorId);

export default router;
