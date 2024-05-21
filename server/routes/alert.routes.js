import { Router } from "express";
import {
  testMetrics,
  createReportWhistleAlert,
  deleteReportWhistleAlert,
  getReportWhistleAlertbyUserId,
  getReportRiskFactorbyUserId,
  createReportRiskFactor,
  deleteReportRiskFactor,
} from "../controllers/alert.controller.js";

const router = Router();

router.get("/alert/metric/test", testMetrics);
router.get("/alert/whistlealert/:id", getReportWhistleAlertbyUserId);
router.post("/alert/whistlealert", createReportWhistleAlert);
router.delete("/alert/whistlealert/:id", deleteReportWhistleAlert);
router.get("/alert/metric/test", testMetrics);
router.get("/alert/factoralert/:id", getReportRiskFactorbyUserId);
router.post("/alert/factoralert", createReportRiskFactor);
router.delete("/alert/factoralert/:id", deleteReportRiskFactor);

export default router;
