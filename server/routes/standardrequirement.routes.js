import { Router } from "express";
import {
  getStandardRequirement,
  getStandardRequirementbyId,
  linkRisktoStandardRequirement,
  unlinkRisktoStandardRequirement,
} from "../controllers/standardrequirement.controller.js";

const router = Router();

router.get("/requirement", getStandardRequirement);
router.get("/requirement/:id", getStandardRequirementbyId);

router.post("/requirement/risk/:id", linkRisktoStandardRequirement);
router.delete("/requirement/risk/:id", unlinkRisktoStandardRequirement);

export default router;
