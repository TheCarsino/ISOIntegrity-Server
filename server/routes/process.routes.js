import { Router } from "express";
import {
  createProcess,
  deleteProcess,
  getRiskbyProcessId,
  getProcess,
  getProcessbyId,
  updateProcess,
} from "../controllers/process.controller.js";

const router = Router();

router.get("/process", getProcess);
router.get("/process/:id", getProcessbyId);
router.post("/process", createProcess);
router.put("/process/:id", updateProcess);
router.delete("/process/:id", deleteProcess);
router.get("/process/risk/:id", getRiskbyProcessId);

export default router;
