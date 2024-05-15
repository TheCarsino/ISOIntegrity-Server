import { Router } from "express";
import {
  getRisks,
  getRiskDetail,
  getRiskbyId,
  getRiskDetailbyId,
  createRisk,
  updateRisk,
  deleteRisk,
  getRiskTreatments,
} from "../controllers/risk.controller.js";

const router = Router();

router.get("/risk/treatments", getRiskTreatments);
router.get("/risk", getRisks);
router.get("/risk/detail", getRiskDetail);
router.get("/risk/:id", getRiskbyId);
router.get("/risk/detail/:id", getRiskDetailbyId);
router.post("/risk", createRisk);
router.put("/risk/:id", updateRisk);
router.delete("/risk/:id", deleteRisk);

export default router;
