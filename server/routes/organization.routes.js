import { Router } from "express";
import {
  getOrganization,
  getOrganizationbyId,
  getOrganizationbyStructure,
} from "../controllers/organization.controller.js";

const router = Router();

router.get("/organization", getOrganization);
router.get("/organization/structure", getOrganizationbyStructure);
router.get("/organization/:id", getOrganizationbyId);

export default router;
