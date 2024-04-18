import { Router } from "express";
import {
  createGroupedArea,
  deleteGroupedArea,
  getAreabyGroupedAreaId,
  getGroupedArea,
  getGroupedAreabyId,
  updateGroupedArea,
} from "../controllers/groupedarea.controller.js";

const router = Router();

router.get("/groupedarea", getGroupedArea);
router.get("/groupedarea/:id", getGroupedAreabyId);
router.post("/groupedarea", createGroupedArea);
router.put("/groupedarea/:id", updateGroupedArea);
router.delete("/groupedarea/:id", deleteGroupedArea);
router.get("/groupedarea/area/:id", getAreabyGroupedAreaId);

export default router;
