import { Router } from "express";
import {
  getStandardRequirement,
  getStandardRequirementbyId,
  getRisksbyStandardRequirementId,
  linkRisktoStandardRequirement,
  unlinkRisktoStandardRequirement,
} from "../controllers/standardrequirement.controller.js";

const router = Router();

router.get("/requirement", getStandardRequirement);
router.get("/requirement/:id", getStandardRequirementbyId);
router.get("/requirement/risk/:id", getRisksbyStandardRequirementId);

router.post("/requirement/risk", linkRisktoStandardRequirement);
router.delete("/requirement/risk/:id", unlinkRisktoStandardRequirement);

export default router;
