import { Router } from "express";
import {
  createArea,
  deleteArea,
  getArea,
  getAreabyId,
  getUnitAreabyAreaId,
  updateArea,
} from "../controllers/area.controller.js";

const router = Router();

router.get("/area", getArea);
router.get("/area/:id", getAreabyId);
router.post("/area", createArea);
router.put("/area/:id", updateArea);
router.delete("/area/:id", deleteArea);
router.get("/area/unitarea/:id", getUnitAreabyAreaId);

export default router;
