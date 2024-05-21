import { Router } from "express";
import {
  getOrganization,
  getOrganizationbyId,
  getOrganizationbyStructure,
  getOrganizationbyStructureDetail,
} from "../controllers/organization.controller.js";

const router = Router();

router.get("/organization", getOrganization);
router.get("/organization/structure", getOrganizationbyStructure);
router.get("/organization/structure/detail", getOrganizationbyStructureDetail);
router.get("/organization/:id", getOrganizationbyId);

export default router;
