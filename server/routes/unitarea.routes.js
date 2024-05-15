import { Router } from "express";
import {
  createUnitArea,
  deleteUnitArea,
  getProcessbyUnitAreaId,
  getProcessRisksbyUnitAreaId,
  getUnitArea,
  getUnitAreabyId,
  updateUnitArea,
} from "../controllers/unitarea.controller.js";

const router = Router();

router.get("/unitarea", getUnitArea);
router.get("/unitarea/:id", getUnitAreabyId);
router.post("/unitarea", createUnitArea);
router.put("/unitarea/:id", updateUnitArea);
router.delete("/unitarea/:id", deleteUnitArea);
router.get("/unitarea/process/:id", getProcessbyUnitAreaId);
router.get("/unitarea/process/risks/:id", getProcessRisksbyUnitAreaId);

export default router;
